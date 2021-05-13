<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Sistema de Chamados
        </q-toolbar-title>

        <div><a href='#' @click="logout">Sair</a></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { axiosInstance } from 'boot/axios'

const linksData = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Usuários',
    caption: 'Menu de usuários',
    icon: 'supervisor_account',
    link: '/users'
  },
  {
    title: 'Chamados',
    caption: 'Menu de chamados',
    icon: 'fas fa-headset',
    link: '/called/new'
  },
  {
    title: 'Peças',
    icon: 'construction',
    link: '/parts'
  }

]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    logout () {
      axiosInstance.post('/logout')
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
