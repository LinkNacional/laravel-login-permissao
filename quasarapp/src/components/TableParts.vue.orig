<template>
  <div>
    <q-table
      title="Peças"
      :data="data"
      :columns="columns"
      row-key="name"
      class="q-mt-md q-mx-md"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="600" v-model="filter" placeholder="Buscar">
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
          >
            <q-icon v-if="col.name=='color'" name="circle" size='18px' v-bind:style="{color: col.value}"/>

            <q-btn v-else-if="col.name=='edit'" round dense size='sm' icon='edit' color='accent'/>

            <span v-else>{{ col.value }}</span>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-page-sticky position="bottom-right" :offset="[40, 30]">
      <q-fab
        v-model="fab2"
        label="Ações"
        label-position="bottom"
        color="primary"
        icon="keyboard_arrow_left"
        direction="left"
        :hide-label="hideLabels"
        class="float-right"
      >
        <q-fab-action :hide-label="hideLabels" color="positive" :to="{ path: '/parts/create' }" icon="add" label="Criar Peça" />
      </q-fab>
    </q-page-sticky>

  </div>
</template>

<script>
export default {
  data () {
    return {
      visibleColumns: ['title', 'area', 'cost', 'edit'],
      columns: [
        { name: 'color', field: 'color', align: 'right', format (value) { return '#' + value } },
        { name: 'title', align: 'left', label: 'Peça', field: 'title', sortable: true, required: true },
        { name: 'area', align: 'left', label: 'Área de Comunicação', field: 'area', sortable: true, required: true },
        { name: 'cost', align: 'left', label: 'Custo Externo', field: 'cost', sortable: true, format (value) { return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }, required: true },
        { name: 'edit', align: 'left', label: 'Editar', field: 'edit' }
      ],
      data: [
        {
          color: '98E05C',
          title: 'Banner',
          area: 'Mídia Digital',
          cost: 17350,
          edit: ''
        },
        {
          color: 'FF0000',
          title: 'Post Facebook',
          area: 'Mídia Digital',
          cost: 950,
          edit: ''
        },
        {
          color: 'B5579F',
          title: 'Outdoor',
          area: 'Criação',
          cost: 770,
          edit: ''
        },
        {
          color: '0000FF',
          title: 'Embalagem',
          area: 'Criação',
          cost: 650.20,
          edit: ''
        }
      ]
    }
  }
}
</script>
