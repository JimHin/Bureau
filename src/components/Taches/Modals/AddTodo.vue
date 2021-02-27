<!-- Composant AddTodo (<add-todo/> dans le composant parent). Il est chargé d'afficher le formulaire permettant d'ajouter une tâche à la liste -->
<template>
    <q-card>
        <modal-header>Ajouter une Tâche</modal-header>
        <!-- Formulaire d'ajout d'une Tâche. On ajoute prevent derrière l'appel à submit pour que la page ne se recharge pas après la soumission du formulaire -->
        <form 
        @submit.prevent="soumettreFormulaire"
        >
            <q-card-section class="q-pt-none">
                <modal-todo-name 
                :nom.sync="tacheASauvegarder.nom"
                ref="nomTacheModal"
                 />
                <modal-date-echeance 
                :dateEcheance.sync="tacheASauvegarder.dateEcheance" 
                @clear="effacerDateEcheance()" 
                />

                <modal-heure-echeance
                v-if="tacheASauvegarder.dateEcheance"
                :heureEcheance.sync="tacheASauvegarder.heureEcheance" 
                @effacerHeure="effacerHeureEcheance()"
                />


            </q-card-section>
            <modal-buttons/>
            <pre>
                {{ tacheASauvegarder }}
            </pre>
        </form>

    </q-card>
</template>
<script>
// Import de mapActions permettant d'accéder aux actions contenu dans le store ( Ici on veut avoir accés à ajouterTache() )
import { mapActions } from "vuex"

//import des composants partagés
import ModalHeader from './Shared/ModalHeader.vue'
import ModalHeureEcheance from './Shared/ModalHeureEcheance.vue'
import ModalTodoName from './Shared/ModalTodoName.vue'
import ModalButtons from './Shared/ModalButtons.vue'
import ModalDateEcheance from './Shared/ModalDateEcheance.vue'
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
    components: {
        ModalHeader,
        ModalTodoName,
        ModalDateEcheance,
        ModalHeureEcheance,
        ModalButtons
    },
    methods:{
        // On map les actions provenant du store. Ici on a besoin de l'action ajouterTache()
        ...mapActions('taches', ['ajouterTache']),
        // Méthode permettant de valider les données du formulaire et d'appeler soumettreTache s'ils ne renvoient pas d'erreur
        soumettreFormulaire(){
            this.$refs.nomTacheModal.$refs.nom.validate()
            if (!this.$refs.nomTacheModal.$refs.nom.hasError) {
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