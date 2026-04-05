import { db } from "../../db.js"

db.exec(`
    DROP TABLE IF EXISTS news;
    DROP TABLE IF EXISTS comments;
    DROP TABLE IF EXISTS news_page;
    DROP TABLE IF EXISTS news_similar;
    DROP TABLE IF EXISTS short_example_news;
    DROP TABLE IF EXISTS long_example_news;
    DROP TABLE IF EXISTS similar_example_news;

    CREATE TABLE news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idName TEXT NOT NULL,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        image BLOB,
        image_type TEXT NOT NULL,
        catagory TEXT NOT NULL,
        content TEXT NOT NULL
    );
    
    INSERT INTO news (idName, title, date, image, image_type, catagory, content) VALUES
        ('football', 'Football Champions','2026-02-22','/assets/img/football.jpg', 'small', 'sports',
        'The university football team achieved a remarkable victory this season by winning the championship after 
        months of dedication and teamwork. Their strong defense and smart strategy secured success in the final 
        match, bringing pride to the entire campus. Students and faculty celebrated the achievement, marking it 
        as one of the most memorable sports moments of the year. The victory reflects the team’s discipline, unity, 
        and commitment to excellence.'),

        ('mun', 'Model United Nations','2026-01-08','/assets/img/united.jpg', 'small', 'academic',
        'The university recently hosted its annual Model United Nations Conference, where students participated 
        in diplomatic debates and global discussions. Delegates represented different countries and addressed 
        international issues in a professional setting. The event encouraged public speaking, negotiation skills, 
        and critical thinking while creating an engaging academic atmosphere. The conference concluded with awards 
        for outstanding delegates, highlighting the university’s commitment to leadership and global 
        awareness.'),

        ('robotics', 'Robotics Champions','2025-01-03','/assets/img/robotics2.jpg', 'small', 'technology',
        'The university robotics team secured first place in a major robotics competition after designing and 
        building an innovative robot capable of completing complex challenges with speed and precision. The team 
        demonstrated strong technical skills, creativity, and collaboration throughout the project. Their achievement 
        showcases the university’s excellence in science, technology, and innovation, proving that campus talent extends 
        beyond sports into advanced engineering and problem-solving.'),

        ('art', 'Campus Art festival','2024-06-12','/assets/img/art.avif', 'small', 'art',
        'The Annual Campus Art Festival transformed the university into a vibrant creative space filled with 
        exhibitions, workshops, and live artistic performances. Students showcased their talents through paintings, 
        sculptures, digital artwork, and multimedia projects. The event encouraged collaboration between artists and 
        attracted large attendance from students and faculty. The festival highlighted the importance of creativity and 
        artistic expression within the university community.'),

        ('audition', 'Hamlet Auditions','2024-04-14','/assets/img/audi.webp', 'small', 'art',
        'The university recently presented a remarkable performance of Hamlet, featuring students from various 
        departments. Actors delivered compelling portrayals of the characters, while the production crew enhanced the 
        play with creative staging, lighting, and music. Audiences of students, faculty, and visitors were captivated, 
        applauding the cast and celebrating the university’s thriving arts scene. The event highlighted both student 
        talent and the cultural vibrancy of campus life, leaving attendees inspired and excited for future theater 
        productions.'),

        ('basketball', 'Basketball Champions', '2023-05-08','/assets/img/basketball.jpg', 'small', 'sports',
        'The university basketball team celebrated an impressive championship victory after demonstrating skill, 
        teamwork, and determination throughout the tournament. Their fast passes, accurate shooting, and resilience 
        under pressure secured success in the final game. Fans filled the stands and campus celebrations followed the 
        win. The achievement reflects the players’ dedication and highlights the university’s growing strength in 
        competitive sports.');


    CREATE TABLE comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        comment TEXT NOT NULL
    );
    INSERT INTO comments(name, comment) VALUES
        ('Eyad', 'This is my first comment');


    CREATE TABLE news_page (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        news_id TEXT NOT NULL,
        news_title_1 TEXT NOT NULL,
        news_image BLOB,
        news_image_type TEXT NOT NULL,
        news_date TEXT NOT NULL,
        news_catagory TEXT NOT NULL,
        news_title_2 TEXT NOT NULL,
        news_content_1 TEXT NOT NULL,
        news_title_3 TEXT NOT NULL,
        news_content_2 TEXT NOT NULL,
        news_title_4 TEXT NOT NULL,
        news_content_3 TEXT NOT NULL,
        news_title_5 TEXT NOT NULL,
        news_content_4 TEXT NOT NULL,
        news_content_5 TEXT NOT NULL
    );

    INSERT INTO news_page (
        news_id,
        news_title_1, 
        news_image, 
        news_image_type,
        news_date, 
        news_catagory, 
        news_title_2, 
        news_content_1, 
        news_title_3, 
        news_content_2, 
        news_title_4, 
        news_content_3, 
        news_title_5,
        news_content_4, 
        news_content_5 
    ) VALUES
        ('football',
        'University Football Team Wins ChampionShip',
        '/assets/img/football.jpg',
        'big', 
        '2026-02-22',
        'sports',
        'Champions Victory', 
        'The university football team won the championship after an outstanding season filled with determination and teamwork. In the final match, their strong defense and smart strategy secured a well deserved victory.', 
        'Key Performance', 
        'Throughout the season, the team showed consistency and discipline. Despite facing tough opponents and a few injuries, the players remained focused and united.',
        'Team Leadership',
        'The team captain played a major role in leading the squad both on and off the field. His leadership helped strengthen team spirit and improve overall performance.', 
        'Campus Celebration',
        'The  University will host a Campus Celebration event next week on 20 Feb 2026 at 12PM. Students are encourged to attend and join the celebration.', 
        'Want to be the next Champion? Check the latest events and upcoming tryouts'),
            
        ('mun',
        'Model United Nations Conference',
        '/assets/img/united.jpg',
        'big', 
        '2026-01-08',
        'academic',
        'Model United Nations',
        'The university successfully hosted its annual Model United Nations (MUN) Conference, bringing together students from different departments to engage in diplomatic debate and global discussions.',
        'Academic Engagement',
        'Participants represented various countries and discussed international issues, developing their public speaking, negotiation, and critical thinking skills throughout the conference.',
        'Student Leadership',
        'The organizing committee ensured a well-structured and professional event. Student leaders managed sessions, guided debates, and created a realistic diplomatic atmosphere.',
        'Closing Ceremony',
        'The conference concluded with an awards ceremony recognizing outstanding delegates and best speakers. The event highlighted the university’s commitment to academic excellence and global awareness.',
        'Want to participate in the next conference? Check the latest events and registration details'),

        ('robotics',
        'Robotics Competetion Victory',
        '/assets/img/robotics.jpg',
        'big', 
        '2025-01-03',
        'technology',
        'Robotics Team Wins Major Competition',
        'The university robotics team won first place in a major robotics competition after designing and building an innovative robot that completed all challenges efficiently and accurately.',
        'Technical Excellence',
        'The robot demonstrated advanced programming, precise engineering, and creative problem-solving. The team carefully tested and improved their design before the final competition.',
        'Team Collaboration',
        'Strong teamwork and strategic planning played a key role in the victory. Each member contributed technical expertise to achieve the best possible performance.',
        'Innovation Celebration',
        'The university will host a Technology Showcase event next month to celebrate the team’s achievement and present the winning robot to students and faculty.',
        'Interested in robotics? Explore upcoming technology events and workshops'),

        ('art',
        'Univeristy Art Festival',
        '/assets/img/art.avif',
        'big', 
        '2024-06-12',
        'art',
        'Annual Campus Art Festival',
        'The university hosted its Annual Art Festival, showcasing student creativity through exhibitions, live performances, and interactive workshops.',
        'Creative Exhibitions',
        'Students presented paintings, sculptures, digital artwork, and multimedia projects, transforming the campus into a vibrant artistic space.',
        'Collaborate Workshops',
        'Art professors and guest artists conducted workshops encouraging students to experiment with new techniques and collaborate on creative projects.',
        'Community Celebration',
        'The event attracted students, faculty, and visitors who gathered to celebrate artistic expression and innovation across campus.',
        'Passionate about art? Discover upcoming creative events and exhibitions'),

        ('audition',
        'Hamlet Auditions Event',
        '/assets/img/audi.webp',
        'big', 
        '2024-04-14',
        'art',
        'University Theater Presents “Hamlet”',
        'The university theater department successfully staged a performance of Hamlet, showcasing the talents of students from across different majors. The production impressed audiences with its creative staging, compelling acting, and engaging storytelling.',
        'Student Performances',
        'Actors demonstrated strong stage presence, emotional depth, and coordination, making the classic play come alive. Supporting crew members contributed with lighting, set design, and music, enhancing the overall experience.',
        'Audience Reception',
        'The performance attracted students, faculty, and visitors who applauded the cast and celebrated the university’s vibrant cultural scene.',
        'Event Celebration',
        'After the final show, the theater department hosted a small reception to honor the performers and thank the audience for their support.',
        'Interested in more cultural events? Check the latest campus performances'),

        ('basketball',
        'Basketball Champions',
        '/assets/img/basketball2.webp',
        'big', 
        '2023-05-08',
        'sports',
        'Basketball Team Wins Championship',
        'The university basketball team won the tournament with skill, energy, and determination. In the final match, the players remained focused and secured a well-earned victory.',
        'Outstanding Teamwork',
        'Throughout the competition, the team demonstrated fast passes, strong defense, and accurate shooting. Their coordination and discipline were key to their success.',
        'Competitive Spirit',
        'Even when the score was close, the players stayed confident and never gave up, showing resilience under pressure.',
        'Campus Celebration',
        'Students gathered on campus to celebrate the victory, cheering for the team and recognizing their hard work and dedication.',
        'Want to join the team? Check the latest sports events and upcoming tryouts');

    CREATE TABLE news_similar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        news_similar_id TEXT NOT NULL,
        news_similar_target TEXT NOTT NULL,
        news_similar_content TEXT NOT NULL
    );
    INSERT INTO news_similar (news_similar_id, news_similar_target, news_similar_content) VALUES
        ('1', 'basketball', 'The basketball team won the basketball tournament with skill and energy.'),
        ('2', 'robotics', 'The university robotics team won a major robotics competition by designing and building an impressive robot.'),
        ('3', 'football', 'The university football team won the football tournament after a season full of hard work and practice.'),
        ('4', 'mun', 'The university successfully hosted its annual Model United Nations (MUN)'),
        ('5', 'audition', 'The university theater department successfully staged a performance of Hamlet, showcasing the talents'),
        ('6', 'art', 'The university hosted its Annual Art Festival, showcasing student creativity through exhibitions');


    CREATE TABLE short_example_news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        short_example_news_id TEXT NOT NULL,
        short_example_news_title TEXT NOT NULL,
        short_example_news_date TEXT NOT NULL,
        short_example_news_image BLOB,
        short_example_news_image_type TEXT NOT NULL,
        short_example_news_catagory TEXT NOT NULL,
        short_example_news_content TEXT NOT NULL
    );
    INSERT INTO short_example_news (
        short_example_news_id,
        short_example_news_title,
        short_example_news_date,
        short_example_news_image,
        short_example_news_image_type,
        short_example_news_catagory,
        short_example_news_content
    ) VALUES
        ('example', 'Title','Date:x-x-xxxx','/assets/img/Example_image.png', 'example_short', 'catagory',
        'Write a short preview of the main article here so readers can quickly understand what the event is about. 
        This summary should give them a clear idea of the highlights and encourage them to continue reading the full article');


    CREATE TABLE long_example_news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        long_example_news_id TEXT NOT NULL,
        long_example_news_title_1 TEXT NOT NULL,
        long_example_news_image BLOB,
        long_example_news_image_type TEXT NOT NULL,
        long_example_news_date TEXT NOT NULL,
        long_example_news_catagory TEXT NOT NULL,
        long_example_news_title_2 TEXT NOT NULL,
        long_example_news_content_1 TEXT NOT NULL,
        long_example_news_title_3 TEXT NOT NULL,
        long_example_news_content_2 TEXT NOT NULL,
        long_example_news_title_4 TEXT NOT NULL,
        long_example_news_content_3 TEXT NOT NULL,
        long_example_news_title_5 TEXT NOT NULL,
        long_example_news_content_4 TEXT NOT NULL,
        long_example_news_content_5 TEXT NOT NULL
    );
    INSERT INTO long_example_news (
        long_example_news_id,
        long_example_news_title_1, 
        long_example_news_image, 
        long_example_news_image_type,
        long_example_news_date, 
        long_example_news_catagory, 
        long_example_news_title_2, 
        long_example_news_content_1, 
        long_example_news_title_3, 
        long_example_news_content_2, 
        long_example_news_title_4, 
        long_example_news_content_3, 
        long_example_news_title_5,
        long_example_news_content_4, 
        long_example_news_content_5 
    ) VALUES
        ('example',
        'Title',
        '/assets/img/Example_image.png',
        'example_long', 
        'Date',
        'catagory',
        'Header', 
        'Write a short preview of the main article here so readers can quickly understand what the event is about. This summary should give them a clear idea of the highlights and encourge them to continue reading the full article.', 
        'Header 2', 
        'Write the first section of the article here. This paragraph should describe an important part of the event, such as key highlights, major moments, or important updates. Keep it clear and informative so readers understand the main idea.',
        'Header 3',
        'Write the second section of the article here. You can include additional details such as team performance, special guests, statistics, achievements, or any relevant information related to the event.', 
        'Header 4',
        'Write another section here if needed. This can include future plans, upcoming activities, results, announcements, or any extra details about the event.', 
        'Add a closing paragraph here. You may include a call-to-action such as encouraging readers to check upcoming events, visit the main page, or read more details about this event.');


    CREATE TABLE similar_example_news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        similar_example_news_id TEXT NOT NULL,
        similar_example_news_target TEXT NOT NULL,
        similar_example_news_content TEXT NOT NULL
    );
    INSERT INTO similar_example_news (similar_example_news_id, similar_example_news_target, similar_example_news_content) VALUES
        ('1', 'example_1', 'This is only an example sentence. It can represent any event news and is similar to your topic'),
        ('2', 'example_2', 'This is only an example sentence. It can represent any event news and is similar to your topic');

   

    `)

