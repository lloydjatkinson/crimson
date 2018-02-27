// @ts-check
import Vue from 'vue';
import Vuex from 'vuex';
import newsApiStore from './modules/news-api-client/news-api-client-store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        newsApiStore
    },
    strict: debug
});