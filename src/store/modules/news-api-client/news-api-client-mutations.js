// @ts-check
import {
    SET_API_REQUEST_PENDING,
    SET_API_REQUEST_SUCCESS,
    SET_API_REQUEST_FAILURE,
    UPDATE_LATEST_ARTICLES
} from './news-api-client-mutation-types';

const mutations = {
    [SET_API_REQUEST_PENDING] (state) {

    },

    [SET_API_REQUEST_FAILURE] (state) {

    },

    [SET_API_REQUEST_SUCCESS] (state) {

    },

    [UPDATE_LATEST_ARTICLES] (state, articles) {
        state.articles = articles;
    }
};

export default mutations;