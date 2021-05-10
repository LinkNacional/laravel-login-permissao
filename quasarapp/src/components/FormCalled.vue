<template>
    <div>
        <q-card class="my-card">
<!-- text-weight-thin -->
        <q-card-section>
            <div class="text-h6 text-center">SISTEMA DE CHAMADOS </div>
            <div class="text-subtitle2">ABRIR NOVOS CHAMADOS</div>
        </q-card-section>
        <q-separator />

        <q-card-section>
            <div class="row">
                 <div class="col-4 input">
                    <div class="text-subtitle2">Assunto *</div>
                    <q-input outlined v-model="prazo" label="Assunto *" />
                </div>
                <div class="col-4 input">
                    <div class="text-subtitle2">Prazo ideal *</div>
                    <q-input outlined v-model="assunto" label="" />
                    <span style="margin-left: 3%;" class="text-weight-thin">Data deve ser maior que a data atual</span>
                </div>
                <div class="col-2 checkbox" >
                    <q-checkbox class="" v-model="urgente" label="urgente *" />
                </div>
            </div>

            <div class="row ">
                <div class="col-11 input">
                    <div class="text-subtitle2">Porque é urgente ?</div>
                    <q-input
                        outlined
                        v-model="urgenteText"
                        type="textarea"
                        label="TextArea, campo opcional e só fica disponível se selecionar o campo urgente. Se for selecionada a opção o campo de texto e o responsável são obrigatórios."
                    />
                </div>
            </div>

            <div class="row">
                 <div class="col-12 input">
                    <div class="col-11 row">
                        <div class="text-subtitle2">responsavel pela Urgência: </div><span style="margin-left: 3%;" class="text-weight-thin">Trazer e comunicar apenas o gestor do usuário solicitante. Mediante a integração ADP ou SAP</span>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <q-input outlined v-model="assunto" style="margin-right: 3%;" label="responsavel pela Urgência: " />
                        </div>
                        <div class="col-2">
                            <span class="text-weight-thin">A listagem do Responsável só será aplicado se a integração de hierarquia for sincronizada.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-11 input">
                    <div class="text-subtitle2">Adicionar peça(s) ao chamado: </div>
                    <q-input outlined v-model="assunto" label="Adicionar peça(s) ao chamado: " />
                    <span class="text-weight-thin">Obrigatório 1 peça no minimo.</span>
                    <br/>
                    <span class="text-weight-thin">Busca com autocompletar de banco de peças da área do chamado</span>
                    <br/>
                    <span class="text-weight-thin">Peças são salvos em banco de dados e podem também ser listados aqui em forma de dropdown, permitir a seleção de no mínimo UM item, sem número máximo de peças. As peças serão agrupados em um mesmo Chamado - Ticket.</span>

                </div>
            </div>

            <div class="row ">
                <div class="col-11 input">
                    <div class="text-subtitle2">*Imformações do chamado :</div>
                    <q-input
                        outlined
                        v-model="urgenteText"
                        type="textarea"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-11 input">
                    <span class="text-subtitle2">Anexar arquivos chamado :</span>
                        <q-uploader
                            url="http://localhost:8080/upload"
                            label="Máximo de 50mb"
                            multiple
                            :filter="checkFileSize"
                            @rejected="onRejected"
                        />
                    <div style="margin-top:3%" class="text-weight-thin">Uso racional dos recursos com a prática de anexo de arquivos,
                    para arquivos leves e o uso de apontamento de caminho de link externo para arquivos pesados.
                    Links poderão ser aplicados no campo de texto.</div>

                </div>
            </div>

            <div class="row input">
                <div class="col-11 row ">
                    <div class="text-subtitle2">*Publico:</div><span style="margin-left: 3%;" class="text-weight-thin">Opção será exibida para peças de Comunicação. Obrigatório, pode selecionar mais que uma opção</span>
                </div>
                <div class=" col-11 row">
                    <q-checkbox style="margin-left:1%" v-model="urgente" label="Ribeirão Preto" />
                    <q-checkbox style="margin-left:1%" v-model="urgente" label="Uberaba" />
                    <q-checkbox style="margin-left:1%" v-model="urgente" label="Guatapará" />
                    <q-checkbox style="margin-left:1%" v-model="urgente" label="Colaboradores Externos" />
                    <q-checkbox style="margin-left:1%" v-model="urgente" label="Todos" />
                </div>
            </div>

            <div class="row input">
                <q-btn style="width:25%" color="primary" @click="save()" label="Salvar" />
            </div>

        </q-card-section>
        </q-card>
        <!-- button float -->

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="fas fa-question" color="accent"></q-btn>
        </q-page-sticky>
        <!--end button float -->

    </div>
</template>

<script>
// import { axiosInstance } from 'boot/axios'

export default {
  name: 'FormCalled',
  data () {
    return {
      arquivos: '',
      informacoes: '',
      pecas: '',
      responsavel: '',
      porqueUrgente: '',
      prazo: '',
      assunto: '',
      urgente: false,
      urgenteText: ''
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
    save () {}

  },
  beforeMount () {
  }
}
</script>
<style>
.input{
    margin-left: 3%;
    margin-bottom: 0%;
    margin-top: 2%;
}
.checkbox{
   margin-left: 10%;
   margin-bottom: 5%;
   margin-top: 4%;
}
</style>
