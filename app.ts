// importing the oak from the url.
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// importing the controllers
import { addFriend } from "./Controllers/addFriend.ts";
import { getFriend } from "./Controllers/getFriend.ts";
import { updateFriend } from "./Controllers/updateFriend.ts";
import { deleteFriend } from "./Controllers/deleteFriend.ts";

const router = new Router();
const app = new Application();
const PORT = 3006;

// ROUTES
router
  .post("/addFriend", addFriend)
  .get("/getFriend/:id", getFriend)
  .patch("/updateFriend/:id", updateFriend)
  .delete("/deleteFriend/:id", deleteFriend);

// Starting the server
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: PORT });

