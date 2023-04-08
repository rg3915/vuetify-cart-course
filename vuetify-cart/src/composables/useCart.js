import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

const isOpen = ref(false)
const cart = useStorage('cart', [])

export const useCart = () => {
  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function add(product) {
    /* Se o produto estiver no carrinho,
    então adicione a quantidade.
    Senão, adicione o produto inteiro. */
    const index = cart.value.findIndex(o => o.id === product.id)

    if (index >= 0) {
      // Está no carrinho, então adiciona a quantidade.
      const currentProduct = cart.value[index]
      currentProduct.quantity += 1
    } else {
      // Caso não esteja no carrinho, então adiciona o produto inteiro.
      product.quantity = 1
      cart.value.push(product)
    }
  }

  function remove(id) {
    const index = cart.value.findIndex(o => o.id === id)

    if (index >= 0) cart.value.splice(index, 1)
  }

  function inCart(id) {
    return cart.value.some(obj => obj.id === id)
  }

  const isEmpty = computed(() => !cart.value.length)

  const total = computed(() => {
    return cart.value.reduce((total, product) => {
      const finalPrice = product.promotion ?? product.price
      return total + (finalPrice * product.quantity)
    }, 0)
  })

  return {
    isOpen,
    open,
    close,
    add,
    remove,
    cart,
    inCart,
    isEmpty,
    total,
  }
}
