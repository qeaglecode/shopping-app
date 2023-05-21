import HomePage from "../pages/Home";
import HeaderOnly from "../components/layout/HeaderOnly";
import Introduce from "../pages/Introduce";
import Procedure from "../pages/Procedure";
import Project from "../pages/Project";
import Furniture from "../pages/Products/Furniture";
import Exterior from "../pages/Products/Exterior";
import Decorate from "../pages/Products/Decorate";
import Contact from "../pages/Contact";
import Products from "../pages/Products/Products";

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/introduce', component: Introduce },
  { path: '/procedure', component: Procedure },
  { path: '/project', component: Project },
  { path: '/products', component: Products },
  { path: '/product/Furniture', component: Furniture },
  { path: '/product/Exterior', component: Exterior },
  { path: '/product/Decorate', component: Decorate },
  { path: '/contact', component: Contact },
  { path: '/no-layout', component: Decorate, layout: null },
  { path: '/no-header', component: Project, layout: HeaderOnly }
];

const privateRoutes = [] as any;

export { publicRoutes, privateRoutes }; 