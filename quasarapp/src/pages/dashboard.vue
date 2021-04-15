<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <CardInfoDashboard style="color:purple" v-if=" auths_names.find(element => element == 'Gerenciar usuários') "/>
    </div>
</template>

<script>
import CardInfoDashboard from 'src/components/CardInfoDashboard.vue'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'dashboard',
  data () {
    return {
      auths_list: [],
      auths_names: []

    }
  },
  components: { CardInfoDashboard },
  methods: {
    async auths () {
      axiosInstance.post('/users/permissions')
        .then((response) => {
          this.auths_list = response.data
          Object.entries(this.auths_list).forEach(auth => {
            this.auths_names.push(auth[1][0])
          })
          console.log(this.auths_names)
        })
        .catch((error) => {
          console.log('error /users/permissions', error)
        })
    }
  },
  beforeMount () {
    this.auths()
  }
}
</script>
