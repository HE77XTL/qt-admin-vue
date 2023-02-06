import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import {createPinia} from 'pinia'
import {createI18n} from 'vue-i18n'
import messagesaaa from './i18n/i18n'

import App from './App.vue'


import pageRoutes from '~pages'

console.log('pageRoutes');
console.log(pageRoutes);

const routes = [
    {path: '/', redirect: '/dashboard'}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        ...pageRoutes,

        // 404
    ]
})

// 通过选项创建 VueI18n 实例
const i18n = createI18n({
    locale: 'en', // 设置地区
    messages: messagesaaa, // 设置地区信息
})


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

