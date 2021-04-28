
<template>
  <div class="q-pa-md">
    <q-input
      v-model="text"
      filled
      type="textarea"
      rows="20"
    />
  </div>
</template>

<script>
import Echo from 'laravel-echo'

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
    loadStopLog () {
      this.$q.loading.hide()
      this.isLoadedLog = false
    },
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
    socket () {
      window.Echo.channel('channel')
        .listen('Hello', (e) => {
          this.log = ''
          this.text = ''
          this.log = e
          console.log(e)
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
        })
    }
  },
  beforeMount () {
    window.Pusher = require('pusher-js')

    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 'e1b950a49e2964e115dc',
      wsHost: '127.0.0.1',
      wsPort: 6001,
      forceTLS: false,
      disableStatus: true
    })

    this.socket()
    this.getlog()
  }
}

</script>
