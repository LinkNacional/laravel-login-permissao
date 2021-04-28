import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'e1b950a49e2964e115dc',
  wsHost: '127.0.0.1',
  wsPort: 6001,
  forceTLS: false,
  disableStatus: true
})

// export { echo }
