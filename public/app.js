// Define Components

let Home = {template: '<h1>Home</h1>'};
let About = {template: '<h1>About</h1>'};

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