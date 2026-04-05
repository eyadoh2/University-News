import { getRemoveNews, getDeleteNews } from "../models/remove.js";
import render from "../render.js";
import { removeView } from "../views/remove.js";
import redirect from "../redirect.js";

export function removeController(ctx){
    const checkbox = getRemoveNews();
   
    return render(removeView, { checkbox }, ctx);
}

export async function deleteController(ctx){
    const { request, headers } = ctx;
    const formData = await request.formData();
    const deleteNews = formData.getAll('news_delete');

    if (deleteNews.length == 0){
        return redirect(headers, '/news/news-admin-remove-news-event', 'Please choose at least one news event to delete'); 
    }
    for (const id of deleteNews){
        getDeleteNews(id);
    }

    return redirect(headers, '/news/news-home', `removed Successfully`);
}
