<template>
  <q-page
  class="q-pa-md bg-dark"
  >
    <q-list
    separator 
    bordered>
      <q-item-label header>Liste des Tâches</q-item-label>
      <tache
        v-for="(tache, key ) in taches"
        :key='key'
        :tache="tache"
        :id="key"
      ></tache>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      @click="showAjouterTache = !showAjouterTache"
      round
      color="brown-7"
      size="24px"
      icon="add"
      >
      </q-btn>
    </div>

    <q-dialog v-model="showAjouterTache">
      <add-todo/>
    </q-dialog>

  </q-page>
</template>

<script>
import Tache from 'src/components/Taches/Tache.vue'
import AddTodo from 'src/components/Taches/Modals/AddTodo'
import { mapGetters } from 'vuex'
export default {
  name: 'PageTodo',
  data() {
    return {
      showAjouterTache: false
    }
  },
  computed: {
    ...mapGetters('taches', ['taches'])
  },
  components: {
    Tache,
    AddTodo
  }
}
</script>
<style scoped>

</style>
