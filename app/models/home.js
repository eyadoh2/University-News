import { db } from "../../db.js"

export function getAllNews(){
    return db.prepare(`SELECT * FROM news`).all();
}

export function getAllEvntNews(){
    return db.prepare(`SELECT * FROM events_news_page`).all();
}

export function getSportsNews(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'sports' `).all();
}

export function getArtNews(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'art' `).all();
}

export function getTechnologyNews(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'technology' `).all();
}

export function getAcademicNews(){
    return db.prepare(`SELECT * FROM news WHERE catagory = 'academic' `).all();
}

export function getComments(){
    return db.prepare(`SELECT * FROM comments`).all();
}

export function addComments(name, comment) {
    db.prepare(`INSERT INTO comments (name, comment) VALUES ( :name, :comment )`).run({ name, comment });
}
