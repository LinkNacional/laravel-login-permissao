<template>
  <div class="q-pa-md">

    <div class="row">
        <div class="q-pa-md" style="max-width: 350px"
               v-for="grp,index,val in data_teste" :key="index"
        >

            <q-list bordered>
                <q-item clickable v-ripple>
                <q-checkbox clickable v-on:click.native="checkGroup(index)" v-model="groups" :val="index" :label="index" :color="colors[val]" />
                </q-item>
                <q-separator />

                <q-item clickable v-ripple
                    v-for="permission in grp" :key="permission"
                >
                    <q-checkbox  keep-color v-model="permissions" :val="permission" :label="permission" :color="colors[val]" />
                </q-item>

            </q-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPermission',
  props: ['id'],
  data () {
    return {
      // grupo teste
      group: ['op1'],
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],
      // cores da view
      teal: false,
      orange: false,
      red: false,
      cyan: false,
      // dados de teste
      data_teste: {
        admin: [
          'users',
          'users1',
          'users2'
        ],

        grupo3: [
          'auth2',
          'auth21',
          'auth22'
        ],
        suporte: [
          'auth31',
          'auth32'
        ]
      },

      data: [],
      contador: 0,
      colors: ['teal', 'orange', 'red', 'cyan', 'blue'],
      groups: [],
      // permissions do usuario
      permissions: []
    }
  },
  methods: {
    getPermissions () {
      // var individualcheck
      Object.entries(this.data_teste).forEach((group, index) => {
        // this.groups[group[0]] = true
        // if (this.groups.indexOf(group[0]) === -1) this.groups.push(group[0])
        group[1].forEach(permission => {
          if (this.permissions.indexOf(permission) === -1) this.permissions.push(permission)
          // if (this.permissions.indexOf(permission) === -1) this.permissions.push(index)
        })
      })
      return this.data
    },
    conta () {
      this.contador++
      return (this.contador - 303)
    },
    checkGroup (index) {
      if (this.groups.find(group => group === index)) {
        this.data_teste[index].forEach(permission => {
          this.permissions.push(permission)
        })
      } else {
        this.data_teste[index].forEach(permission => {
          this.permissions = this.permissions.filter(e => e !== permission)
        })
      }
    },
    checkGroupReverse (index) {
      if (this.groups.find(group => group === index)) {
        this.data_teste[index].forEach(permission => {
          this.permissions.push(permission)
        })
      } else {
        this.data_teste[index].forEach(permission => {
          this.permissions = this.permissions.filter(e => e !== permission)
        })
      }
    }

  },
  beforeMount () {
    this.getPermissions()
  },
  watch: {
    permissions: function (val) {
      const selecionPermissions = this.permissions
      const allPermissions = this.data_teste
      Object.entries(allPermissions).forEach((permission) => {
        const permissionsGroup = permission[1]
        const permissionName = permission[0]
        const pass = permissionsGroup.every(permissionGroup => {
          const exist = selecionPermissions.find(permission => permission === permissionGroup)
          if (exist === undefined) {
            return false
          } else {
            return true
          }
        })
        if (!pass) {
          this.groups = this.groups.filter(e => e !== permissionName)
        } else {
          this.groups.push(permissionName)
        }
      })
      console.log('groups', this.groups)
      console.log('selecionPermissions', selecionPermissions)
      console.log('allPermissions', allPermissions)
    }
  }
}
</script>
