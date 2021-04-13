<template>
    <div class="row">
       <div class="col-6">
            <FormEditUser :promisse="promisse" :id="id"/>
        </div>

        <div class="col-6">
        <LogUser :promisse="promisse" :id="id"/>
        </div>

    </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'
import LogUser from 'src/components/logUser.vue'
import FormEditUser from 'src/components/FormEditUser.vue'
export default {
  name: 'edit_user',
  props: ['id'],
  data () {
    return {
      user: {},
      logs: [],
      promisse: {}
    }
  },
  components: { LogUser, FormEditUser },
  methods: {
    getlog () {
      this.promisse = axiosInstance.post('users/edit/' + this.id)
    }

  },
  beforeMount () {
    this.$q.loading.show()
    this.getlog()
  }
}
</script>
