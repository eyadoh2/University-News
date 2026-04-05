export function adminView(){
    return `
    <main class="admin_page">
        <nav class="admin" id="admin">
            <a href="/news/news-admin-add-news-event" class="add">
                <button class="addButton">ADD</button>
            </a>

            <a href="/news/news-admin-update-choose-news-event" class="update"> 
                <button class="updateButton">UPDATE</button>
            </a>

            <a href="/news/news-admin-remove-news-event" class="remove">
                <button class="removeButton">REMOVE</button>
            </a>
        </nav>
    </main>

    `
}

