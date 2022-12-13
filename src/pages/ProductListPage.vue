<template>
  <q-page>
    <q-table
    title="Treats"
    :rows="rows"
    :columns="columns">

    <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <!-- <div>
            <q-badge color="purple" :label="props.value" />
          </div>
          <div class="my-table-details">
            {{ props.row.details }}
          </div> -->
          <q-icon icon="edit"/>
        </q-td>
    </template>
    </q-table>
  </q-page>
</template>

<script setup>
import {ref} from 'vue'
const columns = ref([
{ name: 'name', field: 'name', align: 'left'},
{ name: 'actions',  align: 'right'},
])

const rows = ref([
  {name: 'Bread'}
])
</script>
