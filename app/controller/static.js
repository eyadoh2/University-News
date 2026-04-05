import { serveDir } from "@std/http/file-server";

export function staticController(ctx){
    const { request } = ctx;
    return serveDir(request);
}