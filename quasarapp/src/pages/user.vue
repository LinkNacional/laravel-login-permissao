<template>
    <TableUsers title="Usuarios" />
</template>

<script>
import TableUsers from 'src/components/TableUsers.vue'

export default {
  name: 'tableuser',
  data () {
    return {
      return: {}
    }
  },
  components: { TableUsers }
}
</script>
