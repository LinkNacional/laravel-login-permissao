<template>
  <div class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.sm"
      :title="this.title"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :pagination.sync="pagination"
      >

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Busca">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            v-show="col.label != ''"

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
            style="width:20%"
            v-for="(col) in props.cols"
            :key="col.name"
            :props="props"
            v-show="col.name != 'id'"
          >
            <span>{{ col.value }}</span>
          <i v-if="col.name == 'Ativo'" class="fas fa-circle" :style="{color: props.row.ativo == 1 ? 'green':'gray'}"></i>
          </q-td>
          <q-td class="text-center">
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
      filter: '',
      pagination: {
        rowsPerPage: 7
      },
      columns: [
        { name: 'id', align: 'left', label: '', field: '' },

        { name: 'name', required: true, label: 'Nome', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'E-mail', align: 'center', label: 'E-mail', field: 'email', sortable: true },
        { name: 'Departamento', align: 'center', label: 'Departamento', field: 'departamento', sortable: true, required: true },
        { name: 'Ativo', align: 'center', label: 'Status', field: 'status', sortable: true, required: true }
      ],
      data: [
        { id: '2', name: 'joao Victor Amorim VIana da silva', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '3', name: 'joao', email: 'viana.joao@linknacional.com.br', departamento: 'Desenvolvimento de sistemas PHP', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '5', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' },
        { id: '6', name: 'joao', email: '$gmail.com', departamento: 'dep1', ativo: '1' }
      ]
    }
  },
  methods: {
    formatTable () {
      console.log(this.info.data)
      this.info.data.forEach((user, index) => {
        this.data.push({
          id: user.user.id,
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
