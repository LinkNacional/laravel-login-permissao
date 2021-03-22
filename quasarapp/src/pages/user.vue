<template>
    <TableUsers v-if="isLoaded" :info="this.return" title="Usuarios" />
</template>

<script>
import TableUsers from 'src/components/TableUsers.vue'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'tableuser',
  data () {
    return {
      isLoaded: false,
      return: {}
    }
  },
  components: { TableUsers },

  methods: {
    async getUsers () {
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
    this.getUsers()
  }

}
</script>
