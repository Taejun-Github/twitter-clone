import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Notification from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import HashTag from '../pages/HashTag.vue'
import BookMark from '../pages/BookMark.vue'
import List from '../pages/List.vue'
import More from '../pages/More.vue'

const routes = [
    {path: '/', component: Home, title: 'home', icon: 'fa-solid fa-house-user fa-fw text-2xl'},
    {path: '/hashtag', component: HashTag, title: 'hashtag', icon: 'fa-solid fa-hashtag fa-fw text-2xl'}, //HashTag
    {path: '/notifications', component: Notification, title: 'notifications', icon: 'fa-solid fa-bell fa-fw text-2xl'},
    {path: '/messages', component: Messages, title: 'messages', icon: 'fa-solid fa-message fa-fw text-2xl'},
    {path: '/bookmark', component: BookMark, title: 'bookmark', icon: 'fa-solid fa-bookmark fa-fw text-2xl'}, //Bookmark
    {path: '/list', component: List, title: 'list', icon: 'fa-solid fa-list fa-fw text-2xl'}, //List
    {path: '/profile', component: Profile, title: 'profile', icon: 'fa-solid fa-user fa-fw text-2xl'},
    {path: '/more', component: More, title: 'more', icon: 'fa-solid fa-angles-right fa-fw text-2xl'}, //More
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router