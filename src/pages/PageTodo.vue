<template>
  <q-page
  class="q-pa-md bg-dark"
  >
    <!-- composant list permettant d'afficher la liste des tâches -->
    <q-list
    separator 
    bordered
    v-if="Object.keys(taches).length"
    >
      <!-- Titre de la liste  -->
      <q-item-label header>Liste des Tâches</q-item-label>
      <!-- Parcours de l'objet taches pour itérer les tâches -->
      <tache
        v-for="(tache, key ) in taches"
        :key='key'
        :tache="tache"
        :id="key"
      ></tache>
    </q-list>
    <!-- Conteneur de placement du bouton ajouter -->
    <div class="absolute-bottom text-center q-mb-lg">
      <!-- Bouton avec une icône + permettant d'afficher le modal contenant le formulaire d'ajout exprimé ci-dessous -->
      <q-btn
      @click="showAjouterTache = !showAjouterTache"
      round
      color="brown-7"
      size="24px"
      icon="add"
      >
      </q-btn>
    </div>
    <!--Appel au composant AddTodo.vue dans une balise q-dialog qui s'appuie sur le booléen showAjouterTache pour s'afficher ou non -->
    <q-dialog v-model="showAjouterTache">
      <add-todo @fermer="showAjouterTache = false" />
    </q-dialog>

  </q-page>
</template>

<script>
// import des deux composants nécessaires pour accéder aux tâches et au formulaire d'ajout
import Tache from 'src/components/Taches/Tache.vue'
import AddTodo from 'src/components/Taches/Modals/AddTodo'
// import des Getters contenu dans le store
import { mapGetters } from 'vuex'
export default {
  name: 'PageTodo',
  data() {
    return {
      showAjouterTache: false
    }
  },
  computed: {
    // On permet ici à PageTodo.vue d'accéder aux getters du store
    ...mapGetters('taches', ['taches'])
  },
  components: {
    // Après leurs import on déclare nos deux composants comme étant embarqués dans celui-ci
    Tache,
    AddTodo
  }
}
</script>
<style scoped>

</style>
