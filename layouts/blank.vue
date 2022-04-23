<template>
    <div id="blank">
        <Nuxt />
    </div>
</template>

<script>
import Vue from 'vue';
import User from '@/mixins/User';
import Settings from '@/mixins/Settings';
Vue.mixin(User);
Vue.mixin(Settings);
export default {
}
</script>

<style scoped>
#blank {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

</style>