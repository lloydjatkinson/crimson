<template>
    <div>
        <b-progress
            v-if="sourcesApiPending"
            :value="100"
            :animated="true"
            variant="info"
            class="mb-3" />
        <b-list-group>
            <b-list-group-item
                v-for="(item, index) in sources"
                :key="index"
                class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                        {{ item.name }}
                    </h5>
                    <small>{{ item.country }}-{{ item.language }}</small>
                </div>
                <p class="mb-1">
                    {{ item.description }}
                </p>
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
            'sourcesApiPending',
            'sourceCount',
            'sources'
        ])
    }
};
</script>

<style>

</style>