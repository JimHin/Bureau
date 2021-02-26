<template>
    <q-card>
    <q-card-section class="row">
        <div class="text-h6">Ajouter une Tâche</div>
        <q-space/>
        <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close"
        >

        </q-btn>
    </q-card-section>
    <form 
    @submit.prevent="soumettreFormulaire"
    >
        <q-card-section class="q-pt-none">
            <div class="row q-mb-sm">
                <q-input 
                outlined 
                v-model="tacheASauvegarder.nom"
                :rules="[val => !!val || 'Le nom est requis']"
                ref="nom" 
                label="Nom de la tâche" 
                />
            </div>
            

        
            <div class="row q-mb-sm">
                <q-input
                outlined 
                v-model="tacheASauvegarder.dateEcheance"
                ref="date"
                label="date d'échéance" 
                >
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="tacheASauvegarder.dateEcheance">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                            </q-date>
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="row q-mb-sm">
                <q-input 
                outlined 
                v-model="tacheASauvegarder.heureEcheance"
                ref="time"
                label="heure d'échéance" 
                >
                    <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="tacheASauvegarder.heureEcheance">
                            <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-time>
                        </q-popup-proxy>
                    </q-icon>
                    </template>
                </q-input> 
            </div>



        </q-card-section>

        <q-card-actions align="right">
            <q-btn 
            label="Sauvegarder" 
            color="primary" 
            v-close-popup 
            type="submit"
            />
        </q-card-actions> 
    </form>
    </q-card>
</template>
<script>

export default {
    data (){
        return{
            tacheASauvegarder:{
                nom: '',
                accomplie: false,
                dateEcheance: '',
                heureEcheance: ''
            }
        }
    },
    methods:{
        soumettreFormulaire(){
            this.$refs.nom.validate()
            if (!this.$refs.nom.hasError) {
                this.soumettreTache()
            }
        },
        soumettreTache(){

        }
    }
}
</script>
<style scoped>

</style>