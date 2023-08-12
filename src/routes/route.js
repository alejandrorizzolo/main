import { Router } from "express";
const routes = Router();

const views = [
  { path: "/", view: "inicio" },
  { path: "/contacto", view: "contacto" },
  { path: "/ayuda", view: "ayuda" },
];

const title = "main";

views.forEach(({ path, view }) => {
  routes.get(path, (req, res) => res.render(view, { title }));
});

export default routes;