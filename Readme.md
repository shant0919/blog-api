# Blog API

A RESTful API for a blogging platform where users can create, manage, and interact with blog posts. The project focuses on implementing user authentication, CRUD operations, and relationships between users, posts, and comments.

## Features

- User registration and login
- Create, read, update, and delete blog posts
- Add and manage comments on posts
- Associate posts and comments with their respective users
- Authentication and authorization for protected routes

## To-Do

## To-Do

### Setup & Auth

- [x] Project structure, Express server, MongoDB connection
- [x] User and Blog models
- [x] Register and login routes
- [x] Auth middleware (`verifyJWT`)
- [x] Logout and current-user routes
- [ ] Refresh-token route (new access token from refresh token)

### Blogs

- [ ] `createBlog` (protected, owner from `req.user`)
- [ ] `getAllBlogs` (public)
- [ ] `getBlogById` (public, handle invalid/missing id)
- [ ] `updateBlog` (protected + owner only)
- [ ] `deleteBlog` (protected + owner only)
- [ ] Blog routes mounted at `/api/v1/blogs`

### Comments

- [ ] Comment model (content, blog, owner)
- [ ] `addComment` (protected)
- [ ] `getCommentsForBlog` (public)
- [ ] `deleteComment` (protected + owner only)

### Polish

- [ ] Input validation on blog and comment fields
- [ ] Pagination on `getAllBlogs`
- [ ] API endpoints table in the README
- [ ] `.env.example` with key names (no values)
- [ ] Deploy (Render or Railway) and add the live link

## Project Status

Currently in development.
