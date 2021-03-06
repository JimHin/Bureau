<template>
  <q-select
    dark
    filled
    v-model="triePar"
    class="col q-ml-sm"
    emit-value
    map-options
    :options="options"
    label="Trié par"
    stack-label
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            options: [
                {
                    label: 'Nom',
                    value: 'nom'
                },
                {
                    label: 'Date',
                    value: 'dateEcheance'
                }
            ]

        }
    },
    computed: {
        ...mapState('taches', ['tri']),
        
        triePar: {
            get(){
                return this.tri
            },
            set(value){
                this.definirTrierPar(value)
            }
        }
    },
    methods: {
        ...mapActions('taches', ['definirTrierPar'])
    }
}
</script>

<style scoped>
    .q-select {
        flex: 0 0 112px
    }
</style>