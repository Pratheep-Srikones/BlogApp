CREATE TABLE post (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    heading VARCHAR(100) NOT NULL,
    body TEXT,
    image VARCHAR(255),
    user_id INT,
    date DATETIME,
    category VARCHAR(100),
    description VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id) -- Assuming you have a 'user' table with 'user_id'
);

CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    username VARCHAR(50) NOT NULL
);

