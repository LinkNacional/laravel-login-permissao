<template>
 <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
                v-model="fabRight"
                vertical-actions-align="right"
                color="primary"
                icon="keyboard_arrow_up"
                direction="up"
            >
            <span  v-for="option in options" :key="option.label">
                <q-fab-action label-position="left" :color="option.color" @click="option.function" :icon="option.icon" :label="option.label" />
            </span>
<!-- // { 'function', 'color', 'icon', 'label' } -->

        </q-fab>
    </q-page-sticky>

</template>

<script>
export default {
  name: 'FloatButton',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fabRight: false
    }
  }
}
</script>
