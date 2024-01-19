<script setup>
    const props = defineProps(['styles', 'placeholder', 'type'])
</script>

<template>
    <input
        :class="'input ' + styles"
        :placeholder="placeholder"
        :type="type" />
</template>

<style lang="scss" scoped>
    .input {
        border-radius: $border-medium;
        box-shadow: 0 0 10px $primary-color;
        height: 50px;
        width: 500px;
        padding: 0 20px;
        transition-duration: 1000ms;
        &:focus {
            outline: 0;
            box-shadow: 0 0 10px $accent-color;
        }
    }
</style>
