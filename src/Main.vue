<script setup>
    import { ref } from 'vue'
    import Input from './ui-kit/Input.vue'
    import { useMyStore } from './stores/myStore'

    const myStore = useMyStore()

    const data = ref('')
    const changeHandler = (event) => {
        data.value = event.target.value
    }
</script>

<template>
    <main class="flex flex-col justify-center items-center mt-32 space-y-8">
        <div class="flex space-x-4">
            <Input
                placeholder="Введите говно"
                type="password"
                v-on:keydown.enter="myStore.addDo(data)"
                @input="changeHandler" />
            <button
                @click="myStore.addDo(data)"
                class="btn">
                Жми Давай!
            </button>
        </div>
        <div
            v-for="item in myStore.list"
            class="element text-center"
            :key="item.id">
            {{ item.title }}
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .btn {
        height: 50px;
        padding: 0 20px;
        background-color: $secondary-color;
        border-radius: $border-medium;
        transition-duration: 1000ms;
        &:hover {
            background-color: $accent-color;
            box-shadow: 0 0 7px $secondary-color;
        }
    }
    .element {
        padding: 5px 15px;
        background-color: $secondary-color;
        border-radius: $border-small;
        width: 400px;
        &:hover {
            background-color: $accent-color;
            box-shadow: 0 0 7px $secondary-color;
        }
    }
</style>
