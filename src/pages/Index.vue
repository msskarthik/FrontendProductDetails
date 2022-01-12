<template>
  <q-page class="flex">
    <ProductDetails />
  </q-page>
</template>

<script>
import {useRoute} from 'vue-router'
import ProductDetails from 'components/ProductDetails.vue'

export default {
  components : {
    ProductDetails,
  },
  setup(){
    const route = useRoute();
    console.log(route.params);
  }
}
</script>
