<template>
    <div>
        <CardForm textHeader="ABRIR NOVOS CHAMADOS">
            <div class="row">
                 <div class="col-6 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Assunto *</div>
                    <q-input outlined v-model="prazo" :rules="[value => !!value || 'O campo não pode ficar em branco']"  />
                </div>
                <div class="col-5 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Prazo ideal *</div>

                    <q-input outlined v-model="date" mask="date" :rules="['date',val => validDate(val) || 'Data invalida']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date :options="validDate" v-model="date">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>

                </div>
            </div>

            <div class="q-ml-md q-mb-md" >
                <q-checkbox class="" v-model="urgente" label="Urgente" />
            </div>

            <div v-show="urgente" class="row">
                <div class="col-11 q-ml-md q-mb-xl">
                    <div  class="text-subtitle2">Por que é urgente ?</div>
                    <q-input
                        outlined
                        v-model="urgenteText"
                        type="textarea"
                    />
                </div>
            </div>

            <div v-show="urgente"  class="row">
                 <div class="col-12 q-ml-md q-mb-xl">
                    <div class="col-11 row">
                        <div class="text-subtitle2">Responsavel pela Urgência * </div>
                    </div>
                    <div class="row">
                        <div class="col-11">
                            <!-- <q-input outlined v-model="assunto"  /> -->
                             <q-select
                                outlined
                                v-model="responsibleResult"
                                use-input
                                input-debounce="0"
                                :options="responsibleoptionsList"
                                @filter="filterResponsible"
                                use-chips
                                multiple
                                stack-label
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                    <q-item-section class="text-grey">
                                        Sem Resultado
                                    </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-11 q-ml-md q-mb-xl">
                    <div class="text-subtitle2">Adicionar peça(s) ao chamado </div>
                      <q-select
                                outlined
                                v-model="pieceResult"
                                use-input
                                input-debounce="0"
                                :options="pieceOptionsList"
                                @filter="filterPeaces"
                                use-chips
                                multiple
                                stack-label
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                    <q-item-section class="text-grey">
                                        Sem Resultado
                                    </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                </div>
            </div>

            <div class="row ">
                <div class="col-11 q-ml-md q-mb-xl">
                    <div class="text-subtitle2">Informações do chamado *</div>
                    <q-editor outlined v-model="info" :rules="[value => !!value || 'O campo não pode ficar em branco']" min-height="10rem" />
                </div>
            </div>

            <div class="row">
                <div class="col-11 q-ml-md q-mb-xl">
                    <span class="text-subtitle2">Anexar arquivos</span>
                     <div class="text-weight-thin q-mb-sm q-mt-sm">Uso racional dos recursos com a prática de anexo de arquivos,
                    para arquivos leves e o uso de apontamento de caminho de link externo para arquivos pesados.
                    Links poderão ser aplicados no campo de texto.</div>
                        <q-uploader
                            url="http://localhost:8080/upload"
                            label="Máximo de 50mb"
                            multiple
                            :filter="checkFileSize"
                            @rejected="onRejected"
                        />

                </div>
            </div>

            <div class="row q-ml-md q-mb-md">
                <div class="col-11 row ">
                    <div class="text-subtitle2">Publico *</div>
                </div>

                <div class="col-11 row" >
                    <div v-for="checkbox in sectors" :key="checkbox.id">
                        <q-checkbox class="q-ml-sm" v-model="urgentes" :val="checkbox.id" :label="checkbox.name" />
                    </div>
                    <div>
                        <q-checkbox class="q-ml-sm" v-on:click.native="checkAll" v-model="todosCheckbox" label="Todos" />
                    </div>
                </div>
            </div>

           <ButtonSaveBack :clickSave="this.save" :buttonBack="true"/>

        </CardForm>
       <FloatButton :options="[{'function':()=>{}, 'color':'primary', 'icon':'fas fa-pen', 'label':'Instruções de preenchimento'}]"/>
    </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'
import { Notify } from 'quasar'

import ButtonSaveBack from 'src/components/utils/ButtonSaveBack.vue'
import CardForm from 'src/components/utils/CardForm.vue'
import FloatButton from 'src/components/utils/FloatButton.vue'

