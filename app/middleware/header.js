export function withHeaders(ctx, next) {
    const { request } = ctx;
    const url = new URL(request.url);

    if(!url.pathname.startsWith("/file/")){
        console.log("Creating Headers");
    }
    
    ctx.headers = new Headers();
    return next(ctx);
}