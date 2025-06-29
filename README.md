Implement an app with React

Introduction

Hello everyone, In this project you will build our pocket movie app in which we will keep track of our favorite movies and set up a watch later list. You will use the ReactJs knowledge that you accumulated in previous projects to build the interface and show data from an API.

Read or watch

Vite | docs
React Hooks
React Font Awesome
React Router
axios
ES6
JWT Authentication
Learning Objectives

Manage state and props in a react component
Use React hooks to achieve certain behavior
Implement a design with JSX and CSS (React)
Implement a frontend app with React
Requirements

Class components are not allowed
A README.md file, at the root of the folder of the project, is mandatory
Try to use ES6 features
Setting up the backend

Installing docker
This link has all the steps needed for installing docker depending on your system.
Installing docker-compose
Official documentation for installing docker-compose
Make sure that docker is running before proceeding
Cloning and running the backend server
Clone this repository on your local machine
cd into the repository folder and run the following commands:
docker-compose build --no-cache --force-rm
docker-compose up
After running the above command you should get an output similar to this indicating that the backend and db are running. 
Notes

You’ll be adding the base url before each API route mentioned in the tasks: http://localhost:8000/
The repository contains detailed information about each route in the API
The React and friends versions to use :
“react”: “^18.3.1”
“react-dom”: “^18.3.1”
“react-router-dom”: “^7.6.2”
“react-scripts”: “5.0.1”
