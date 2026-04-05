import { db } from "../../db.js"

export function getNewsId(id){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = ?`).all(id);
}
export function getFootballNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'football'`).all();
}
export function getMunNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'mun'`).all();
}
export function getRoboticsNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'robotics'`).all();
}
export function getArtNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'art'`).all();
}
export function getAuditionNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'audition'`).all();
}
export function getBasketballNews(){
    return db.prepare(`SELECT * FROM news_page WHERE news_id = 'basketball'`).all();
}

export function getNewsSimilar(id){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = ?`).all(id);
}
export function getFootballSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '1' OR news_similar_id = '2'`).all();
}
export function getMunSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '5' OR news_similar_id = '6'`).all();
}
export function getRoboticsSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '1' OR news_similar_id = '3'`).all();
}
export function getArtSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '5' OR news_similar_id = '4'`).all();
}
export function getAuditionSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '4' OR news_similar_id = '6'`).all();
}
export function getBasketballSimilar(){
    return db.prepare(`SELECT * FROM news_similar WHERE news_similar_id = '3' OR news_similar_id = '2'`).all();
}

