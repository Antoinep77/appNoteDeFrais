# AppNoteDeFrais

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Installation

After downloading the project you have to install the dependencies using the `npm install` command in npm in both folder : appnotedefrais (for the frontend) and appnotedefrais\src-backend (for the backend)

## Run

Use the command `ng serve` in appnotedefrais to run the frontend and then navigate to `http://localhost:4200/`. Then use the command `npm start` in  appnotedefrais\src-backend to run the node backend.
You also need to run mongoDB.

## How to test the app ?

First you have to create users and 'gestionnaires' to be able to connect to their profiles. To do so you have to connect as 'administrateur' (you don't need any name) and then you can easily create users and gestionnaires (don't forget to give a gestionnaire to an user if u want to test the following  features).
Then you can test the following features connecting to an user or gestionnaire profile, using a existing name at the login page.

## Implemented features

- Users can create notes (with files if needed), can see them and can delete notes still waiting. One user cans also chat with his 'gestionnaire'
- Gestionnaires can see the notes of their users, accepte or refuse them, can search a note on the name of the note or/and the name of the user or/and the date of the note. They can also chat with all of their users.


