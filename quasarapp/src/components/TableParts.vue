<template>
  <div v-show="!this.isLoaded" class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.sm"
      :title="this.title"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :rows-per-page-options="rows_per_page_options"
      :loading="loadingTable"
      >

      <template v-slot:top-right>
        <q-input borderless dense debounce="600" v-model="filter"  :to="{ path: `/users/search?text_search=${filter}` }" placeholder="Busca">
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
          <i style="margin-left: 10%;" v-if="col.name === 'Status'" class="fas fa-circle" :style="{color: col.value == 1 ? 'green':'gray'}"></i>
          <q-btn v-else-if="col.name == 'Permissões'"  :to="{ path: '/users/permission/'+props.key }" style="margin-left: 5%;" size="sm" color="accent" round dense ><i class="fas fa-pen"></i></q-btn>
          <span v-else >{{ col.value }}</span>
          </q-td>
        </q-tr>

        <q-tr
        v-show="props.expand"
        :props="props"
        v-for="col in props.cols"
        :key="col.name"
        >

          <q-td class="bg-grey-2" colspan="100%" v-show="col.label == '' && col.field != ''">
            <div class="text-left">
              {{ col.field }}: {{ col.value }}
            </div>
          </q-td>
        </q-tr>

         <q-td
        v-show="props.expand"
         class="bg-grey-2" colspan="100%">
            <div class="text-left">
              <q-btn class="full-width" text-color="black" color="standard" :to="{ path: '/users/edit/'+props.key }" label="Editar usuário" />
            </div>
          </q-td>

      </template>
      <template v-slot:bottom>
        <div class=" row items-center justify-end" style="margin-left:55%">
          <div class="q-table__separator col"></div>
          <div class="q-table__control" >
            <span class="q-table__bottom-item">paginas:</span>

            <q-select :disable="loadingTable ?'disable':'enable'" dense v-model="rowsPerPage" :options="rows_per_page_options" />
          </div>
          <div class="q-table__control">
            <span class="q-table__bottom-item">{{pagination.page}}-{{pagination.lastPage}} de {{pagination.rowsNumber}}</span>
            <!-- |< -->
              <q-btn @click="firstPage()" flat color="primary" :disable="pagination.page==1 || loadingTable ?'disable':'enable'" icon="first_page"/>

            <!-- < -->
              <q-btn @click="previousPage()"  flat :disable="pagination.page==1 || loadingTable ?'disable':'enable'" color="primary" icon="chevron_left"/>

            <!-- > -->
              <q-btn @click="nextPage()" flat :disable="pagination.page==pagination.lastPage || loadingTable?'disable':'enable'" color="primary" icon="chevron_right"/>

            <!-- >| -->
              <q-btn @click="lastPage()" flat :disable="pagination.page==pagination.lastPage || loadingTable?'disable':'enable'" color="primary" icon="last_page"/>

          </div>
        </div>
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
      total_num_rows: 0,
      isLoaded: true,
      rowsPerPage: 7,
      loadingTable: false,
      rows_per_page_options: [5, 7, 10, 20, 50, 'Todos'],
      pagination: {
        page: 1,
        rowsPerPage: 7,
        rowsNumber: 0,
        lastPage: 0
      },

      columns: [
        { name: '0id', align: 'left', label: '', field: '' },
        { name: 'Permissões', align: 'left', label: 'Permissões', field: 'Permissões' },
        { name: 'Status', align: 'left', label: 'status', field: 'status', sortable: false, required: true },
        { name: 'name', required: true, label: 'Nome', align: 'center', field: row => row.name, format: val => `${val}`, sortable: false },
        { name: 'E-mail', align: 'center', label: 'E-mail', field: 'email', sortable: false },
        { name: 'Departamento', align: 'left', label: 'Departamento', field: 'departamento', sortable: false, required: true },
        { name: '0gerente', align: 'center', label: '', field: 'Gestor do usuário', sortable: false, required: true },
        { name: '0Unidade', align: 'center', label: '', field: 'Unidade', sortable: false, required: true },
        { name: '0Sobrenome', align: 'center', label: '', field: 'Sobrenome', sortable: false, required: true },
        { name: '0Fone', align: 'center', label: '', field: 'Telefone', sortable: false, required: true },
        { name: '0Cargo', align: 'center', label: '', field: 'Cargo', sortable: false, required: true },
        { name: '0Ramal', align: 'center', label: '', field: 'Ramal', sortable: false, required: true },
        { name: '0Hora_Técnica', align: 'center', label: '', field: 'Hora Técnica', sortable: true, required: true }
      ],
      data: []
    }
  },
  watch: {
    filter: function () {
      axiosInstance.post(`/users?page=${this.pagination.page}&rows=${this.pagination.rowsPerPage}&search=${this.filter}`)
        .then((response) => {
          this.data = []
          this.formatTable(response.data.users)
          this.pagination.rowsNumber = response.data.total_num_rows
          this.pagination.lastPage = this.pagination.rowsPerPage === 0 ? 1 : Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
          this.loadStop()
        })
    },
    rowsPerPage: function () {
      this.loadingTable = true
      this.pagination.rowsPerPage = this.rowsPerPage === 'Todos' ? 0 : this.rowsPerPage
      this.pagination.page = 1
      this.updatePage()
    }
  },
  methods: {

    // paginação
    nextPage () {
      console.log('nextPage')
      // this.$q.loading.show()
      this.loadingTable = true
      this.pagination.page++
      this.updatePage()
    },
    previousPage () {
      console.log('previousPage')
      // this.$q.loading.show()
      this.loadingTable = true
      this.pagination.page--
      this.updatePage()
    },
    firstPage () {
      console.log('firstPage')
      // this.$q.loading.show()
      this.loadingTable = true
      this.pagination.page = 1
      this.updatePage()
    },
    lastPage () {
      console.log('lastPage')
      this.loadingTable = true
      this.pagination.page = this.pagination.lastPage
      this.updatePage()
    },
    updatePage () {
      axiosInstance.post(`/users?page=${this.pagination.page}&rows=${this.pagination.rowsPerPage}`)
        .then((response) => {
          this.data = []
          this.formatTable(response.data.users)
          console.log(response.data.users)
          this.pagination.rowsNumber = response.data.total_num_rows
          this.pagination.lastPage = this.pagination.rowsPerPage === 0 ? 1 : Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
          this.loadStop()
        })
        .catch((error) => {
          console.log(error)
          this.loadStop()
        })
    },
    // paginação

    formatTable (infos) {
      this.data = []
      infos.forEach((user) => {
        this.data.push({
          id: user.id,
          name: user.name,
          email: user.email,
          departamento: user.department,
          administrador: user.admin,
          Unidade: user.unit,
          Sobrenome: user.lastname,
          Telefone: user.phone,
          Cargo: user.role,
          Ramal: user.ramal,
          'Hora Técnica': user.technical_time,
          status: user.active,
          gerente: user.admin

        })
      })
      this.loadStop()
    },
    loadStop () {
      this.$q.loading.hide()
      this.isLoaded = false
      this.loadingTable = false
    }
  },
  beforeMount () {
    this.$q.loading.show()
    this.updatePage()
  }
}
</script>
