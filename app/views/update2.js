import { escape } from "@std/html/entities";
import { fragments } from "./add.js";

export function updateSecondView({first, second, 
    errors = {
        first_idName: {},
        first_title: {},
        first_date: {},
        first_paragraph: {},
        second_title: {},
        second_header: {},
        second_paragraph: {},
        second_header_2: {},
        second_paragraph_2: {},
        second_header_3: {},
        second_paragraph_3: {},
        second_header_4: {},
        second_paragraph_4: {},
        second_paragraph_5: {}
    } }){

    const {
        first_idName,
        first_title,
        first_date,
        first_paragraph,
        second_title,
        second_header,
        second_paragraph,
        second_header_2,
        second_paragraph_2,
        second_header_3,
        second_paragraph_3,
        second_header_4,
        second_paragraph_4,
        second_paragraph_5
    } = fragments(errors);

    const first_news = first.map(news => `
        <article class="add-news">
            <header class="add-tittle"> 
                <strong>${escape(news.title)}</strong>
                <time datetime="${news.date}"> ${news.date}</time>
            </header>
            <figure class="add-img">
                <img src="/file/${escape(news.idName)}" alt="${escape(news.title)}" width="300" height="200">
                <figcaption>
                    ${escape(news.content)}
                    <span class="underline"> view more...</span><br>
                </figcaption>
            </figure>
            
            <hr>
        </article>
        <P>The first step you need to update the main paragraph and update the img so the reader can quickly understand what the event is about like this: </P>
        </section>
        <form method="POST" enctype="multipart/form-data" autocomplete="off">
            <fieldset class="small-info">
                <legend>short Information:</legend>
                <div class="short-info">
                
                    <div class="general-info">
                        <div class="error-message">
                            <label for="update_title">Title:</label>
                            <input type="text" id="update_title" name="first_title" value="${escape(news.title)}" required minLength="5">
                            ${first_title.message}
                        </div>

                        <div class="error-message">
                            <label for="update_date">Date:</label>
                            <input type="date" id="update_date" name="first_date" value="${escape(news.date)}" required>
                            ${first_date.message}
                        </div>

                        <div class="error-message">
                            <label for="update_idName">ID-Name:</label>
                            <input type="text" id="update_idName" name="first_idName" value="${escape(news.idName)}" readonly >
                            ${first_idName.message}
                        </div>
                    </div>

                    <div class="parag-error">
                        <div class="short-parag">
                            <label for="update_paragraph">write your paragraph here:</label>
                            <textarea id="update_paragraph" name="first_paragraph" required minLength="100">${escape(news.content)}</textarea>
                        </div>
                        <div class="error-message-parag">
                        ${first_paragraph.message}
                    </div>
                </div>
            </fieldset>
        `).join("\n");

        const second_news = second.map(news_page => `
            <article class="add-news-items">   
                <h2>${escape(news_page.news_title_1)}</h2>

                <figure class="add-news-img">
                    <img src="/file/${escape(news_page.news_id)}" alt=${escape(news_page.news_title_2)} width="400" height="450">
                </figure>

                <div class="add-time">
                    <time datetime="${news_page.news_date}"> ${news_page.news_date} </time>  
                    <span>#${news_page.news_catagory}</span>
                </div>

                <h3>${escape(news_page.news_title_2)}</h3>
                <p>${escape(news_page.news_content_1)}</p>
                <br>
                
                <div class="add-both">
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
                    
                <p>${escape(news_page.news_content_5)} <a href="/"><ins>here</ins></a></p>
            </article>
            <div class="general-long-info">
            <fieldset>
                <legend>Long Information:</legend>

                <div class="error-message-2">
                    <label for="update_title_1">Title:</label>
                    <input type="text" id="update_title_1" name="second_title" value="${escape(news_page.news_title_1)}" required minLength="5">
                    ${second_title.message}
                </div>

                <div class="error-message-2">
                    <label for="update_title_2">Header:</label>
                    <input type="text" id="update_title_2" name="second_header" value="${escape(news_page.news_title_2)}" required minLength="5">
                    ${second_header.message}
                </div>

                
                <div class="parag-error-long">
                        <div class="long-parag">
                <label for="update_paragraph_1">write your paragraph here:</label>
                <textarea id="update_paragraph_1" name="second_paragraph" required minLength="120">${escape(news_page.news_content_1)}</textarea>
                </div>
                <div class="error-message-parag-2">
                ${second_paragraph.message}
                </div>
                </div>
                <hr>

                <div class="error-message-2">
                    <label for="update_title_3">Header 2:</label>
                    <input type="text" id="update_title_3" name="second_header_2" value="${escape(news_page.news_title_3)}" required minLength="5">
                    ${second_header_2.message}
                </div>

                <div class="parag-error-long">
                        <div class="long-parag">
                <label for="update_paragraph_2">write your paragraph here:</label>
                <textarea id="update_paragraph_2" name="second_paragraph_2" required minLength="100">${escape(news_page.news_content_2)}</textarea>
                </div>
                <div class="error-message-parag-2">
                ${second_paragraph_2.message}
                </div>
                </div>
                <hr>

                <div class="error-message-2">
                    <label for="update_title_4">Header 3:</label>
                    <input type="text" id="update_title_4" name="second_header_3" value="${escape(news_page.news_title_4)}" required minLength="5">
                    ${second_header_3.message}
                </div>


                <div class="parag-error-long">
                        <div class="long-parag">
                <label for="update_paragraph_3">write your paragraph here:</label>
                <textarea id="update_paragraph_3" name="second_paragraph_3" required minLength="100"red>${escape(news_page.news_content_3)}</textarea>
                </div>
                <div class="error-message-parag-2">
                ${second_paragraph_3.message}
                </div>
                </div>
                <hr>

                <div class="error-message-2">
                    <label for="update_title_5">Header 4:</label>
                    <input type="text" id="update_title_5" name="second_header_4" value="${escape(news_page.news_title_5)}" required minLength="5">
                    ${second_header_4.message}
                </div>

                <div class="parag-error-long">
                        <div class="long-parag">
                <label for="update_paragraph_4">write your paragraph here:</label>
                <textarea id="update_paragraph_4" name="second_paragraph_4" required minLength="70">${escape(news_page.news_content_4)}</textarea>
               </div>
               <div class="error-message-parag-2">
                ${second_paragraph_4.message}
                </div>
                </div>
                
                <div class="parag-error-long">
                    <div class="long-parag">
                        <label for="update_paragraph_5">write your paragraph here:</label>
                        <textarea id="update_paragraph_5" name="second_paragraph_5" required minLength="50">${escape(news_page.news_content_5)}</textarea>
                    </div>
                    <div class="error-message-parag-2">
                        ${second_paragraph_5.message}
                    </div>
                </div>
            </fieldset>
        </div>
                
        `).join("\n");
    
    return `
    <main class="add-form">
        <h2>Update News</h2>
        <section class="add-news-page">
            ${first_news}
        
        <div class="long">
            <section class="add-long-page">
               ${second_news}
            </section>

            <div class="end">
                <input type="submit" value="submit">
                <input type="reset" value="reset">
            </div>
        </form>
    </main>
    `
}

