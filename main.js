import Vue from 'nativescript-vue'
import App from './components/App.vue'

new Vue({
    render: h => h('app'),

    components: {
        App
    }
}).$start();
