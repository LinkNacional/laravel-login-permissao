<template>
  <div v-show="!isLoadedLog" class="q-pa-md">
    <q-input
      v-model="text"
      filled
      type="textarea"
      rows="20"
      :disable="true"
    />
  </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'

export default {

  name: 'LogUser',
  props: ['promisse', 'id'],
  data () {
    return {
      text: '',
      cont: 0,
      log: '',
      isLoadedLog: true
    }
  },
  methods: {
    async getlog () {
      this.promisse.then((response) => {
        this.log = response.data
        this.log.shift()
        this.log.forEach(log => {
          this.cont++
          this.text += 'Data/hora: '
          this.text += log.data
          this.text += ' IP: '
          this.text += log.ip
          this.text += ' Status: '
          this.text += log.status === 'ok' ? 'sucesso;' : 'falhou;'
          this.text += '\n'
        })
        this.loadStopLog()
      })
        .catch((error) => {
          console.log(error)
          this.loadStopLog()
        })
    },
    loadStopLog () {
      this.$q.loading.hide()
      this.isLoadedLog = false
    }
  },
  beforeMount () {
    this.getlog()
  },
  updated () {
    this.$nextTick(function () {
      axiosInstance.post('users/edit/' + this.id + '/refresh').then((response) => {
        this.text = ''
        console.log(response.data)
        response.data.forEach(log => {
          this.text += 'Data/hora: '
          this.text += log.data
          this.text += ' IP: '
          this.text += log.ip
          this.text += ' Status: '
          this.text += log.status === 'ok' ? 'sucesso;' : 'falhou;'
          this.text += '\n'
        })
      })
    })
  }
}
</script>
