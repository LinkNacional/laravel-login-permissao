<template>
  <q-page class="flex flex-center">
    <tableList title="Usuarios"/>
  </q-page>
</template>

<script>
import tableList from 'src/components/tableList.vue'
export default {
  components: { tableList },
  name: 'tableUser'
}
</script>
