<template>
<div>
    <q-banner 
    dense
    inline-actions
    :class="bgColor"
    class="entete-liste text-white text-center">
      <span class="text-bold text-subtitle1"><slot></slot></span>  
    </q-banner>
</div>
    
</template>

<script>
export default {
    props:['bgColor']
}
</script>

<style scoped>
    .entete-liste {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
</style>