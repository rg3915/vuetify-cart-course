<template>
  <v-app theme="dark">
    <v-navigation-drawer
      width="500"
      temporary
      location="right"
      v-model="isOpen"
    >
      <Cart />

    </v-navigation-drawer>

    <v-layout>
      <TheHeader />

      <v-main class="mt-6">
        <v-container>
          <ProductHome />
        </v-container>
      </v-main>

    </v-layout>
  </v-app>
</template>

<script setup>
import { useCart } from '@/composables/useCart'
import Cart from '@/components/cart/Cart.vue'
import TheHeader from '@/components/cart/TheHeader.vue'
import ProductHome from '@/components/product/ProductHome.vue'
const { isOpen } = useCart()
</script>
