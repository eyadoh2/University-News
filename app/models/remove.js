import { db } from "../../db.js"

export function getRemoveNews(){
    return db.prepare(`SELECT * FROM news`).all();
}

export function getDeleteNews(idName){
    db.prepare(`DELETE FROM news WHERE idName = ?`).run(idName);
    db.prepare(`DELETE FROM news_page WHERE news_id = ?`).run(idName);
    db.prepare(`DELETE FROM news_similar WHERE news_similar_id = ?`).run(idName);
    db.prepare(`DELETE FROM news_similar WHERE news_similar_target = ?`).run(idName);
}