import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';

function* getPostsSaga(action) {
	console.log('posts');
}

function* mySaga () {
	yield takeLatest(actions.getPosts.getPostsRequest, getPostsSaga)
}

// generator function ES6

export default mySaga;