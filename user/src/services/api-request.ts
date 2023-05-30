import { isUrl } from '../lib/string';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import cookie from 'js-cookie';

export interface IResponse<T> {
  status: number;
  data: T;
}

export const TOKEN = 'token';
export const ROLE = 'role';
export const PERFORMER_ROLE = 'performer';
export const USER_ROLE = 'user';
export const STUDIO_ROLE = 'studio';
export const SORT = { descend: 'desc', ascend: 'asc' };

export abstract class APIRequest {
  static token: string = '';

  static API_ENDPOINT: any = null;

  setAuthHeaderToken(token: string) {
    APIRequest.token = token;
  }

  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */
  private parseJSON(response: Response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }

  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */
  private async checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 413) {
      throw new Error('Request Entity Too Large');
    }

    if (response.status === 403 && typeof window !== 'undefined') {
      window.location.href = '/';
      throw new Error('Forbidden in the action!');
    }
    // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;
    throw response.clone().json();
  }

  getBaseApiEndpoint() {
    const { API_ENDPOINT } = APIRequest;
    if (API_ENDPOINT) return API_ENDPOINT;

    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    
    return publicRuntimeConfig.API_ENDPOINT;
  }

  request(
    url: string,
    method?: string,
    body?: any,
    headers?: { [key: string]: string }
  ): Promise<IResponse<any>> {
    const verb = (method || 'get').toUpperCase();
    const baseApiEndpoint = this.getBaseApiEndpoint();

    const updatedHeader = {
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization:
        APIRequest.token || (typeof window !== 'undefined' ? cookie.get(TOKEN) : ''),
      ...(headers || {})
    };

    return fetch(isUrl(url) ? url : `${baseApiEndpoint}${url}`, {
      method: verb,
      headers: updatedHeader as any,
      body: body ? JSON.stringify(body) : null
    })
      .then(this.checkStatus)
      .then(this.parseJSON);
  }

  buildUrl(baseUrl: string, params?: { [key: string]: string | number | boolean }) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params)
      .filter((k) => ![null, undefined, ''].includes(k))
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url: string, headers?: { [key: string]: string }) {
    return this.request(url, 'get', null, headers);
  }

  post(url: string, data?: any, headers?: { [key: string]: string }) {
    return this.request(url, 'post', data, headers);
  }

  put(url: string, data?: any, headers?: { [key: string]: string }) {
    return this.request(url, 'put', data, headers);
  }

  del(url: string, data?: any, headers?: { [key: string]: string }) {
    return this.request(url, 'delete', data, headers);
  }
}
