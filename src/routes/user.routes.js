import {
  create,
  get,
  getById,
  update,
  remove,
} from "../controllers/user.controller";

const userRoutes = (app) => {
  app.get("/user", get);
  app.get("/user/:id", getById);
  app.post("/user", create);
  app.put("/user/:id", update);
  app.delete("/user/:id", remove);
};

export default userRoutes;
