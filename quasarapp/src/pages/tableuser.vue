<template>
  <q-page class="flex flex-center">
    <tablelist v-if="isLoaded" :info="this.return" title="Usuarios" />
  </q-page>
</template>

<script>
import tablelist from 'src/components/tablelist.vue'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'tableuser',
  data () {
    return {
      isLoaded: false,
      return: {}
    }
  },
  components: { tablelist },

  methods: {
    async login () {
      axiosInstance.post('/users')
        .then((response) => {
          this.return = response
          this.isLoaded = true
        })
        .catch((error) => {
          console.log(error)
          this.isLoaded = false
        })
    }
  },
  beforeMount () {
    this.login()
  }

}
</script>
