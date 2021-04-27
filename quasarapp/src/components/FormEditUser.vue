<template>
    <div v-show="!isLoaded">
        <form>
            <div class="q-pa-md">
              <div>
                 <label>Hora Técnica</label>
               <div style="margin-bottom:1%" class="row ">
                    <q-input filled style="width:75%" v-model="hora_tecnica"  >
                       <template v-slot:prepend>
                        R$
                      </template>
                    </q-input>
                    <q-btn style="width:25%" color="primary" @click="save()" label="Salvar" />
                </div>
              </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="name"  label="Nome"/>
                </div >
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="sobrenome"  label="Sobrenome"/>
                </div >
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="email"  label="E-Mail"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="departamento"  label="Departamento"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="gerente"  label="Gestor do usuário"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="unidade"  label="Unidade"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="telefone"  label="Telefone"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="cargo"  label="Cargo"/>
                </div>
                <div style="margin-bottom:1%">
                    <q-input  :disable="true" v-model="ramal"  label="Ramal"/>
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
