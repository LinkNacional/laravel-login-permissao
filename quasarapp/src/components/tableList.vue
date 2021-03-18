<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
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
           <q-th auto-width >
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
          <i v-if="index==0" class="fas fa-circle" style="color:green"></i>
            {{ col.value }}
          </q-td>
          <q-td >
            <q-btn style="margin-left: 25px;" size="sm" color="accent" round dense >
              <i class="fas fa-pen"></i>
            </q-btn>
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      columns: [
        // row-key = id
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
      data: [
        {
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV'
        },
        {
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV'
        },
        {
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV'
        },
        {
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        },
        {
          ativo: 'João Victor A. Viana',
          name: 'João Victor A. Viana',
          email: 'viana.joao@linknacional.com',
          departamento: 'DEV',
          permissões: ''
        }
      ]
    }
  }
}
</script>
