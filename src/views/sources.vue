<template>
    <b-container fluid>
        <b-row align="center">
            <b-col />
            <b-col>
                <p>{{ sourceCount }} sources</p>
            </b-col>
            <b-col />
        </b-row>
        <b-container class="scroll-panel">
            <b-row align-v="center">       
                <b-col>
                    <source-list />
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
// @ts-check
import { mapActions, mapGetters } from 'vuex';
import SourceList from '../components/source-list.vue';

export default {
    name: 'Sources',
    components: {
        SourceList
    },

    computed: {
        ...mapGetters([
            'sourceCount'
        ])
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
    .scroll-panel {
        overflow-y: auto;
        max-height: 50rem;
    }
</style>
