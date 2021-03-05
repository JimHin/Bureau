<template>
<div>
    <entete-liste
    bgColor="bg-orange-4"
    >
    A Faire
    </entete-liste>
    <!-- composant list permettant d'afficher la liste des tâches non accomplies -->
    <q-list
    separator 
    bordered
    >
      <!-- Parcours de l'objet tachesARealiser pour itérer les tâches -->
      <tache
        v-for="(tache, key ) in tachesARealiser"
        :key='key'
        :tache="tache"
        :id="key"
      ></tache>
    </q-list>
</div>
   
</template>

<script>
import Tache from 'src/components/Taches/Tache.vue'
import EnteteListe from '../Shared/EnteteListe.vue'
export default {
    name: "TacheARealiser",
    props: ['tachesARealiser'],
    components: {
        Tache,
        EnteteListe
    }
}
</script>

<style scoped>

</style>