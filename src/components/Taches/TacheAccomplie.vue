<template>
<div class="q-mt-lg">
    <entete-liste
    bgColor="bg-green-4"
    >
    Fini
    </entete-liste>
    <q-list
    separator 
    bordered
    >
      <!-- Parcours de l'objet taches pour itérer les tâches -->
      <tache
        v-for="(tache, key ) in tachesAccomplies"
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
    name: "TacheAccomplie",
    props: ['tachesAccomplies'],
    components: {
        Tache,
        EnteteListe
    }
}
</script>

<style scoped>

</style>
