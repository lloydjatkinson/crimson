// @ts-check
import axios from 'axios';
import apiResponse from './api-response';

const baseAddress = 'https://newsapi.org/v2';

export const sort = Object.freeze({
    TOP: 0,
    LATEST: 1,
    POPULAR: 2
});

export const getArticles = async (apiKey, source, sortBy = sort.POPULAR) => {
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

export const getSources = async (apiKey) => {
    const sourcesResponse = { };
    try {
        const response = await axios.get(`${baseAddress}/sources`, {
            params: { language: 'en', apiKey }
        });
        
        sourcesResponse.apiResponse = apiResponse.SUCCESS;
        sourcesResponse.sources = response.data.sources;
    } catch (error) {
        sourcesResponse.apiResponse = apiResponse.FAILURE;
    }

    return sourcesResponse;
};