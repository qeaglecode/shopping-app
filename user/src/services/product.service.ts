import { APIRequest } from './api-request';

export class ProductService extends APIRequest {
	getProducts(query?: { [key: string]: any }) {
		return this.get(this.buildUrl('/book'), query)
	}
}

export const productService = new ProductService();