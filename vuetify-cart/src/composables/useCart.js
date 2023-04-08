import { ref } from 'vue'

const isOpen = ref(false)
const cart = ref([])

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

  return {
    isOpen,
    open,
    close,
    add,
    cart,
  }
}
