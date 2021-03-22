<template>
  <q-layout>
    <q-page-container>
      <CardLogin/>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { axiosInstance } from 'boot/axios'
import CardLogin from 'src/components/CardLogin.vue'

export default {
  name: 'login',
  data () {
    return {
      isLoaded: false,
      return: {}
    }
  },
  components: { CardLogin },

  methods: {
    // async getUsers () {
    //   axiosInstance.post('/users')
    //     .then((response) => {
    //       this.return = response
    //       this.isLoaded = true
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       this.isLoaded = false
    //     })
    // }
  },
  beforeMount () {
    // this.getUsers()
  }

}
</script>
