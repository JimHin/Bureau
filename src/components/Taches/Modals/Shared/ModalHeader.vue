<template>
    <q-card-section class="row">
        <!-- Titre du Modal -->
        <div class="text-h6"><slot></slot></div>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>