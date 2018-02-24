// @ts-check
import axios from 'axios';
import apiResponse from './api-response';

const sort = Object.freeze({
    TOP: 0,
    LATEST: 1,
    POPULAR: 2
});

const get = async (apiKey, source, sortBy = sort.LATEST) => {
    const newsResponse = { };
    try {
        const response = await axios.get('https://newsapi.org/v1/articles', {
            params: { source, apiKey, sortBy }
        });

        newsResponse.apiResponse = apiResponse.SUCCESS;
        newsResponse.articles = response.data.articles;
    } catch (error) {
        return {
            apiResponse: apiResponse.FAILURE
        };
    }

    return newsResponse;
};

export default {
    sort,
    get
};