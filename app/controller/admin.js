import render from "../render.js";
import { adminView } from "../views/admin.js";

export function adminController(ctx){
    return render(adminView, {}, ctx, 200);
}