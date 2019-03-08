// components will go here
import HomeComponent from './components/HomeComponent.js';
import SignUpComponent from './components/SignUpComponent.js';

const routes = [
    { path: '/', redirect: { name: "home"} },
    { path: '/home', name: "home", component: HomeComponent },
    { path: '/signup', name: "signup", component: SignUpComponent },
];

const router = new VueRouter({
    routes
});

const vm = new Vue ({
    //el: '#app',

    data: {

    },

    created: function() {
        console.log("parent is live");
    },

    methods: {

    },

    router: router

}).$mount("#app");