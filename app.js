import './src/sass/styles.scss';
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Main from './components/Main.vue';
import About from "./components/About.vue";
import ErrorPage from "./components/ErrorPage.vue";
import Lists from "./components/Lists.vue";
import ClassBinding from "./components/ClassBinding.vue";
import Computed from "./components/Computed.vue";
import Components from "./components/Components.vue";
import Tabs from "./components/tabs/Tabs.vue";

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: Main,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/lists',
            name: 'lists',
            component: Lists
        },
        {
            path: '/class-binding',
            name: 'class-binding',
            component: ClassBinding
        },
        {
            path: '/computed',
            name: 'computed',
            component: Computed
        },
        {
            path: '/components',
            name: 'components',
            component: Components
        },
        {
            path: '/tabs',
            name: 'tabs',
            component: Tabs
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})


new Vue({
    router,
    render: (createEl)=>createEl(App)
}).$mount('#app')

console.log('Hi from my javascript')