export default {
  name: 'FormCalled',
  plugins: { Notify },
  components: { ButtonSaveBack, CardForm, FloatButton },
  data () {
    return {
      porqueUrgente: '',
      prazo: '',
      assunto: '',
      urgentes: [],
      urgentesAll: [],
      urgente: false,
      urgenteText: '',
      sectors: [],
      date: this.getToday(),
      info: '',
      // tag responsavel
      responsibleResult: [],
      responsibleOptionsTotal: [],
      responsibleoptionsList: [],
      // fim tag responsavel
      // tag peça
      pieceResult: [],
      pieceOptionsTotal: [],
      pieceOptionsList: [],
      todosCheckbox: false,
      isLoaded: true
      // fim tag peça
    }
  },
  methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 5120)
    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    filterResponsible (val, update) {
      if (val === '') {
        update(() => {
          this.responsibleoptionsList = this.responsibleOptionsTotal
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.responsibleoptionsList = this.responsibleOptionsTotal.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterPeaces (val, update) {
      if (val === '') {
        update(() => {
          this.pieceOptionsList = this.pieceOptionsTotal
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.pieceOptionsList = this.pieceOptionsTotal.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    validDate (date) {
      const today = this.getToday()
      const dateForm = this.formatDate(date)
      return dateForm >= today
    },
    formatDate (date) {
      var dia = date.split('/')[0]
      var mes = date.split('/')[1]
      var ano = date.split('/')[2]
      return dia + '/' + mes + '/' + ano
    },
    getToday () {
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      const yyyy = today.getFullYear()
      return yyyy + '/' + mm + '/' + dd
    },
    save () {
      this.partsID = []
      this.responsiblesID = []

      this.Parts.forEach(part => {
        this.pieceResult.forEach(piece => {
          if (part.title === piece) {
            this.partsID.push(part.id)
          }
        })
      })

      this.User.forEach(user => {
        this.responsibleResult.forEach(responsible => {
          if (responsible === user.name) {
            this.responsiblesID.push(user.id)
          }
        })
      })
      if (!this.verifyCamps()) {
        axiosInstance.post('/called', {
          matter: this.prazo,
          deadline: this.date,
          urgent: this.urgente,
          why_urgent: this.urgenteText,
          infos: this.info,
          sectors: this.urgentes,
          responsibles: this.responsiblesID,
          parts: this.partsID
        })
          .then(response => {
            console.log(response)
          })
      }
    },
    verifyCamps () {
      if (this.prazo === '') {
        this.alertNotify('Campo assunto em branco')
        return false
      }
      if (!this.validDate(this.date)) {
        this.alertNotify('Campo prazo ideal em branco')
        return false
      }
      if (this.info === '') {
        this.alertNotify('Campo informações do chamado ideal em branco')
        return false
      }
      if (this.urgentes.length === 0 && !this.todosCheckbox) {
        this.alertNotify('Campo caixas publico em branco')
        return false
      }
      if (this.responsiblesID.length === 0 && this.urgente) {
        this.alertNotify('Campo responsavel pela urgência em branco')
        return false
      }
    },
    loadStop () {
      this.$q.loading.hide()
      this.isLoaded = false
    },
    checkAll () {
      console.log(this.urgentes)
      if (this.todosCheckbox) {
        this.urgentes = this.urgentesAll
      } else {
        this.urgentes = []
      }
    },
    alertNotify (message) {
      this.$q.notify({
        type: 'negative',
        message: message
      })
    }
  },
  beforeMount () {
    this.$q.loading.show()
    axiosInstance.post('/called/request').then((response) => {
      this.User = response.data[0]
      this.Parts = response.data[1]
      this.sectors = response.data[2]

      this.Parts.forEach(element => {
        this.pieceOptionsTotal.push(element.title)
      })

      this.User.forEach(element => {
        this.responsibleOptionsTotal.push(element.name)
      })

      this.sectors.forEach(element => {
        this.urgentesAll.push(element.id)
      })

      this.loadStop()
    }).catch((error) => {
      console.log(error)
      this.loadStop()
    })
  }
}
</script>
