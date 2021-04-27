<template>
    <div>
        <bold>{{}}</bold>
    </div>
</template>

<script>
// import CardLogin from 'src/components/CardLogin.vue'

export default {
  name: 'teste',
  dcreated () {
    this.listen()
  },
  methods: {
    listen () {
      this.$echo.channel('test').listen('event', payload => {
        console.log(payload)
      })
    }
  }

}
</script>
