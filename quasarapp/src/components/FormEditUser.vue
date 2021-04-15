<template>
    <div v-show="!isLoaded">
        <form>
            <div class="q-pa-md">
                <div>
                    <q-input :disable="true" v-model="name" filled label="Nome"/>
                </div>
                <div>
                    <q-input :disable="true" v-model="sobrenome" filled label="Sobrenome"/>
                </div>
                <div >
                    <q-input :disable="true" v-model="email" filled label="E-Mail"/>
                </div>
                <div >
                    <q-input :disable="true" v-model="departamento" filled label="Departamento"/>
                </div>
                <div >
                    <q-input :disable="true" v-model="gerente" filled label="Gestor do usuário"/>
                </div>
                <div >
                    <q-input :disable="true" v-model="unidade" filled label="Unidade"/>
                </div>
                <div >
                    <q-input :disable="true" v-model="telefone" filled label="Telefone"/>
                </div>
                <div>
                    <q-input :disable="true" v-model="cargo" filled label="Cargo"/>
                </div>
                <div>
                    <q-input :disable="true" v-model="ramal" filled label="Ramal"/>
                </div>
                <div>
                    <q-input v-model="hora_tecnica" filled label="Hora Tecnica"/>
                </div>
                <div>
                    <q-btn class="full-width" color="primary" @click="save()" label="Salvar" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'

export default {
  name: 'FromEditUser',
  props: ['promisse', 'id'],
  data () {
    return {
      name: '',
      sobrenome: '',
      email: '',
      departamento: '',
      gerente: '',
      unidade: '',
      telefone: '',
      cargo: '',
      ramal: '',
      hora_tecnica: '',
      user: {},
      infos: {},
      details: {},
      isLoaded: true

    }
  },
  methods: {
    async renderDetails () {
      this.promisse.then((response) => {
        this.infos = response.data.shift()
        this.user = this.infos.user
        this.details = this.infos.details
        this.name = this.user.name
        this.sobrenome = this.details.lastname
        this.email = this.user.email
        // this.departamento = this.details.lastname
        // this.gerente
        this.unidade = this.details.unit
        this.telefone = this.details.phone
        this.cargo = this.details.role
        this.ramal = this.details.ramal
        this.hora_tecnica = this.details.technical_time
        this.loadStop()
      })
    },
    save () {
      this.$q.loading.show()
      axiosInstance.post('users/edit/' + this.id + '/save', {
        technical_time: this.hora_tecnica
      })
        .then((response) => {
          console.log(response)
          this.loadStop()
        })
        .catch((error) => {
          console.log(error)
          this.loadStop()
        })
    },
    loadStop () {
      this.$q.loading.hide()
      this.isLoaded = false
    }
  },
  beforeMount () {
    this.renderDetails()
  }
}
</script>
