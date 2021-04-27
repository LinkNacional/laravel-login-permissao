<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import Echo from 'laravel-echo'
export default {
  name: 'App',
  created () {
    this.listen()
  },
  methods: {
    listen () {
      window.Pusher = require('pusher-js')

      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
        forceTLS: true
      })

      console.log(this.$echo.channel('channel'))
    }
  }
}
</script>
