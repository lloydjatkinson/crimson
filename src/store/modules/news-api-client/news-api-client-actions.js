import { shuffle } from 'lodash';
import apiResponse from '../../../services/apis/api-response';
import { getAsync } from '../../../services/apis/news-api-client';
import {
    SET_API_REQUEST_PENDING,
    SET_API_REQUEST_SUCCESS,
    SET_API_REQUEST_FAILURE,
    UPDATE_LATEST_ARTICLES
} from './news-api-client-mutation-types';

const actions = {
    // TODO: Don't hardcode source, allow multiple, etc.
    async updateLatestArticles ({ commit, state }) {
        commit(SET_API_REQUEST_PENDING);
        
        // Temporary.
        const key = '6017b19103d04b0cbfcd48b14114c809';
        const response = await getAsync(key, 'ars-technica');
        const response2 = await getAsync(key, 'reuters');
        const response3 = await getAsync(key, 'national-geographic');
        const response4 = await getAsync(key, 'bbc-news');
        const response5 = await getAsync(key, 'forbes');

        const shuffled = shuffle([
            ...response.articles,
            ...response2.articles,
            ...response3.articles,
            ...response4.articles,
            ...response5.articles]);

        switch (response.apiResponse) {
        case apiResponse.SUCCESS:
            commit(SET_API_REQUEST_SUCCESS);
            commit(UPDATE_LATEST_ARTICLES, shuffled);
            break;

        case apiResponse.FAILURE:
            commit(SET_API_REQUEST_FAILURE);
            break;
        
        default:
            break;
        }
    }
};

export default actions;
