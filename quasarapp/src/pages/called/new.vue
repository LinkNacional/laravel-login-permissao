<template>
    <div >
        <FormCalled style="margin-top: 1%;margin-right: 1%;margin-left: 1%;margin-bottom: 1%;"/>
    </div>
</template>

<script>
import FormCalled from 'src/components/FormCalled.vue'
export default {
  name: 'edit_user',
  props: ['id'],
  data () {
    return {
      user: {},
      logs: [],
      promisse: {}
    }
  },
  components: { FormCalled }
}
</script>
