<template>
  <q-page padding>
    <q-table
      title="Products"
      :rows="rows"
      :columns="columns">
      <template v-slot:top>
        <span class="text-h6">Products</span>
        <q-space />
        <q-btn color="secondary" label="Add" :to="{name: 'product-new'}" />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn
            icon="edit"
            dense
            size="sm"
            color="info"
            @click="handleEditProduct(props.row._id)"/>
          <q-btn
            icon="delete"
            dense
            size="sm"
            color="negative"
            @click="handleDeleteProduct(props.row)"/>
            <!-- {{props.row}} -->
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import { useQuasar } from 'quasar'
import productService from '../../services/product'

const router = useRouter()
const $q = useQuasar()

const {fetch, destroy } = productService()

const rows = ref([])
const columns = ref([
  {name: 'sku', label: 'SKU', field: 'sku', align: 'left'},
  {name: 'name', label: 'Name', field: 'name', align: 'left'},
  {name: 'price', label: 'Price', field: 'price', align: 'center'},
  {name: 'actions', label: 'Actions',  align: 'right'}

])

const load = async () => {
  try {
    const data = await fetch('products')
    rows.value = data
  } catch (error) {
    console.log(error)
  }
}

const handleDeleteProduct = async (product) => {
  try {
    $q.dialog({
        title: 'Delete Product',
        message: `Would you like to remove ${product.name}?`,
        cancel: true,
        persistent: true
    }).onOk( async () => {
        // console.log('>>>> OK')
      await destroy(product._id)
      $q.notify({message: 'Product Deleted', icon: 'check', color: 'positive'})
      await load()
    })
  } catch (error) {
    $q.notify({message: 'An error occured. Please try again', icon: 'times', color: 'negative'})
  }
}

const handleEditProduct = (id) => {
  router.push({name: 'product-edit', params: {id: id}})

}

onMounted(()=>{
  load()
})


</script>
