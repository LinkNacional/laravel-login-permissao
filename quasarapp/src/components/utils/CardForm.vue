<template>
     <q-card class="my-card">
        <q-card-section>
            <div class="text-h6 text-center">{{textHeader}} </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
            <slot>

            </slot>
        </q-card-section>
        </q-card>

</template>

<script>
export default {
  name: 'ButtonSave',
  props: {
    textHeader: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
