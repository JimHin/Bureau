<template>
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      Aucune Tâche à accomplir aujourd'hui
      <template v-slot:action>
        <q-btn 
        flat 
        color="primary" 
        label="Ajouter une tâche"
        @click="$root.$emit('showAjouterTache')" 
        />
      </template>
    </q-banner>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>