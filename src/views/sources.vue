<template>
    <b-container>
        <b-row align-v="center">
            <b-col>
                <source-list />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// @ts-check
import { mapActions } from 'vuex';
import SourceList from '../components/source-list.vue';

export default {
    name: 'Sources',
    components: {
        SourceList
    },

    created () {
        this.updateNewsSources();
    },

    methods: {
        ...mapActions([
            'updateNewsSources'
        ])
    }
};
</script>

<style>

</style>
