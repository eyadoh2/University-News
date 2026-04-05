import { getUpdateShortNews, getNews, UpdateFirstNews, UpdateSecondNews } from "../models/update.js";
import render from "../render.js";
import { updateView } from "../views/update.js";
import { updateSecondView } from "../views/update2.js";
import redirect from "../redirect.js";

export function updateController(ctx){
    const update = getUpdateShortNews();

    return render(updateView, { update }, ctx);
}

export async function UpdatedController(ctx){
    const { request, headers } = ctx;
    const formData = await request.formData();
    const id = formData.getAll('update_news');

    if(id.length == 0) {
        return redirect(headers, '/news/news-admin-update-choose-news-event', 'Please choose one news event to update it');
    }
    if(id.length > 1){
        return redirect(headers, '/news/news-admin-update-choose-news-event', 'dont choose more than one news event');
    }
    
    headers.set('location', `/news/news-admin-update-choosen-news-event?id=${id}`);
    return new Response(null, { headers, status: 303}, ctx);    
}

export function updatesController(ctx){
    const { request, errors } = ctx;
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    const { first, second } = getNews(id);
    return render(updateSecondView, { first, second, errors }, ctx);
}

export function UpdateNewsController(ctx, next){
    const { headers, isValid, validated } = ctx;
    
    if(!isValid) return next(ctx);
    
    

    UpdateFirstNews(
        validated['first_idName'],
        validated['first_title'],
        validated['first_date'],
        validated['first_paragraph']
    );

    UpdateSecondNews(
        validated['first_idName'],
        validated['second_title'],
        validated['first_date'],        
        validated['second_header'],
        validated['second_paragraph'],
        validated['second_header_2'],
        validated['second_paragraph_2'],
        validated['second_header_3'],
        validated['second_paragraph_3'],
        validated['second_header_4'],
        validated['second_paragraph_4'],
        validated['second_paragraph_5']
    );

    return redirect(headers, '/news/news-home', `updated Successfully`);
}