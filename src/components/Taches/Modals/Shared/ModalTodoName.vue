<template>
<!-- Entrée permettant la saisie du nom de la Tâche -->
<div class="row q-mb-sm">
    <q-input 
    outlined 
    :value="nom"
    @input="$emit('update:nom', $event)"
    :rules="[val => !!val || 'Le nom est requis']"
    ref="nom"
    autofocus
    label="Nom de la tâche"
    class="col" 
    >
        <template v-slot:append>
            <q-icon
            v-if="nom"
            name="close" 
            @click="$emit('update:nom', '')" 
            class="cursor-pointer" 
            />
        </template>
    </q-input>
</div>
</template>

<script>
export default {
    props: ['nom']
    
}
</script>

<style scoped>

</style>