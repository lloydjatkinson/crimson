<template>
    <!-- <div class="home">
        <button @click="refresh">Test</button>
        {{ newsArticles }}
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div> -->
    <v-app>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs3 v-for="(item, index) in newsArticles" :key="index">
                    <v-card dark color="secondary">
                        <v-card-media :src="item.urlToImage" height="200px" />
                        <!-- </v-card-media> -->
                        <v-card-title primary-title>
                            <div>
                                <!-- <h3 class="headline mb-0">{{ item.title }}</h3>
                                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
                                <div>
                                    <a class="body-1 white--text" :href="item.url">{{ item.title }}</a>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <!-- <v-btn flat color="orange">Read</v-btn> -->
                            <!-- <v-btn flat color="orange">Explore</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
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
