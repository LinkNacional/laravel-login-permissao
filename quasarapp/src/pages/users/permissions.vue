<template>
  <CardPermission :id="id"/>
</template>

<script>
import CardPermission from 'src/components/CardPermission.vue'

export default {
  name: 'permissions',
  props: ['id'],
  data () {
    return {
      isLoaded: false,
      return: {}
    }
  },
  components: { CardPermission }
}
</script>
