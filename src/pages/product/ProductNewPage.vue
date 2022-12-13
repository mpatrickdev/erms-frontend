<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-form
      @submit.prevent="handleSubmit()"
      ref="productForm"
      class="q-gutter-md">
      <q-input
        outlined
        v-model="form.name"
        label="Name"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'required']"
        />
        <q-input
        outlined
        type="textarea"
        v-model="form.description"
        label="Description"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'required']"
        />
        <q-input
        outlined
        v-model="form.category"
        label="Category"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'required']"
        />
        <q-input
        outlined
        v-model="form.sku"
        label="SKU"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'required']"
        />
        <q-input
        outlined
        v-model="form.price"
        label="Price"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'required']"
        />
        <div>
        <q-btn label="Save" type="submit" color="primary"/>
        <q-btn
          label="Cancel"
          class="q-ml-sm"
          :to="{name: 'product-list'}" />
      </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar'

import productService from '../../services/product'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()

const {create, get, update } = productService()

const form = ref({
  _id: '',
  name: '',
  description: '',
  category: '',
  sku: '',
  price: ''
})


const getProduct = async () => {
  try {
    const response = await get(route.params.id)
    form.value = response
  } catch (error) {
    $q.notify({message: 'An error occured. Please try again', icon: 'times', color: 'negative'})
  }
}

const handleSubmit = async () => {
  const msg = ''
  try {
    if(form.value._id){
      await update(form.value)
      msg = 'Product updated successfully'
    }else{
      await create(form.value)
      msg = 'Product created successfully'
    }
    $q.notify({message: msg, icon: 'check', color: 'positive'})
    router.push({name: 'product-list'})
  } catch (error) {
    $q.notify({message: 'An error occured. Please try again', icon: 'times', color: 'negative'})
  }

}


onMounted(async ()=> {
  if(route.params.id){
    await getProduct()
  }

})

</script>
