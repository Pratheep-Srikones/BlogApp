-- Inserting a user with all fields populated
INSERT INTO user (email, password, picture, username) 
VALUES ('john.doe@example.com', 'hashed_password_1', 'path/to/profile1.jpg', 'john_doe');

-- Inserting a user with a null picture field
INSERT INTO user (email, password, username) 
VALUES ('jane.smith@example.com', 'hashed_password_2', 'jane_smith');

-- Inserting another user with all fields populated
INSERT INTO user (email, password, picture, username) 
VALUES ('alice.jones@example.com', 'hashed_password_3', 'path/to/profile2.jpg', 'alice_jones');

-- Inserting a user with a null picture field and a different password
INSERT INTO user (email, password, username) 
VALUES ('bob.brown@example.com', 'hashed_password_4', 'bob_brown');

-- Inserting a post with all fields populated
INSERT INTO post (heading, body, image, user_id, date, category, description) 
VALUES ('The Future of Technology', 'This is an insightful article about the future of technology...', 'path/to/image1.jpg', 1, '2024-09-10 10:00:00', 'Technology', 'An overview of emerging technologies.');

-- Inserting a post with null fields
INSERT INTO post (heading, body, user_id, date, category) 
VALUES ('Travel Tips', 'Here are some tips for traveling...', 2, '2024-09-11 14:30:00', 'Travel');

-- Inserting a post with a null image and description
INSERT INTO post (heading, body, user_id, date, category, description) 
VALUES ('Health and Wellness', 'This post covers various aspects of health and wellness...', 3, '2024-09-12 08:00:00', 'Health', NULL);

-- Inserting a post with all fields populated, but without a description
INSERT INTO post (heading, body, image, user_id, date, category) 
VALUES ('Amazing Recipes', 'A collection of amazing recipes for you to try...', 'path/to/image2.jpg', 1, '2024-09-13 16:45:00', 'Food', NULL);
