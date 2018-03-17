import { shuffle } from 'lodash';
import { NEWS_API_KEY } from '../../../services/apis/news-api-key';
import apiResponse from '../../../services/apis/api-response';
import { getArticles, getSources } from '../../../services/apis/news-api-client';
import {
    SET_ARTICLE_API_REQUEST_PENDING,
    SET_ARTICLE_API_REQUEST_SUCCESS,
    SET_ARTICLE_API_REQUEST_FAILURE,

    SET_SOURCES_API_REQUEST_PENDING,
    SET_SOURCES_API_REQUEST_SUCCESS,
    SET_SOURCES_API_REQUEST_FAILURE,

    UPDATE_LATEST_ARTICLES,
    UPDATE_NEWS_SOURCES
} from './news-api-client-mutation-types';

const actions = {
    // TODO: Don't hardcode source, allow multiple, etc.
    async updateLatestArticles ({ commit, state }) {
        commit(SET_ARTICLE_API_REQUEST_PENDING);
        
        // Temporary.
        const response = await getArticles(NEWS_API_KEY, 'ars-technica');
        const response2 = await getArticles(NEWS_API_KEY, 'reuters');
        const response3 = await getArticles(NEWS_API_KEY, 'national-geographic');
        const response4 = await getArticles(NEWS_API_KEY, 'bbc-news');
        const response5 = await getArticles(NEWS_API_KEY, 'time');

        const shuffled = shuffle([
            ...response.articles,
            ...response2.articles,
            ...response3.articles,
            ...response4.articles,
            ...response5.articles]);

        switch (response.apiResponse) {
        case apiResponse.SUCCESS:
            commit(SET_ARTICLE_API_REQUEST_SUCCESS);
            commit(UPDATE_LATEST_ARTICLES, shuffled);
            break;

        case apiResponse.FAILURE:
            commit(SET_ARTICLE_API_REQUEST_FAILURE);
            break;
        
        default:
            throw new TypeError('Unknown API response type.');
            break;
        }
    },

    async updateNewsSources ({ commit, state }) {
        commit(SET_SOURCES_API_REQUEST_PENDING);

        const response = await getSources(NEWS_API_KEY);

        switch (response.apiResponse) {
        case apiResponse.SUCCESS:
            commit(SET_SOURCES_API_REQUEST_SUCCESS);
            commit(UPDATE_NEWS_SOURCES, response.sources);
            break;

        case apiResponse.FAILURE:
            commit(SET_SOURCES_API_REQUEST_FAILURE);
            break;

        default:
            throw new TypeError('Unknown API response type.');
            break;
        }
    }
};

export default actions;
