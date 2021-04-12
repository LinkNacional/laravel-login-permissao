<template>
  <div v-show="!this.isLoaded" class="q-pa-md">
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
        <q-tr :props="props" style="cursor:pointer" @click="props.expand = !props.expand">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            v-show="col.name.substring(1,0) != '0'"
          >
           <!-- @click="props.expand = !props.expand"  -->
          <i style="margin-left: 10%;" v-if="col.name == 'Status'" class="fas fa-circle" :style="{color: col.value == 1 ? 'green':'gray'}"></i>
          <q-btn v-else-if="col.name == 'Permissões'"  :to="{ path: '/users/permission/'+props.key }" style="margin-left: 5%;" size="sm" color="accent" round dense ><i class="fas fa-pen"></i></q-btn>
          <span v-else >{{ col.value }}</span>
          </q-td>
        </q-tr>

        <q-tr
        v-show="props.expand"
        :props="props"
        v-for="col,index in props.cols"
        :key="col.name"
        >
         <q-td class="bg-grey-2" colspan="100%" v-if="index==0">
            <div class="text-left">
              <q-btn flat :to="{ path: '/users/edit/'+props.key }" label="Editar usuário"></q-btn>
            </div>
          </q-td>

          <q-td class="bg-grey-2" colspan="100%" v-show="col.label == '' && col.field != ''">
            <div class="text-left">
              {{ col.field }}: {{ col.value }}
            </div>
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
      isLoaded: true,
      pagination: {
        rowsPerPage: 7
      },
      columns: [
        { name: '0id', align: 'left', label: '', field: '' },
        { name: 'Permissões', align: 'left', label: 'Permissões', field: 'Permissões' },
        { name: 'Status', align: 'left', label: 'status', field: 'status', sortable: true, required: true },
        { name: 'name', required: true, label: 'Nome', align: 'center', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'E-mail', align: 'center', label: 'E-mail', field: 'email', sortable: true },
        { name: 'Departamento', align: 'left', label: 'Departamento', field: 'departamento', sortable: true, required: true },
        { name: '0Administrador', align: 'center', label: '', field: 'Gerente', sortable: true, required: true },
        { name: '0Unidade', align: 'center', label: '', field: 'Unidade', sortable: true, required: true },
        { name: '0Sobrenome', align: 'center', label: '', field: 'Sobrenome', sortable: true, required: true },
        { name: '0Fone', align: 'center', label: '', field: 'Telefone', sortable: true, required: true },
        { name: '0Cargo', align: 'center', label: '', field: 'Cargo', sortable: true, required: true },
        { name: '0Ramal', align: 'center', label: '', field: 'Ramal', sortable: true, required: true },
        { name: '0Hora_Técnica', align: 'center', label: '', field: 'Hora Técnica', sortable: true, required: true }
      ],
      data: []
    }
  },
  methods: {
    formatTable (infos) {
      infos.data.forEach((user) => {
        this.data.push({
          id: user.user.id,
          name: user.user.name,
          email: user.user.email,
          departamento: user.departament == null ? '' : user.departament.name,
          administrador: 'admin user',
          Unidade: 'unidade ',
          Sobrenome: 'sobrenome',
          Telefone: '88988229962',
          Cargo: 'dev',
          Ramal: '12',
          'Hora Técnica': '10'

        })
      })
      this.loadStop()
    },
    async getUsers () {
      this.$q.loading.show()
      axiosInstance.post('/users')
        .then((response) => {
          this.formatTable(response)
        })
        .catch((error) => {
          console.log(error)
          this.loadStop()
        })
    },
    loadStop () {
      this.$q.loading.hide()
      this.isLoaded = false
    }
  },
  beforeMount () {
    this.getUsers()
  }
}
</script>
