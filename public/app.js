// Define Components

let Home = HomeComponent();
let About = AboutComponent();

let routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
]

let router = new VueRouter({
    routes
})

let app = new Vue({
    router
}).$mount('#app');