<template>
  <q-page class="window-height window-width background row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-gray q-my-md">sistema de chamados</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <div class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="mail" label="E-mail" />
              <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Senha">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

            </div>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated size="lg" @click="login" :style="{ Color:color }" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <a @click="forgotPassword()" style="cursor: pointer;" class="text-grey-6">Esqueci a Senha</a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'
import { Notify } from 'quasar'

export default {
  name: 'Login',
  plugins: { Notify },
  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
      remember: false,
      color: '#D2D700'
    }
  },
  methods: {
    forgotPassword () {
    },
    async login () {
      axiosInstance.post('/login', {
        email: this.email,
        password: this.password,
        remember: this.remember
      })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ path: '/dashboard' })
          }
        })
        .catch((error) => {
          // senha ou email errado
          if (error.response.status === 401) {
            this.$q.notify({
              type: 'negative',
              message: 'Senha ou E-mail incorretos.'
            })
          }
        })
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
.background {
  background-image: radial-gradient(circle at 50% 95%, #f7ff05, #a9dd18);
}
</style>
