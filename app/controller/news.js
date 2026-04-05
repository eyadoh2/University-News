import render from "../render.js";
import { getNewsId, getNewsSimilar, getFootballNews, getMunNews, getFootballSimilar, getMunSimilar, getRoboticsSimilar, getArtSimilar, getAuditionSimilar, getBasketballSimilar, getRoboticsNews, getArtNews, getAuditionNews, getBasketballNews } from "../models/news.js";
import { newsView } from "../views/news.js";

export function newsController(ctx){
    const { request } = ctx;
    const url = new URL(request.url);
    const id = url.pathname.replace("/news/news-", "").replace("-event", "");

    const content = getNewsId(id);
    const similarThings = getNewsSimilar(id);

    return render(newsView, { content, similarThings }, ctx);
}

export function footballController(ctx){
    const content = getFootballNews();
    const similarThings = getFootballSimilar();
   
    return render(newsView, { content, similarThings }, ctx);
}

export function munController(ctx){
    const content = getMunNews();
    const similarThings = getMunSimilar();

    return render(newsView, { content, similarThings }, ctx);
}

export function roboticsController(ctx){
    const content = getRoboticsNews();
    const similarThings = getRoboticsSimilar();
   
    return render(newsView, { content, similarThings }, ctx);
}

export function campusArtController(ctx){
    const content = getArtNews();
    const similarThings = getArtSimilar();

    return render(newsView, { content, similarThings }, ctx);
}

export function auditionController(ctx){
    const content = getAuditionNews();
    const similarThings = getAuditionSimilar();
   
    return render(newsView, { content, similarThings }, ctx);
}

export function basketballController(ctx){
    const content = getBasketballNews();
    const similarThings = getBasketballSimilar();

    return render(newsView, { content, similarThings }, ctx);
}


