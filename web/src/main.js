import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import toDo from "@/views/toDo";
import calander from "@/views/calander";
import postIt from "@/views/postIt";

createRouter ({
    history: createWebHistory(this.state.history),
    routes: [
        {
            path: '/',
            name: 'toDo',
            component: toDo
        },
        {
            path: '/calander',
            name: 'calander',
            component: calander
        },
        {
            path: '/postIt',
            name: 'postIt',
            component: postIt
        }
    ]
})

createApp({App}).use(router).mount('#app')
