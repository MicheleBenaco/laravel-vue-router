import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import ProjectPage from './pages/ProjectPage.vue';
import NotFound from './pages/NotFound.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: HomePage
},
{
path: '/projects',
name: 'projects',
component: ProjectList
    },
{
path: '/aboutus',
name: 'AboutUs',
component: AboutUs
    },
{
path: '/contactus',
name: 'ContactUs',
component: ContactUs
    },
{
path: '/projects/:slug',
name: 'ProjectPage',
component: ProjectPage
    },
{
path: '/*',
name: 'NotFound',
component: NotFound
},

]
});
export { router };