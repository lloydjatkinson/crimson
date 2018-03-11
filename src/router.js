import Vue from 'vue';
import Router from 'vue-router';
import Feed from './views/feed.vue';
import About from './views/About.vue';
import Sources from './views//sources';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'feed',
            component: Feed
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/sources',
            name: 'sources',
            component: Sources
        }
    ]
});