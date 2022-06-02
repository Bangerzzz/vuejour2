import { createWebHistory, createRouter } from "vue-router";
import Compteur from "./components/Compteur.vue";
import DemoJwt from "./components/DemoJwt.vue";
import DemoVfor from "./components/DemoVfor.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name:"acceuil",
            component: Compteur
        },
        {
            path: "/DemoVfor",
            name: "DemoVfor",
            component: DemoVfor
        },
        {
            path: "/DemoJwt",
            name: "DemoJwt",
            component: DemoJwt
        }
    ]
})

export default router;