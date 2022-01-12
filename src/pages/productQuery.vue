<template>
    <div>
        <div>Post Page</div>
        <div>Post id: {{ id }}</div>
        <router-link :to="{path:'/product',query:{id:id}}">Go to {{id}}</router-link>

    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {ref,watch} from 'vue';
export default {
    setup() {
        const id = ref();
        const route = useRoute();
        watch(() => route.params.id, () => {
            id.value = route.params.id;
        })

        return {
            id
        };
    },
};


</script>