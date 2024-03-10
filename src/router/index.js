import { createRouter, createWebHistory } from "vue-router";

// -- Precisa importar as views acima

const routes = [
    {
      path: "/",
      name: "home",
      component: undefined, // apontar a view aqui!
    },
    {
      path: '/teste',
      name: 'teste',
      component: undefined, // apontar a view aqui!
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;