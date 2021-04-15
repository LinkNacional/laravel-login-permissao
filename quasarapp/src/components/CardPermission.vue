<template>
  <div v-show="!loading" class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">

      <div class="row col-12">
        <!-- <q-checkbox clickable v-model="admin" :val="false" v-on:click.native="checkAll()" label="Admin" color="red"  /> -->
        <q-checkbox clickable @input="checkAll()" v-model="admin" label="Admin" color="red"  />
      </div>

      <div class="row">
        <div class="q-pa-md col-4"
        v-for="grp,index,val in allPermissions" :key="index"
        >
          <q-list bordered >
            <q-item clickable v-ripple>
            <q-checkbox clickable v-on:click.native="checkGroup(index)" v-model="groups" :val="index" :label="index" :color="colors[val]" />
            </q-item>
            <q-separator />
            <div
            v-for="permission in grp" :key="permission"
            >
                 <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label><q-checkbox  keep-color v-model="permissions" :val="permission[0]" :label="permission[0]" :color="colors[val]" /></q-item-label>
                      <q-item-label caption>{{permission[1]}}</q-item-label>
                    </q-item-section>
                  </q-item>
            </div>
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
      // dados de teste
      allPermissions: {},
      data: [],
      admin: false,
      contador: 0,
      colors: ['teal', 'orange', 'red', 'cyan', 'blue'],
      groups: [],
      // permissions do usuario
      permissions: [],
      loading: true
    }
  },
  methods: {
    loadingStop () {
      this.$q.loading.hide()
      this.loading = false
    },
    onSubmit () {
      axiosInstance.post('/users/permissions/save', {
        permissions: this.permissions,
        groups: this.groups,
        admin: this.admin,
        id: this.id
      }).then((response) => {
        console.log(response)
      })
    },
    checkGroup (index) {
      if (this.groups.find(group => group === index)) {
        this.allPermissions[index].forEach(permission => {
          this.permissions.push(permission[0])
        })
      } else {
        this.allPermissions[index].forEach(permission => {
          this.permissions = this.permissions.filter(e => e !== permission[0])
        })
      }
    },
    checkAll () {
      if (this.admin) {
        var allPermissions = this.allPermissions
        Object.entries(allPermissions).forEach((permission) => {
          permission.forEach((permission_, index) => {
            if (index !== 0) {
              permission_.forEach((permission__) => {
                if (!this.permissions.find(permission => permission === permission__[0])) {
                  this.permissions.push(permission__[0])
                }
              })
            }
          })
        })
        this.$nextTick(function () {
          this.admin = true
        })
      } else {
        this.permissions = []
        this.$nextTick(function () {
          this.admin = false
        })
      }
    },
    getPermissions () {
      this.$q.loading.show()
      axiosInstance.post('/users/permissions/' + this.id).then((response) => {
        this.allPermissions = response.data.all_permissions
        delete this.allPermissions['all auths']
        response.data.user_permissions.forEach(permission => {
          this.permissions.push(permission)
        })
        this.loadingStop()
      }).catch((error) => {
        console.log(error)
        this.loadingStop()
      })
    },
    checkGroupReverse () {
      const selecionPermissions = this.permissions
      const allPermissions = this.allPermissions
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
          this.groups = this.groups.filter(e => e !== permissionName[0])
        } else {
          if (!this.groups.find(group => group === permissionName[0])) {
            this.groups.push(permissionName[0])
          }
        }
      })
    }
  },
  watch: {
    permissions: function () {
      const selecionPermissions = this.permissions
      const allPermissions = this.allPermissions
      var cont = 0

      Object.entries(allPermissions).forEach((permission) => {
        const permissionsGroup = permission[1]
        const permissionName = permission[0]
        const pass = permissionsGroup.every(permissionGroup => {
          cont++
          const exist = selecionPermissions.find(permission => permission === permissionGroup[0])
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
  },
  beforeMount () {
    this.getPermissions()
  }
}
</script>
