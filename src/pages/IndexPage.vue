<template>
  <q-page padding>
    <h6>Home Page</h6>
    <router-link :to="{name: 'product-list'}">Admin</router-link>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
