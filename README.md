# BlogApp-CosmicVisionScapes

**Description**

**BlogApp-CosmicVisionScapes** is a full-stack blogging application built using ReactJS, ExpressJS, MySQL, and other technologies. The application allows users to create, manage, and view blog posts, with features for user registration, login, and profile management.

This project is a guided implementation based on a YouTube video by Lama Dev. For detailed instructions and explanations, refer to the [video tutorial](https://youtu.be/0aPLk2e2Z3g?feature=shared).

**Features**

- User registration and login
- Post creation, editing, and deletion
- Image uploads for posts and user profiles
- Filtering posts by category
- User profile management

**Technologies Used**

**Frontend:**
- ReactJS
- Axios (for HTTP requests)
- React Router (for navigation)
- SCSS (for styling)

**Backend:**
- ExpressJS
- MySQL (for database)
- Multer (for handling file uploads)
- JWT (for authentication)
- BcryptJS (for password hashing)

## Setup Instructions

### Backend Setup

**1. Clone the repository:**

   ```bash
   git clone https://github.com/Pratheep-Srikones/BlogApp-CosmicVisionScapes.git
   ```
**2. Navigate to the Backend Directory:**

   ```bash
   cd BlogApp-CosmicVisionScapes/api
  ```
**3. Install Dependencies:**
  ```bash
  npm istall
  ```
**4. Setup Environment Variables:**
Create a .env file in the api directory and add your environment variables. For example:
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=blogapp
  JWT_SECRET=your_jwt_secret
  ```
**5. Run Database Migrations:**
Run the create_tables.sql script to set up the database schema.

**Recommended Method:** Use the web application's registration functionality to create user accounts and write functionality to create posts. <br/>
Alternative Method: Use the insert_data.sql script to insert sample data if needed. (NOT RECOMMENDED - Cannot get a functional website)

**6. Start the Server**
  ``` bash
  npm start
  ```
### Frontend Setup
**1. Navigate to the Frontend Directory:**
  ``` bash
  cd BlogApp-CosmicVisionScapes/client
  ```
**2. Install Dependencies:**
  ```bash
  npm install
  ```
**3. Start the Development Server**
  ``` bash
  npm run dev
  ```
**Contact**

For any inquiries or issues, please contact: `prathhp231@gmail.com`.

**Libraries Used**

- **[ReactJS](https://reactjs.org/):** Frontend library for building user interfaces
- **[ExpressJS](https://expressjs.com/):** Backend framework for Node.js
- **[MySQL](https://www.mysql.com/):** Relational database management system
- **[Axios](https://axios-http.com/):** HTTP client for making requests
- **[Multer](https://github.com/expressjs/multer):** Middleware for handling file uploads
- **[JWT](https://jwt.io/):** JSON Web Token for authentication
- **[BcryptJS](https://github.com/dcodeIO/bcrypt.js):** Library for hashing passwords
- **[SCSS](https://sass-lang.com/):** Sassy CSS for styling




