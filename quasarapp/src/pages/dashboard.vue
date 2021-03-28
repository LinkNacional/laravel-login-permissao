<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <CardInfoDashboard style="color:green" v-if="auths_list[1]"/>
      <CardInfoDashboard style="color:black" v-if="auths_list[2]"/>
      <CardInfoDashboard style="color:blue" v-if="auths_list[3]"/>
      <CardInfoDashboard style="color:red" v-if="auths_list[4]"/>
      <CardInfoDashboard style="color:purple" v-if=" auths_names.find(element => element == 'users') "/>
      <CardInfoDashboard style="color:yelow" v-if=" auths_names.find(element => element == 'auth2') "/>
      <CardInfoDashboard style="color:green" v-if=" auths_names.find(element => element == 'auth3') "/>
      <CardInfoDashboard style="color:black" v-if=" auths_names.find(element => element == 'auth4') "/>
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
      axiosInstance.post('users/auths/all')
        .then((response) => {
          this.auths_list = response.data
          Object.entries(this.auths_list).forEach(auth => {
            this.auths_names.push(auth[1][0])
          })
          console.log(this.auths_names)
        })
        .catch((error) => {
          console.log('error /auths', error)
        })
    }
  },
  beforeMount () {
    this.auths()
  }
}
</script>
