import { createActions } from 'redux-actions';

export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payload => payload),
	getPostsFiled: (err) => err
})