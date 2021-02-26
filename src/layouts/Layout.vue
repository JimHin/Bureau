<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center text-grey-9">
          BUREAU
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
        <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to" 
        :icon="nav.icon" 
        :label="nav.label" 
        />
        </q-tabs>
    </q-footer>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-brown-9"
      :breakpoint='767'
      :width="250"
    >
      <q-list dark>
        <!-- Lien vers la page PageTodo -->
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
        >
          <q-item-section
            avatar
          >
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label:'Tâches',
          icon:'list',
          to:'/'
        },
        {
          label:'Rdv',
          icon:'people',
          to:'/meets'
        },
        {
          label:'Notes',
          icon:'note',
          to:'/notes'
        },
        {
          label:'Projets',
          icon:'table_chart',
          to:'/projects'
        },
        {
          label:'Paramètres',
          icon:'settings',
          to:'/settings'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (min-width: 768px){
    .q-footer{
      display: none;
    }
  }
  .q-drawer {
      .q-router-link--exact-active{
      color:rgb(145, 110, 70);
    }
  } 
</style>
