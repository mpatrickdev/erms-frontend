<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above
        :breakpoint="767"
        bordered
        content-class="bg-gray-2"
        :width="200"
      >
      <q-list>
        <q-item
          v-for="nav in navs"
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="primary">
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :icon="nav.icon"
          :to="nav.to"
          :label="nav.label"></q-route-tab>
      </q-tabs>

    </q-footer>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'

const drawer = ref(false)
const navs = ref([
  {
    label: 'Home',
    icon: 'home',
    to: '/dashboard'
  },
  {
    label: 'Products',
    icon: 'list',
    to: '/dashboard/products'
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/dashboard/settings'
  }
])
</script>

<style>
@media screen and (min-width: 768px){
  .q-footer{
    display: none;
  }
}
</style>
