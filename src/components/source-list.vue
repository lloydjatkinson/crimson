<template>
    <div>
        <p>{{ sourceCount }} sources</p>
        <b-list-group>
            <b-list-group-item
                v-for="(item, index) in sources" :key="index">
                {{ item.name }}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SourceList',
    computed: {
        ...mapGetters([
            'sourceCount',
            'sources'
        ])
    }
};
</script>

<style>

</style>