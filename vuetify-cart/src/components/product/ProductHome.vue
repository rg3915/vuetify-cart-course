<template>
  <ProductLoading v-if="isLoading" />
  <ProductEmpty v-else-if="!products.length" />
  <ProductList
    v-else
    :products="products"
  />
</template>

<script setup>
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'
import ProductLoading from '@/components/product/ProductLoading.vue'
import ProductEmpty from '@/components/product/ProductEmpty.vue'
import ProductList from '@/components/product/ProductList.vue'

// [] é o initial state.
const { state: products, isLoading } = useAsyncState(
  axios
  .get('http://localhost:3000/products')
  .then(t => t.data), [],
)

</script>
