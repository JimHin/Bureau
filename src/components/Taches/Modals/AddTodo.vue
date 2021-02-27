<!-- Composant AddTodo (<add-todo/> dans le composant parent). Il est chargé d'afficher le formulaire permettant d'ajouter une tâche à la liste -->
<template>
    <q-card>
        <q-card-section class="row">
            <!-- Titre du Modal -->
            <div class="text-h6">Ajouter une Tâche</div>
            <!-- Le composant q-space permet de séparer le titre et le bouton de fermeture du modal -->
            <q-space/>
            <!-- Bouton de fermeture du modal avec une icone en forme de croix (close) -->
            <q-btn
            v-close-popup
            flat
            round
            dense
            icon="close"
            >
            </q-btn>

        </q-card-section>
        <!-- Formulaire d'ajout d'une Tâche. On ajoute prevent derrière l'appel à submit pour que la page ne se recharge pas après la soumission du formulaire -->
        <form 
        @submit.prevent="soumettreFormulaire"
        >
            <q-card-section class="q-pt-none">
                <!-- Entrée permettant la saisie du nom de la Tâche -->
                <div class="row q-mb-sm">
                    <q-input 
                    outlined 
                    v-model="tacheASauvegarder.nom"
                    :rules="[val => !!val || 'Le nom est requis']"
                    ref="nom"
                    autofocus
                    label="Nom de la tâche"
                    class="col" 
                    >
                        <template v-slot:append>
                            <q-icon
                            v-if="tacheASauvegarder.nom"
                            name="close" 
                            @click="tacheASauvegarder.nom = ''" 
                            class="cursor-pointer" 
                            />
                        </template>
                    </q-input>
                </div>
                

                <!-- Entrée permettant la saisie de la date d'échéance prévue de la Tâche -->
                <div class="row q-mb-sm">
                    <q-input
                    outlined 
                    v-model="tacheASauvegarder.dateEcheance"
                    class="col"
                    ref="date"
                    label="date d'échéance" 
                    >
                        <template v-slot:append>                            
                            <q-icon
                            v-if="tacheASauvegarder.dateEcheance"
                            name="close" 
                            @click="effacerDateEcheance" 
                            class="cursor-pointer" 
                            />
                            <q-icon name="event" class="cursor-pointer">
                            <!-- Popup permettant d'afficher un Date Picker -->
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
                <!-- Entrée permettant la saisie de l'heure d'échéance prévue de la Tâche -->
                <div 
                v-if="tacheASauvegarder.dateEcheance    "
                class="row q-mb-sm">
                    <q-input 
                    outlined 
                    v-model="tacheASauvegarder.heureEcheance"
                    ref="time"
                    label="heure d'échéance" 
                    class="col"
                    >
                        <template v-slot:append>
                            <q-icon
                            v-if="tacheASauvegarder.heureEcheance"
                            name="close" 
                            @click="effacerHeureEcheance" 
                            class="cursor-pointer" 
                            />
                            <q-icon name="access_time" class="cursor-pointer">
                                <!-- Popup permettant d'afficher un Time Picker -->
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
            <!-- La card action et son bouton permettant l'envoi du formulaire -->
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
// Import de mapActions permettant d'accéder aux actions contenu dans le store ( Ici on veut avoir accés à ajouterTache() )
import { mapActions } from "vuex";
// Export du composant. Ici je ne lui ai pas donné de nom
export default {
    data (){
        return{
            // Objet représentant le modèle de données d'une tâche
            tacheASauvegarder:{
                nom: '',
                accomplie: false,
                dateEcheance: '',
                heureEcheance: ''
            }
        }
    },
    methods:{
        // On map les actions provenant du store. Ici on a besoin de l'action ajouterTache()
        ...mapActions('taches', ['ajouterTache']),
        // Méthode permettant de valider les données du formulaire et d'appeler soumettreTache s'ils ne renvoient pas d'erreur
        soumettreFormulaire(){
            this.$refs.nom.validate()
            if (!this.$refs.nom.hasError) {
                this.soumettreTache()
            }
        },
        // Méthode qui fait appel à l'action ajouterTache
        soumettreTache(){
            // Appel à ajouterTache en lui passant la tache à sauvegarder en paramètre
            this.ajouterTache(this.tacheASauvegarder)
            // On emet un évènement que je nomme ici "fermer" permettant de signifier la fermeture du modal
            this.$emit('fermer')
        },
        effacerDateEcheance(){
            this.tacheASauvegarder.dateEcheance = ''
            this.tacheASauvegarder.heureEcheance = ''
        },
        effacerHeureEcheance(){
            this.tacheASauvegarder.heureEcheance = ''
        }
    }
}
</script>
<style scoped>

</style>