<template>
  <CartEmpty v-if="isEmpty" />
  <CartProducts v-else />
</template>

<script setup>
import { useCart } from '@/composables/useCart'
import CartEmpty from '@/components/cart/CartEmpty.vue'
import CartProducts from '@/components/cart/CartProducts.vue'

const { isEmpty } = useCart()

</script>
