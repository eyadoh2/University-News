import { escape } from "@std/html/entities";

export function removeView({ checkbox }){
    
    const remove_news = checkbox.map(news => `
            <article class="remove-news">
                <header class="remove-tittle">
                    <strong>${escape(news.title)}</strong>
                    <time datetime="${news.date}"> ${news.date}</time>
                </header>

                <figure class="remove-img">
                    <a target="_blank" href="/news/news-${escape(news.idName.toLowerCase())}-event">
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

            <div>
                <input type="checkbox" id="${escape(news.idName)}" name="news_delete" value="${escape(news.idName)}">
                <label for="${escape(news.idName)}">To remove this one tick the checkbox</label>
            </div>
        `).join("\n");

    return `
    <main class="remove-form">
        <h2>Remove News</h2>
        <form method="POST">
            <section class="remove-news-page">
                ${remove_news}
            </section>
            <div class="end">
                <input type="submit" value="Delete">
            </div>
        </form>
    </main>
    `
}

