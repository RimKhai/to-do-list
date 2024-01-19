import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Main from "./Main.vue"
import './style.css'
import App from './App.vue'

const routes = [
    {   
        path: "/",
        component: Main,
    },


]

const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).use(pinia).mount('#app')    
