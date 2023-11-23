<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <center>
          <h1>Cooler Cosmart</h1>
        </center>
        <v-text-field density="compact" placeholder="What are you thinking?" prepend-inner-icon="mdi-magnify"
          variant="outlined" @change="showCards"></v-text-field>
        <center>
          <v-row>
            <v-col v-bind:key="item.name" v-for="item in items" align-self="center">
              <ItemCard :productName="item.name" :category="item.category" :brand="item.brand" :price="item.price" />
            </v-col>
          </v-row>
        </center>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script lang="ts">

export default {
  data: () => {
    return {
      categories: ["Electronic", "Skincare", "Toy"],
      items: [
        {
          name: "Redmi 69420",
          brand: "Xiaomi",
          category: "Electronic",
          price: 30
        },
        {
          name: "Pocopon 6969",
          brand: "Xiaomi",
          category: "Electronic",
          price: 20
        },
        {
          name: "Samsung Galaxy Z Fold 69",
          brand: "Samsung",
          category: "Electronic",
          price: 69
        },
      ]
    }
  },
  mounted: () => {

  },
  methods: {
    showCards() {

    }
  }
}
</script>