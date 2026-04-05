import render from "../render.js";
import { notFound } from "../views/notFound.js";

export function notFoundController(ctx){
    ctx.status = 404;
    return render(notFound, {}, ctx);
}