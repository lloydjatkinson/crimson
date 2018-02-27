<template>
    <div class="home">
        <button @click="refresh">Test</button>
        {{ newsArticles }}
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
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
    	    return this.$store.state.articles;
        }
    },

    methods: {
  	    refresh () {
    	    this.$store.dispatch('updateLatestArticles');
        }
    }
};
</script>
