import { escape } from "@std/html/entities";

export function newsView({ content, similarThings }){
    
    const contentOfNews = content.map(news_page => `
        <article class="news-items">
            <h2>${escape(news_page.news_title_1)}</h2>

            <figure class="news_img">
                <a target="_self" href="/file/${escape(news_page.news_id)}">
                    <img src="/file/${escape(news_page.news_id)}" alt="${escape(news_page.news_title_2)}" width="400" height="450">
                </a>
            </figure> 

            <div class="time">
                <time datetime="${news_page.news_date}"> ${news_page.news_date} </time>  
                <span class="underline">#${news_page.news_catagory}</span>
            </div>

            <h3>${escape(news_page.news_title_2)}</h3>
            <p>${escape(news_page.news_content_1)}</p>
            <br>
            
            <div class="both">
                <div>
                    <h3>${escape(news_page.news_title_3)}</h3>
                    <p>${escape(news_page.news_content_2)}</p>
                </div>
                <div>
                    <h3>${escape(news_page.news_title_4)}</h3>
                    <p>${escape(news_page.news_content_3)}</p>
                </div>
            </div>
            <br>

            <h3>${escape(news_page.news_title_5)}</h3>
            <p>${escape(news_page.news_content_4)}</p>
            
            <p>${escape(news_page.news_content_5)} <a href="/events/events-homepage" class="underline">here</a></p>
        </article>
        `).join("\n");
        
        const similarArticles = similarThings.map(news_similar => ` 
            <a href="/news/news-${news_similar.news_similar_target}-event">
                ${news_similar.news_similar_content}<span class="underline"> view more...</span>
            </a>
            <hr>
            `).join("\n");

    return `
    <main class="news_article">
        <div class="news-styling">
            <section class="news_information">
                ${contentOfNews}
            </section>
            
            <aside class="similar">
                <h2>Similar things:</h2>
                ${similarArticles}
            </aside>
        </div>
    </main>
    `
}

