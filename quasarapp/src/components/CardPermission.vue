<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">

      <div class="row col-12">
        <q-checkbox clickable v-model="admin"  v-on:click.native="checkAll()" val="Admin" label="Admin" color="red"  />
      </div>

      <div class="row">
        <div class="q-pa-md" style="max-width: 350px"
        v-for="grp,index,val in data_teste" :key="index"
        >
          <q-list bordered >
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
      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'

export default {
  name: 'CardPermission',
  props: ['id'],
  data () {
    return {
      // cores da view
      teal: false,
      orange: false,
      red: false,
      cyan: false,
      // dados de teste
      data_teste: {
      },

      data: [],
      admin: false,
      contador: 0,
      colors: ['teal', 'orange', 'red', 'cyan', 'blue'],
      groups: [],
      // permissions do usuario
      permissions: []
    }
  },
  methods: {

    getPermissionsFromUser () {
      axiosInstance.post('/users/permissions/' + this.id).then((response) => {
        response.data.forEach(permission => {
          this.permissions.push(permission.name)
        })
      })
    },
    onSubmit () {
      axiosInstance.put('/users/permissions/', {
        permissions: this.permissions,
        groups: this.groups,
        admin: this.admin,
        id: this.id
      }).then((response) => {
      })
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
    checkAll () {
      if (!this.admin) {
        this.permissions = []
        return 'false'
      }
      var allPermissions = this.data_teste
      Object.entries(allPermissions).forEach((permission) => {
        permission.forEach((permission_, index) => {
          if (index !== 0) {
            permission_.forEach((permission__) => {
              if (!this.permissions.find(permission => permission === permission__)) {
                this.permissions.push(permission__)
              }
            })
          }
        })
      })
    },
    getAllPermissions () {
      axiosInstance.post('/users/auths').then((response) => {
        this.data_teste = response.data
        delete this.data_teste['all auths']
      })
    },
    checkGroupReverse () {
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
          if (!this.groups.find(group => group === permissionName)) {
            this.groups.push(permissionName)
          }
        }
      })
    }
  },
  beforeMount () {
    this.getAllPermissions()
    this.getPermissionsFromUser()
  },
  watch: {
    permissions: function () {
      const selecionPermissions = this.permissions
      const allPermissions = this.data_teste
      var cont = 0

      Object.entries(allPermissions).forEach((permission) => {
        const permissionsGroup = permission[1]
        const permissionName = permission[0]
        const pass = permissionsGroup.every(permissionGroup => {
          cont++
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
          if (!this.groups.find(group => group === permissionName)) {
            this.groups.push(permissionName)
          }
        }
      })
      if (cont === selecionPermissions.length) {
        this.admin = true
      } else {
        this.admin = false
      }
    }
  }
}
</script>
