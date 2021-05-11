<template>
    <div class="row justify-end q-mr-xl ">
        <q-btn-group class="q-mt-md q-mr-xl" spread>
            <q-btn color="primary" @click="clickSave" label="Salvar" />
            <q-btn v-if="buttonBack" color="standard" @click="clickBack" text-color="black" label="Voltar" />
        </q-btn-group>
    </div>
</template>

<script>
export default {
  name: 'ButtonSave',
  props: {
    clickSave: {
      type: Function,
      required: true
    },
    clickBack: {
      type: Function,
      required: false,
      default: null
    },
    buttonBack: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
