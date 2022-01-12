<template>
    <div><span class="text-orange text-weight-bolder">Size Chart:</span></div>
    <ul v-for="item in items" :key="item.id" style="list-style-type:none">
      <q-btn class="q-mt-md btn-size" :class="{active:item.clicked}" @click="isSelected(item.id)" >{{item.size}}</q-btn>
    </ul>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex';
export default {
  setup() {
    const $store = useStore()
      const isSelected = (id) => {
        $store.dispatch('productDetails/getSizeItem',id)
      }
    return {
      items : computed(()=> $store.getters['productDetails/getSizeChart']),
      isSelected,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
display:inline;
 overflow: hidden;
}
.btn-size {
  border: hotpink;
}
.active {
  background-color: orange;
  color: white;
}

</style>