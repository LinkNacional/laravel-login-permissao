<template>
  <q-page :style="{ backgroundColor:color }" class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">sistema de chamados</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="mail" label="E-mail" />
              <q-input square filled clearable v-model="password" type="password" label="Senha" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated size="lg" :style="{ Color:color }" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <a @click="esqueciasenha" style="cursor: pointer;" class="text-grey-6">Esqueci a Senha</a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      color: '#D2D700'
    }
  },
  methods: {
    esqueciasenha () {
      console.log('send email')
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
