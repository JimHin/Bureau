<template>
    <!-- Entrée permettant la saisie de la date d'échéance prévue de la Tâche -->
    <div class="row q-mb-sm">
        <q-input
        outlined 
        :value="dateEcheance"
        @input="$emit('update:dateEcheance', $event)"
        class="col"
        ref="date"
        label="date d'échéance" 
        >
            <template v-slot:append>                            
                <q-icon
                v-if="dateEcheance"
                name="close" 
                @click="$emit('clear')" 
                class="cursor-pointer" 
                />
                <q-icon name="event" class="cursor-pointer">
                <!-- Popup permettant d'afficher un Date Picker -->
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date 
                    :value="dateEcheance"
                    @input="$emit('update:dateEcheance', $event)"
                    >
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-date>
                </q-popup-proxy>
                </q-icon>

            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['dateEcheance']
}
</script>

<style scoped>

</style>