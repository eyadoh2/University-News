import { db } from "../../db.js"

export function getUpdateShortNews(){
    return db.prepare(`SELECT * FROM news`).all();
}

export function getUpdateLongNews(){
    return db.prepare(`SELECT * FROM news_page`).all();
}

export function getNews(idName){
    const first = db.prepare(`SELECT * FROM news WHERE idName = ?`).all(idName);
    const second = db.prepare(`SELECT * FROM news_page WHERE news_id = ?`).all(idName);

    return { first, second };
}

export function UpdateFirstNews(idName, title, date, content) {
    db.prepare(`UPDATE news SET title = ?, date = ?, content = ? WHERE idName = ?`).run(title, date, content, idName);
}

export function UpdateSecondNews(
    news_id,
    news_title_1, 
    news_date,              
    news_title_2, 
    news_content_1, 
    news_title_3, 
    news_content_2, 
    news_title_4, 
    news_content_3, 
    news_title_5,
    news_content_4, 
    news_content_5 ) {
        db.prepare(`
            UPDATE news_page SET
                news_title_1 = ?, 
                news_date = ?, 
                news_title_2 = ?, 
                news_content_1 = ?, 
                news_title_3 = ?, 
                news_content_2 = ?, 
                news_title_4 = ?, 
                news_content_3 = ?, 
                news_title_5 = ?,
                news_content_4 = ?, 
                news_content_5 = ?
                WHERE news_id = ?
            `).run(
                news_title_1, 
                news_date,             
                news_title_2, 
                news_content_1, 
                news_title_3, 
                news_content_2, 
                news_title_4, 
                news_content_3, 
                news_title_5,
                news_content_4, 
                news_content_5, 
                news_id);
}
