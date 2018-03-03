<template>
    <div class="container-fluid">
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <div
                v-masonry-tile
                v-for="(item, index) in newsArticles" :key="index"
                class="item">
                <div class="card" style="width: 20rem;">
                    <img :src="item.urlToImage" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title"><a :href="item.url">{{ item.title }}</a></h5>
                        <p class="card-text">{{ item.description }}</p>
                        <p v-if="item.publishedAt" class="card-text">
                            <small class="text-muted">Published at {{ item.publishedAt }}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Feed',
    components: {
        HelloWorld
    },

    computed: {
        newsArticles () {
            return this.$store.state.newsApiStore.articles;
        }
    },

    created () {
        this.$store.dispatch('updateLatestArticles');
    },

    methods: {
  	    refresh () {
    	    this.$store.dispatch('updateLatestArticles');
        }
    }
};
</script>

<style lang="scss">
    .item {
        // width: 250px;
        // height: 150px;
        float: left;
        margin: 5px;
        background: #CCC;
}
</style>
