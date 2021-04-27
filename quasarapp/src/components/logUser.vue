
<template>
  <div v-show="!isLoadedLog" class="q-pa-md">
    <q-input
      v-model="text"
      filled
      type="textarea"
      rows="20"
    />
  </div>
</template>
<script src="https://js.pusher.com/7.0/pusher.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>

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
    },
    socket () {
        Pusher.logToConsole = true;

      var pusher = new Pusher('e1b950a49e2964e115dc', {
        cluster: 'mt1'
      });

      var channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        app.messages.push(JSON.stringify(data));
    });
    }
  },
  beforeMount () {
    this.getlog()
    // this.socket()
  }

}
</script>
