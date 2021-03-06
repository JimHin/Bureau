<template>
    <q-input
    filled
    dark 
    v-model="champsRecherche" 
    label="Rechercher"
    class="col"
    >

        <template v-slot:append>
          <q-icon 
          v-if="champsRecherche !== ''" 
          name="close" 
          @click="champsRecherche = ''" 
          class="cursor-pointer" />
          <q-icon name="search" />
        </template>

    </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState('taches', ['rechercher']),
        champsRecherche: {
            get(){
                return this.rechercher
            },
            set(value){
                this.definirRechercher(value)
            }
        }
    },
    methods: {
        ...mapActions('taches', ['definirRechercher'])
    }
}
</script>

<style scoped>

</style>