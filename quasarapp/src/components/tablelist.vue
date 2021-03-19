<template>
  <div class="q-pa-md">

    <q-table
      :title="this.title"
      :data="data"
      :columns="columns"
      row-key="name">

  <template v-slot:header="props">
    <q-tr :props="props">
      <q-th
        v-for="col in props.cols"
        :key="col.name"
        :props="props"
      >
        {{ col.label }}
      </q-th>
      <q-th class="text-center sortable" >
        Permissões
      </q-th>
    </q-tr>
  </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="(col,index) in props.cols"
            :key="col.name"
            :props="props"
          >
          <i v-if="index==0" class="fas fa-circle" :style="{color: props.row.ativo == 1 ? 'green':'gray'}"></i>
            {{ col.value }}
          </q-td>
          <q-td>
            <q-btn @click="props.expand = !props.expand" style="margin-left: 25px;" size="sm" color="accent" round dense >
              <i class="fas fa-pen"></i>
            </q-btn>
          </q-td>
        </q-tr>

        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>

      </template>

    </q-table>
  </div>
</template>
<script>
export default {
  name: 'tablelist',
  props: ['title', 'info'],
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'E-mail', align: 'center', label: 'E-mail', field: 'email', sortable: true },
        { name: 'Departamento', align: 'center', label: 'Departamento', field: 'departamento', sortable: true, required: true }
      ],
      data: []
    }
  },
  methods: {
    formatTable () {
      console.log(this.info.data)
      this.info.data.forEach((user, index) => {
        this.data.push({
          name: user.user.name,
          email: user.user.email,
          departamento: user.departament == null ? '' : user.departament.name,
          ativo: user.user.active
        })
      })
    }
  },
  computed: { },
  beforeMount () {
    this.formatTable()
  }
}
</script>
