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
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            v-show="col.name != 'id'"
          >
           <!-- @click="props.expand = !props.expand"  -->
          <i style="margin-left: 10%;" v-if="col.name == 'Status'" class="fas fa-circle" :style="{color: col.value == 1 ? 'green':'gray'}"></i>
          <q-btn v-else-if="col.name == 'Permissões'"  :to="{ path: '/users/permission/'+props.key }" style="margin-left: 5%;" size="sm" color="accent" round dense ><i class="fas fa-pen"></i></q-btn>
          <span v-else >{{ col.value }}</span>
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
import { axiosInstance } from 'boot/axios'

export default {
  name: 'tablelist',
  props: ['title'],
  data () {
    return {
      filter: '',
      isLoaded: false,
      pagination: {
        rowsPerPage: 7
      },
      columns: [
        { name: 'id', align: 'left', label: '', field: '' },
        { name: 'Permissões', align: 'left', label: 'Permissões', field: 'Permissões' },
        { name: 'Status', align: 'left', label: 'status', field: 'status', sortable: true, required: true },
        { name: 'name', required: true, label: 'Nome', align: 'center', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'E-mail', align: 'center', label: 'E-mail', field: 'email', sortable: true },
        { name: 'Departamento', align: 'center', label: 'Departamento', field: 'departamento', sortable: true, required: true }
      ],
      data: [
        { id: '1', name: 'joao Victor Amorim VIana da silva', email: 'viana.joao@gmail.com', departamento: 'dep1', status: 1 },
        { id: '2', name: 'joao Victor Amorim VIana da silva', email: 'viana.joao@gmail.com', departamento: 'dep1', status: 1 },
        { id: '3', name: 'joao Victor Amorim VIana da silva', email: 'viana.joao@linknacional.com.br', departamento: 'Desenvolvimento de sistemas PHP', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '4', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '5', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 },
        { id: '5', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 0 },
        { id: '6', name: 'joao', email: '$gmail.com', departamento: 'dep1', status: 1 }
      ]
    }
  },
  methods: {
    formatTable (infos) {
      infos.data.forEach((user, index) => {
        this.data.push({
          id: user.user.id,
          name: user.user.name,
          email: user.user.email,
          departamento: user.departament == null ? '' : user.departament.name,
          Status: user.user.active
        })
      })
      this.$q.loadingBar.stop()
    },
    async getUsers () {
      this.$q.loadingBar.start()
      axiosInstance.post('/users')
        .then((response) => {
          this.formatTable(response)
          this.$q.loadingBar.stop()
        })
        .catch((error) => {
          console.log(error)
          this.$q.loadingBar.stop()
        })
    }
  },
  beforeMount () {
    this.getUsers()
  }
}
</script>
