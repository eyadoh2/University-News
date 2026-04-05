import { escape } from "@std/html/entities";
import { fragments } from "./add.js";

export function homesView({ news, events, comments, 
    error = {
        name: {},
        comment: {}
    }}){
    
    const news_events = news.map(news => `
        <article class="news"> 
            <header class="tittle">
                <strong>${escape(news.title)}</strong>
                <time datetime="${news.date}"> ${news.date}</time>
            </header>

            <figure class="first_image">
                <a href="/news/news-${escape(news.idName.toLowerCase())}-event">
                    <img src="/file/${escape(news.idName)}" alt="${escape(news.title)}" width="300" height="200">
                    <figcaption>
                        ${escape(news.content)}
                        <span class="underline"> view more...</span><br>
                    </figcaption>
                </a>
            </figure>

            <a href="/news/news-${news.catagory}"><span class="underline">#${news.catagory}</span></a>
            <hr>
        </article>
        `).join("\n"); 

        const Comment_news = comments.map(comments => `
            <div>
                <p>Name: ${escape(comments.name)}</p>
                <p>${escape(comments.comment)}</p>
                <hr>
            </div>
            `).join("\n");

        const { name, comment } = fragments(error);

    return `
    <main class="big">
        <div class="small">

        <section class="news_page">
            <h2>Event News</h2>
            ${news_events}
        </section>
            
        
        </div>

        <aside class="comments_calender">
            <section class="calendar">
                <h2>Calendar</h2>
                <div id="date"></div>
            </section>

            <section>
                <h2>Comments</h2>
                <form method="POST" autocomplete="off">
                    <div class="creating-comment">
                        <div class="name-input">
                            <label for="name">Name:</label><br>
                            <input type="text" name="name" id="name" placeholder="your name..." required minLength="3">
                            ${name.message}
                        </div>

                        <div class="comment-input">
                            <label for="comment">Write your comment:</label><br>
                            <textarea id="comment" name="comment" rows="5" placeholder="type your comment..." required minLength="4"></textarea>
                            ${comment.message}
                        </div>

                        <div class="commentButton">
                            <input type="submit" value="Submit">
                            <input type="reset" value="reset">
                        </div>
                    </div>
                </form>

                <div id="commentBox">
                    ${Comment_news}
                </div>
            </section>
        </aside>
    </main>
    `
}

