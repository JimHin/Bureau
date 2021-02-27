<template>
    <!-- Entrée permettant la saisie de l'heure d'échéance prévue de la Tâche -->
    <div 
    class="row q-mb-sm">
        <q-input 
        outlined 
        :value="heureEcheance"
        @input="$emit('update:heureEcheance', $event)"
        ref="time"
        label="heure d'échéance" 
        class="col"
        >
            <template v-slot:append>
                <q-icon
                v-if="heureEcheance"
                name="close" 
                @click="$emit('update:heureEcheance', '')" 
                class="cursor-pointer" 
                />
                <q-icon name="access_time" class="cursor-pointer">
                    <!-- Popup permettant d'afficher un Time Picker -->
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time 
                    :value="heureEcheance"
                    @input="$emit('update:heureEcheance', $event)"
                    >
                        <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                    </q-time>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input> 
    </div>

</template>

<script>
export default {
    props: ['heureEcheance']
}
</script>

<style scoped>

</style>