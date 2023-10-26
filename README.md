# Dishcovery: A Recipe App

Dishcovery: Where every bite tells a story

## Table of Contents

- [Dishcovery: A Recipe App](#dishcovery-a-recipe-app)
  - [Table of Contents](#table-of-contents)
    - [Overview](#overview)
    - [Features](#features)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Technologies](#technologies)
    - [License](#license)

### Overview

Dishcovery is a social networking and blog app that allows users to create, edit, delete, and share their favorite recipes with a community of food enthusiasts. The app's mission is to make every bite tell a story. With Dishcovery, you can explore, create, and enjoy a world of delectable recipes shared by people from all over the globe.

### Features

- User Authentication: Utilizes Google OAuth for secure and convenient user authentication.
- Recipe Creation: Users can create and customize their own recipes, complete with images, ingredients, and instructions.
- Image Upload: Powered by Edgestore, it offers seamless image uploads for your recipe images.
- Recipe Sharing: Share your recipes with the world or keep them private, as you prefer.
- Recipe Editing and Deletion: Easily edit or delete your recipes at any time.
- Community Interaction: Connect with like-minded food lovers, comment on recipes, and exchange culinary tips and tricks.
- Responsive Design: The app is built with Next.js and offers a responsive and engaging user interface.

### Installation

Follow these steps to get Dishcovery up and running on your local machine:

1. clone the repository

   ```bash
   git clone https://github.com/Rafli-Dewanto/Dishcovery.git
   ```

2. Change into the project directory:

   ```bash
   cd dishcovery
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```
4. Create a .env.local file in the project root and add your Google OAuth & EdgeStore credentials. For example:

   ```bash
   # db credentials
   MYSQL_ROOT_USER=lorem-ipsum
   MYSQL_ROOT_PASSWORD=lorem-ipsum
   MYSQL_DATABASE=lorem-ipsum
   MYSQL_USER=lorem-ipsum
   MYSQL_PASSWORD=lorem-ipsum

   # google oauth
   GOOGLE_CLIENT_ID=lorem-ipsum
   GOOGLE_CLIENT_SECRET=lorem-ipsum

   # next env
   NEXTAUTH_SECRET=lorem-ipsum
   NEXTAUTH_URL=lorem-ipsum

   # edge store file upload
   EDGE_STORE_ACCESS_KEY=lorem-ipsum
   EDGE_STORE_SECRET_KEY=lorem-ipsum
   ```

5. Initialize the database:

   ```bash
   npx prisma migrate dev
   ```

6. Run the development server:

   ```bash
   npm run dev
   ```

7. Open your web browser and access the app at http://localhost:3000.

### Usage

- Sign In: Use your Google account to sign in to the app.
- Create Recipe: Click on "Create Recipe" to start sharing your culinary masterpiece.
- Edit or Delete Recipe: Access your profile and click on the recipe you want to modify or delete.
- Dishcover Recipes (no pun intended): Explore a world of recipes created by other users.
- Interact with the Community: Like, comment, and share your thoughts on the recipes you love.
- Enjoy! Share your love for food with the world and let every bite tell a story.

### Technologies

Dishcovery is built using the following technologies and dependencies:

- Next.js: The foundation of the app, providing a fast and responsive user interface.
- NextAuth.js: For secure and hassle-free user authentication.
- Edgestore: Powering image uploads.
- Prisma: Used for database management/ORM.
- Tailwind CSS: Styling the app.
- And many other libraries and packages (see package.json for a full list).

### License

This project is licensed under the MIT License.

---
