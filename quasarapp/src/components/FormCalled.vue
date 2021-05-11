<template>
    <div>
        <q-card class="my-card">
        <q-card-section>
            <div class="text-h6 text-center">ABRIR NOVOS CHAMADOS </div>
        </q-card-section>
        <q-separator />

        <q-card-section>
            <div class="row">
                 <div class="col-6 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Assunto *</div>
                    <q-input outlined v-model="prazo"  />
                </div>
                <div class="col-5 q-ml-md q-mb-md">
                    <div class="text-subtitle2">Prazo ideal *</div>
                    <!-- <q-input outlined v-model="assunto"  /> -->

                    <q-input outlined  v-model="date" mask="date" :rules="['date']">
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
                                v-model="Responsibleresult"
                                use-input
                                input-debounce="0"
                                :options="ResponsibleoptionsList"
                                @filter="filterFn"
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
                    <q-input outlined v-model="assunto"  />
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
                <div class=" col-11 row">
                    <q-checkbox class="q-ml-sm" v-model="urgente" label="Ribeirão Preto" />
                    <q-checkbox class="q-ml-sm" v-model="urgente" label="Uberaba" />
                    <q-checkbox class="q-ml-sm" v-model="urgente" label="Guatapará" />
                    <q-checkbox class="q-ml-sm" v-model="urgente" label="Colaboradores Externos" />
                    <q-checkbox class="q-ml-sm" v-model="urgente" label="Todos" />
                </div>
            </div>

           <ButtonSaveBack :buttonBack="true"/>

        </q-card-section>
        </q-card>
        <!-- button float -->
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
                v-model="fabRight"
                vertical-actions-align="right"
                color="primary"
                icon="keyboard_arrow_up"
                direction="up"
            >
                <q-fab-action label-position="left" color="primary" @click="onClick" icon="fas fa-pen" label="Instruções de preenchimento" />
            </q-fab>
        </q-page-sticky>
        <!--end button float -->

    </div>
</template>

<script>
import ButtonSaveBack from 'src/components/utils/ButtonSaveBack.vue'

export default {
  name: 'FormCalled',
  components: { ButtonSaveBack },
  data () {
    return {
      arquivos: '',
      informacoes: '',
      pecas: '',
      porqueUrgente: '',
      prazo: '',
      assunto: '',
      urgente: false,
      urgenteText: '',
      fabRight: false,
      date: '2019/02/01',
      info: '',
      // tag responsavel
      Responsibleresult: [],
      ResponsibleOptionsTotal: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      ResponsibleoptionsList: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
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
    onClick () {
    },
    save () {},
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.ResponsibleoptionsList = this.ResponsibleOptionsTotal
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.ResponsibleoptionsList = this.ResponsibleOptionsTotal.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  beforeMount () {
  }
}
</script>
