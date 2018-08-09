// Define Components

import {HomeComponent} from './components/home.component';

//let Home = HomeComponent();
//let Home = HomeComponent;
let About = AboutComponent();

let routes = [
    {path: '/', component: HomeComponent.template},
    {path: '/about', component: About}
]

let router = new VueRouter({
    routes
})

let app = new Vue({
    router
}).$mount('#app');