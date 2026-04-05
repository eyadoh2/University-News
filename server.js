import { exampleController, createNewsController } from "./app/controller/add.js";
import { adminController } from "./app/controller/admin.js";
import { academicController, addCommentsController, artController, homeController, sportsController, technologyController } from "./app/controller/home.js";
import { newsController, footballController, roboticsController, munController, campusArtController, basketballController, auditionController } from "./app/controller/news.js";
import { notFoundController } from "./app/controller/notFoundController.js";
import { deleteController, removeController } from "./app/controller/remove.js";
import { updateController, UpdatedController,updatesController, UpdateNewsController } from "./app/controller/update.js";
import ApplicationRouter from "./router.js";
import { newsHome } from "./app/middleware/newsHome.js";
import { withHeaders } from "./app/middleware/header.js";
import { addingNewsSchema } from "./app/schema/add.js"
import { validate } from "./app/middleware/validate.js"
import { updatingNewsSchema } from "./app/schema/update.js";
import { addingCommentSchema } from "./app/schema/comment.js"
import { staticController } from "./app/controller/static.js";
import { imageController } from "./app/controller/add.js";
    
const app = new ApplicationRouter();

app.use(newsHome);
app.use(withHeaders);

app.get("/file/*", imageController);

app.get("/assets/*", staticController);

app.get("/", homeController);
app.post("/", homeController, validate(addingCommentSchema), addCommentsController);

app.get("/news/news-sports", sportsController);
app.get("/news/news-art", artController);
app.get("/news/news-technology", technologyController);
app.get("/news/news-academic", academicController);
app.get("/news/news-admin", adminController);

app.get("/news/news-admin-add-news-event", exampleController);
app.post("/news/news-admin-add-news-event", exampleController, validate(addingNewsSchema), createNewsController);

app.get("/news/news-admin-remove-news-event", removeController);
app.post("/news/news-admin-remove-news-event", deleteController);

app.get("/news/news-admin-update-choose-news-event", updateController);
app.post("/news/news-admin-update-choose-news-event", UpdatedController);

app.get("/news/news-admin-update-choosen-news-event", updatesController);
app.post("/news/news-admin-update-choosen-news-event", updatesController, validate(updatingNewsSchema), UpdateNewsController);

app.get("/news/news-football-event", footballController);
app.get("/news/news-mun-event", munController);
app.get("/news/news-robotics-event", roboticsController);
app.get("/news/news-art-event", campusArtController);
app.get("/news/news-audition-event", auditionController);
app.get("/news/news-basketball-event", basketballController);

app.get("/news/news-*-event", newsController);

app.get("*", notFoundController);
app.post("*", notFoundController);

export default function server(request){
    return app.handle({ request });
}