# GoalTree

## Problem Space
Popular productivity apps help users manage and view their to-do lists in countless ways, but don't help users create to-do lists _for_ particular goals. In other words, task management is removed from planning. What is the point of crossing everything off a to-do list if the list isn't’t aligned with the end goal?
<br>

I created GoalTree to bridge the gap between big-picture planning and in-the-weeds task management. GoalTree helps users thoroughly divide their goals into discrete and achievable tasks by using a tree data structure to conceptualize each goal as a tree of related subgoals. Users can generate to-do lists for each goal tree, which aggregates all the leaf nodes of a goal tree. The app allows users to easily toggle between tree and list view for a particular goal, instantaniously updating a to-do list when its corresponding goal tree is revised and vice-versa. 
## Technologies
* Frontend: Javascript, React, D3.js, HTML, CSS, Chakra UI
* Backend: Python, Flask, SQL, PostgreSQL, SQLAlchemy [(visit backend repo here)](https://github.com/justinakliu/ada-capstone-backend)
* Deployed to Heroku: [Try out the app here!](https://goal-tree.herokuapp.com/)

## Features

### My Goals Page
<img width="1256" alt="Screen Shot 2023-02-13 at 10 24 45 PM" src="https://user-images.githubusercontent.com/87151448/218631354-718b86ab-61b3-42b6-b917-d0fd0b24cc6e.png">

- Users can view all goals as well as create, delete and update goals
- Color of the goal reflects the goal’s completion status
- Users navigate to the tree and list views of a goal by clicking on the corresponding button

### Tree View 
<img width="1240" alt="Screen Shot 2023-02-13 at 10 18 30 PM" src="https://user-images.githubusercontent.com/87151448/218630604-2944cd6c-e4af-4ae7-b5a1-84ed5d86a1a1.png">

- Users can build a goal tree for a goal by adding subgoals, as well as delete and update existing nodes
- Users update any node on the tree and the entire tree will automatically update (a parent node is defined as complete if all of its children are complete; a childless node is complete if it has been marked complete)
- User can toggle back and forth between tree and list view

### List View
<img width="1258" alt="Screen Shot 2023-02-13 at 10 18 40 PM" src="https://user-images.githubusercontent.com/87151448/218630835-e361a952-6f25-4c55-8d8f-95636321cdba.png">

- List view for a particular goal is a to-do list generated by aggregating all of the leaf nodes of the goal tree
- Users can update the completion status of subgoals; all changes made in list view are reflected in tree view and vice versa  

## Set Up
To run this project on your local computer, follow the instructions below.

### Backend Set Up

Start by cloning the backend repo.
```
git clone https://github.com/justinakliu/goal-tree-back-end.git
```
Create and activate a virtual environment inside your directory
```
python3 -m venv venv
source venv/bin/activate
```
Install the dependencies:
```
pip install -r requirements.txt
```
Create a database for the application and a .env file. In the .env file, create an environment variable called `SQLALCHEMY_DATABASE_URI` to hold the path to your database. Your .env file might look like:

```
SQLALCHEMY_DATABASE_URI=postgresql+psycopg2://postgres:postgres@localhost:5432/goal_tree_database
```
To finish setting up your local database, run:
```
flask db upgrade
```
And finally, to run the backend app:
```
flask run
```

### Frontend Set Up

Clone the frontend repo in a separate directory.

```
git clone https://github.com/justinakliu/goal-tree-front-end.git
```

Install the dependencies:

```
npm install
```

Run the app:

```
npm run dev #
```
<br>

You can now access GoalTree at 'localhost:3000/'!


