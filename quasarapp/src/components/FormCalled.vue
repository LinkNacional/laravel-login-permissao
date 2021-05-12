<template>
    <div>
        <CardForm textHeader="ABRIR NOVOS CHAMADOS">
            <div class="row">
                 <div class="col-6 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Assunto *</div>
                    <q-input outlined v-model="prazo"  />
                </div>
                <div class="col-5 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Prazo ideal *</div>
                    <!-- <q-input outlined v-model="assunto"  /> -->

                    <q-input outlined v-model="date" mask="date" :rules="['date',val => optionsFn(val) || 'Data invalida']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date :options="optionsFn" v-model="date">
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
                    <q-editor outlined v-model="info" min-height="10rem" />
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
                    <div class="text-subtitle2">Publico *</div><span style="margin-left: 3%;" class="text-weight-thin">Opção será exibida para peças de Comunicação. Obrigatório, pode selecionar mais que uma opção</span>
                </div>

                <div class="col-11 row" >
                    <div v-for="checkbox in checkboxPublic" :key="checkbox.id">
                        <q-checkbox class="q-ml-sm" v-model="urgente" :val="checkbox.id" :label="checkbox.cidade" />

                    </div>
                </div>
            </div>

           <ButtonSaveBack :buttonBack="true"/>

        </CardForm>
       <FloatButton :options="[{'function':()=>{}, 'color':'primary', 'icon':'fas fa-pen', 'label':'Instruções de preenchimento'}]"/>
    </div>
</template>

<script>
import ButtonSaveBack from 'src/components/utils/ButtonSaveBack.vue'
import CardForm from 'src/components/utils/CardForm.vue'
import FloatButton from 'src/components/utils/FloatButton.vue'

export default {
  name: 'FormCalled',
  components: { ButtonSaveBack, CardForm, FloatButton },
  data () {
    return {
      porqueUrgente: '',
      prazo: '',
      assunto: '',
      urgente: [],
      urgenteText: '',
      date: '2019/02/01',
      info: '',
      // tag responsavel
      responsibleResult: [],
      responsibleOptionsTotal: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      responsibleoptionsList: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      // fim tag responsavel
      // tag peça
      pieceResult: [],
      pieceOptionsTotal: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      pieceOptionsList: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      // fim tag peça
      checkboxPublic: [{ cidade: 'Ribeirão Preto', id: 1 }, { cidade: 'Uberaba', id: 2 }, { cidade: 'Guatapará', id: 3 }, { cidade: 'Colaboradores Externos', id: 4 }, { cidade: 'Todos', id: 5 }]
    }
  },
  methods: {
    checkFileSize (files) {
      // ver depois
      return files.filter(file => file.size < 5000)
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
    optionsFn (date) {
      return date >= '2019/02/03' && date <= '2019/02/15'
    }
  },
  beforeMount () {
  }
}
</script>
