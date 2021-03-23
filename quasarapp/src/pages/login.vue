<template>
  <q-layout>
    <q-page-container>
      <CardLogin/>
    </q-page-container>
  </q-layout>
</template>

<script>
import CardLogin from 'src/components/CardLogin.vue'

export default {
  name: 'login',
  data () {
    return {
      isLoaded: false,
      return: {}
    }
  },
  components: { CardLogin }
}
</script>
