// @ts-check
import {
    SET_ARTICLE_API_REQUEST_PENDING,
    SET_ARTICLE_API_REQUEST_SUCCESS,
    SET_ARTICLE_API_REQUEST_FAILURE,

    SET_SOURCES_API_REQUEST_PENDING,
    SET_SOURCES_API_REQUEST_SUCCESS,
    SET_SOURCES_API_REQUEST_FAILURE,

    UPDATE_NEWS_SOURCES,
    UPDATE_LATEST_ARTICLES
} from './news-api-client-mutation-types';

const mutations = {
    [SET_ARTICLE_API_REQUEST_PENDING] (state) {
        state.articleApiPending = true;
    },

    [SET_ARTICLE_API_REQUEST_SUCCESS] (state) {
        state.articleApiPending = false;
    },

    [SET_ARTICLE_API_REQUEST_FAILURE] (state) {
        state.articleApiPending = false;
    },

    [SET_SOURCES_API_REQUEST_PENDING] (state) {
        state.sourcesApiPending = true;
    },

    [SET_SOURCES_API_REQUEST_SUCCESS] (state) {
        state.sourcesApiPending = false;
    },

    [SET_SOURCES_API_REQUEST_FAILURE] (state) {
        state.sourcesApiPending = false;
    },

    [UPDATE_NEWS_SOURCES] (state, newsSources) {
        state.sources = newsSources;
    },

    [UPDATE_LATEST_ARTICLES] (state, articles) {
        state.articles = articles;
    }
};

export default mutations;