<template>
  <div class="q-mt-lg q-mx-xl">
    <q-card class="q-pa-lg">
      <div class="q-pa-sm text-center text-h5 bg-grey-4 form-title"
      style="margin: -25px -25px 25px -25px">Criação de peça</div>

      <div style="font-size:18px"> Área de Comunicação </div>
      <q-radio v-model="shape" val="Criação" label="Criação" />
      <q-radio v-model="shape" val="Mídia Digital" label="Mídia Digital" />
      <q-radio v-model="shape" val="Comunicação" label="Comunicação" />

      <div style="font-size:18px" class="q-mt-md"> Título da peça </div>
      <q-input square outlined
        v-model="peca_text"
        placeholder="Título"
        counter maxlength="50"
        class="input-field"
      />

      <div style="font-size:18px" class="field-text"> Valor de mercado </div>
      <q-input square outlined
        v-model="valor_text"
        prefix="R$"
        class="input-field"
        maxlength="12"
        fill-mask="0"
        mask="#,##"
        thousands-separator="."
        reverse-fill-mask
      />

      <div style="font-size:18px" class="field-text q-mt-md"> Cor do ícone </div>
      <q-input
        square outlined
        v-model="icon_color"
        :rules="['anyColor']"
        class="input-field"
        mask="\#xxxxxx"
      >
        <template v-slot:prepend>
          <q-icon name="circle" v-bind:style="{ color: icon_color}"/>
        </template>
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer" :color="icon_color">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="icon_color" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-card-actions align="right">
        <q-btn :to="{ path: '/parts' }" >Cancelar</q-btn>
        <q-btn color="primary">Adicionar Peça</q-btn>
      </q-card-actions>

    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shape: '',
      peca_text: '',
      valor_text: '',
      icon_color: '#1976D2'
    }
  }
}
</script>
