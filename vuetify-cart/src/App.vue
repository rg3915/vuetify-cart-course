<template>
  <v-app>
    <v-layout>
      <v-app-bar
        flat
        density="comfortable"
        class="text-center border-b"
      >
        <v-app-bar-title>Vuetify cart</v-app-bar-title>

        <template #append>
          <v-badge
            color="info"
            dot
          >
            <v-icon icon="mdi-cart"></v-icon>
          </v-badge>
        </template>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-card
            flat
            class="border"
          >
            <div class="bg-white px-6 py-2">
              <v-img src="https://images.kabum.com.br/produtos/fotos/99866/monitor-lg-led-23-8-widescreen-full-hd-ips-hdmi-24mk430h_1547830365_m.jpg"></v-img>
            </div>
            <v-card-text>
              <h4>Monitor LG 23.8' IPS, Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H</h4>

              <div class="my-4">
                <div class="font-weight-light text-decoration-line-through mb-n2">R$ 863,62</div>
                <div class="text-h5 font-weight-bold">R$ 729,99</div>
                <div class="font-weight-light">À vista no PIX</div>
              </div>

              <v-btn
                flat
                block
                color="primary"
              >Adicionar</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>

</script>
