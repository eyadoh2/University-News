import { getAcademicNews, getAllNews, getAllEvntNews, getArtNews, getSportsNews, getTechnologyNews, addComments, getComments } from "../models/home.js";
import redirect from "../redirect.js";
import render from "../render.js";
import { homesView } from "../views/home.js";

export function homeController(ctx){
    const { request } = ctx;
    const url = new URL(request.url);

    const searchNewsItem = url.searchParams.get("search")?.toLocaleLowerCase() || "";

    let news = getAllNews();

    if(searchNewsItem){
        news = news.filter(news => {
            const title = news.title.toLocaleLowerCase().includes(searchNewsItem);
            const content = news.content.toLocaleLowerCase().includes(searchNewsItem);
            return title || content;
        });
    }

    const events = getAllEvntNews();
    const comments = getComments();
    return render(homesView, { news, events, comments }, ctx);
}

export function sportsController(ctx){
    const news = getSportsNews();
    const events = getAllEvntNews();
    const comments = getComments();
    return render(homesView, { news, events, comments }, ctx);
}

export function artController(ctx){
    const news = getArtNews();
    const events = getAllEvntNews();
    const comments = getComments();
    return render(homesView, { news, events, comments }, ctx);
}

export function technologyController(ctx){
    const news = getTechnologyNews();
    const events = getAllEvntNews();
    const comments = getComments();
    return render(homesView, { news, events, comments }, ctx);
}

export function academicController(ctx){
    const news = getAcademicNews();
    const events = getAllEvntNews();
    const comments = getComments();
    return render(homesView, { news, events, comments }, ctx);
}

export function addCommentsController(ctx, next){
    const { headers, isValid, validated } = ctx;
    
    if(!isValid) return next(ctx);

    const name = validated['name'];
    const comment = validated['comment'];
    
    addComments(name, comment);

    console.log("comment is added")
    return redirect(headers, '/news/news-home', 'comment is added successfully')
}