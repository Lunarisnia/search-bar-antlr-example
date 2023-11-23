<template>
    <v-card width="400">
        <v-card-item>
            <v-card-title>{{ productName }}</v-card-title>

            <v-card-subtitle>Category: {{ category }}</v-card-subtitle>
            <v-card-subtitle>Brand: {{ brand }}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
            Price: {{ price }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts">

export default {
    props: ["productName", "category", "brand", "price"]
}
</script>