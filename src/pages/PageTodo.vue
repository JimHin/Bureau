<template>
  <q-page
  class="q-pa-md bg-dark"
  >
    <div class="row q-mb-lg">
      <recherche />
      <tri />
    </div>

    <p class="text-brown-7" v-if="rechercher && !Object.keys(tachesARealiser).length && !Object.keys(tachesARealiser).length">Aucun résultat pour cette recherche.</p>
    
    <aucune-tache 
    v-if="!Object.keys(tachesARealiser).length && !rechercher">
    </aucune-tache>

    <tache-a-realiser 
    :tachesARealiser = "tachesARealiser" 
    v-if="Object.keys(tachesARealiser).length"
    />

    <tache-accomplie 
    :tachesAccomplies = "tachesAccomplies" 
    v-if="Object.keys(tachesAccomplies).length"
    />

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
// import des composants nécessaires pour accéder aux tâches à accomplir ou accomplies et au formulaire d'ajout
import AddTodo from 'src/components/Taches/Modals/AddTodo'
import TacheARealiser from 'src/components/Taches/TacheARealiser.vue'
import TacheAccomplie from 'src/components/Taches/TacheAccomplie.vue'
// import des Getters contenu dans le store
import { mapGetters, mapState } from 'vuex'
import AucuneTache from 'src/components/Taches/AucuneTache.vue'
import Recherche from 'src/components/Taches/Tools/Recherche.vue'
import Tri from 'src/components/Taches/Tools/Tri.vue'
export default {
  name: 'PageTodo',
  data() {
    return {
      showAjouterTache: false
    }
  },
  computed: {
    // On permet ici à PageTodo.vue d'accéder aux getters du store
    ...mapGetters('taches', ['tachesARealiser', 'tachesAccomplies']),
    ...mapState('taches', ['rechercher'])
  },
  mounted() {
    this.$root.$on('showAjouterTache', () => {
      this.showAjouterTache = true
    })
  },
  components: {
    // Après leurs import on déclare nos deux composants comme étant embarqués dans celui-ci
    AddTodo,
    TacheARealiser,
    TacheAccomplie,
    AucuneTache,
    Recherche,
    Tri
  }
}
</script>
<style scoped>

</style>
