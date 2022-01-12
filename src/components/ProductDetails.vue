<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-header>
    <span class="material-icons product-details-back">
arrow_back
</span>
  </q-header>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div>
    <div class="row bg-white q-mt-sm">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="q-pa-md">

          
            <img infinite :src="product_cart.image" alt="product-image" class="product-image" />
            


        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-pa-md">
        <!--<q-scroll-area :style="{'height':(win_height-200)+'px'}">-->
        <div class="row">
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12" :class="$q.platform.is.desktop ? '' : 'q-px-md'">
            <div class="text-subtitle1 text-grey-10 q-mt-sm q-pt-xs">
              <span class="text-weight-bolder">{{product_cart.brand}}</span><br/>{{product_cart.title}}
            </div>
            <div>
              <q-chip size="10px" class="text-weight-bold q-px-xs" square color="green-7" text-color="white"
                      icon-right="star">
                {{product_cart.rating}}
              </q-chip>
            </div>
            <div>
              <div class="text-subtitle1 q-mt-sm text-grey-10"><span class="text-black-8 text-weight-bolder">Description:</span><br/>{{product_cart.description}}</div>
            </div>
            <div class="q-mt-sm text-weight-bold">
              Offers
              <ul class="q-pl-sm text-caption" style="list-style-type: none">
                <li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> 5% Unlimited Cashback on Axis Bank
                  Credit
                  Card <a class="text-primary text-weight-bolder">T&C</a></li>
                <li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> 5% Unlimited Cashback on Axis Bank
                  Credit
                  Card <a class="text-primary text-weight-bolder">T&C</a></li>
                <li class="q-mt-xs"><span class="text-weight-bold">Bank Offer</span> OfferExtra 5% off* <a
                  class="text-primary text-weight-bolder">T&C</a></li>
              </ul>
            </div>
            <div class="q-mt-sm">
              <div class="text-weight-bolder">Price:<br/><span class="text-h6 q-pa-md">₹. {{product_cart.price}}/-</span></div>
              <div class="text-subtitle1 text-green-8 text-weight-bold">In stock.</div>
              <span>Quantity:</span><br/>
              <div class="q-pa-md">
                <q-btn
                  v-touch-repeat:0:1000.mouse.enter.space="decrement"
                  color="primary"
                  push
                  round
                  class="q-mr-sm"
                  icon="remove"
                />

                <span class="q-mx-md">
                  {{ count }}
                </span>
                <q-btn
                  v-touch-repeat:0:1000.mouse.enter.space="increment"
                  color="primary"
                  push
                  round
                  icon="add"
                />
            </div>
              <div>
                <SizeChart />
              </div>
              </div>
            <div class="q-mt-md">
              <q-btn class="q-mt-md" color="orange-9" icon="shopping_cart" label="Add to cart" @click="cartList"/>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-mt-md q-pt-xs q-pl-lg">
            <div class="text-subtitle2">Customer rating</div>
            <div class="text-h3">{{product_cart.rating}}</div>
            <div>
              <q-rating
                v-model="rating_point"
                max="5"
                size="2em"
                color="orange"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
                readonly
              />
            </div>
            <div class="text-subtitle2 text-grey-8">({{product_cart.reviews}} reviews)</div>
          </div>
        </div>

        <!--</q-scroll-area>-->
      </div>
    </div>
  </div>
    </q-page-container>
    <div>
      
    </div>
  </q-layout>
</template>



<script>

import {ref,computed,onBeforeMount} from 'vue';
import {useStore} from 'vuex';
import SizeChart from './SizeChart.vue';

export default {
  components: {
    SizeChart
  },
    setup() {
      const $store = useStore()
      const slide = ref(1)
      const stars = ref(5)
      onBeforeMount(() => {
        $store.dispatch('productDetails/res')
    })
      const increment = () => {
       $store.dispatch('productDetails/getIncrement')
      }
      const decrement = () => {
         $store.dispatch('productDetails/getDecrement')
      }
      const cartList = () => {
        $store.dispatch('productDetails/getCartList')
      }
    return {
      count : computed(()=> $store.getters['productDetails/getCount']),
      size: computed(() => $store.getters['productDetails/getSize']),
      items: computed(()=> $store.getters['productDetails/getSizeChart']),
      increment,
      decrement,
      cartList,
      product_cart: computed(() => $store.getters['productDetails/getProduct']),
      slide,
      rating_point: computed(() => $store.getters['productDetails/getRating']),
      stars
    }
    }
}
</script>
