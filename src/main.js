import 'babel-polyfill';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import { VueMasonryPlugin } from 'vue-masonry';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.performance = true;

Vue.use(VueAnalytics, {
    id: atob('VUEtMTE0NzU5MjYyLTE='),
    router
});

Vue.use(VueMasonryPlugin);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
