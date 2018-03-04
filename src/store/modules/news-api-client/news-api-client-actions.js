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

        const response = await getAsync('6017b19103d04b0cbfcd48b14114c809', 'ars-technica');
        const response2 = await getAsync('6017b19103d04b0cbfcd48b14114c809', 'reuters');
        const response3 = await getAsync('6017b19103d04b0cbfcd48b14114c809', 'national-geographic');
        const response4 = await getAsync('6017b19103d04b0cbfcd48b14114c809', 'bbc-news');

        const shuffled = shuffle([...response.articles, ...response2.articles, ...response3.articles, ...response4.articles]);

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