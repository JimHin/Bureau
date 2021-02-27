<template>
    <q-item
      @click="modifierTache({id: id, updates: { accomplie: !tache.accomplie }})"
      :class="!tache.accomplie ? 'bg-orange-1' : 'bg-green-3'"
      clickable 
      v-ripple
      >
        <q-item-section>
          <q-checkbox :value="tache.accomplie" class="no-pointer-events"></q-checkbox>
        </q-item-section>
        <q-item-section id="title">
          <q-item-label
          :class="{ 'text-strike' : tache.accomplie }">
            {{ tache.nom }}
          </q-item-label>
        </q-item-section>

        <q-item-section 
        v-if="tache.dateEcheance"
        side>
          <div class="row">
            <div class="column justify-center">
              <q-icon 
              name="event"
              size="20px"
              class="q-mr-xs"
              />
            </div>
            
            <div class="column">
              <q-item-label 
              caption
              class="row justify-end"
              >
              {{ tache.dateCreation }}
              </q-item-label>
              <q-item-label 
              caption
              class="row justify-end"
              >
                <small>{{ tache.heureCreation }}</small>
              </q-item-label>
            </div>
            
          </div>
        </q-item-section>
        <q-item-section side>
            <q-btn
            @click.stop="showModifierTache = true" 
            flat
            round
            color="brown-7"
            icon="edit"
            />
            <q-btn
            @click.stop="promptPourSupprimer(id)" 
            flat
            round
            color="brown-7"
            icon="delete"
            />
        </q-item-section>

        <!--Appel au composant EditTodo.vue dans une balise q-dialog qui s'appuie sur le booléen showAjouterTache pour s'afficher ou non -->
        <q-dialog v-model="showModifierTache">
          <edit-todo 
          @fermer="showModifierTache = false"
          :tache="tache"
          :id="id"
          />
        </q-dialog>

      </q-item>
</template>
<script>
import { mapActions } from "vuex"
import EditTodo from './Modals/EditTodo.vue'
export default {
  name: 'Tache',
  props: ['tache', 'id'],
  data(){
        return{
          showModifierTache: false
        }
  },
  methods: {
      ...mapActions('taches', ['modifierTache', 'supprimerTache']),
      promptPourSupprimer(id){
          this.$q.dialog({
              title: 'Confirmer',
              message: 'Supprimer ?',
              ok: {
                  push: true
              },
              cancel:{
                  color: 'negative'
              },
              persistent: true,
          }).onOk(() => {
              this.supprimerTache(id)
          })
      }
  },
  components: {
    EditTodo
  }
}
</script>
<style scoped>
  #title{
    font-size: 1em;
  }
</style>