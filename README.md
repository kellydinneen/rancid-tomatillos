# Rancid Tomatillos
#### Turing School of Software Design - Mod3 Partner Project

### Contributors
- Kelly Dinneen : [github profile](https://github.com/kellydinneen)
- Lucas Merchant : [github profile](https://github.com/lbmerchant93)

### Instructors: 
- Leta Keana : [github profile](https://github.com/letakeane)
- Scott Ertmer : [github profile](https://github.com/sertmer)

### Technologies

**Build**: React Router, React Youtube, Express.js, CSS

**Testing**: Cypress.js

**Deployment**: Heroku

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-rancid-tomatillos)
4. [Challenges & Wins](#challenges-&-wins)

## Introduction
This project is the developers' first project in Module 3 of the Front-End Engineering program at Denver's Turing School of Software and Design. After several months of refining their javascript skills, the developers are finally dipping their toes into React and applying their experience with unit testing to implement end-to-end testing with Cypress.js. To implement the features of this project, the team used React Router, React Youtube, Express.js, and Heroku.

## Setup Instructions
To run the project locally:
- `git clone` this repo &&  `git clone` [this api repo](https://github.com/lbmerchant93/rancid-tomatillos-api-v2) for the api
- `cd` into the rancid-tomatillos repo
- run `npm start` to run the React App in your browser
- in a seperate terminal tab `cd` into the rancid-tomatillos-api
- run `node server.js` to run the api locally
- once both are running, the app is fully usable

OR

We have deployed the App and the api we created to Heroku. This way you don't have to clone them locally in order to use them! To visit either click the links below!
- [Rancid Tomatillos App]()
- [Rancid Tomatillos API](https://rancid-tomatillos-api-lm-kd.herokuapp.com/)

### Testing


[Back to Top of Page](#table-of-contents)

---

## Using Rancid Tomatillos


### Browsing Movies
The site loads to the homepage, a dashboard displaying a scrollable list of movie posters and a section of Top Rated movies. A user can scroll through the movie posters display clicking on the arrows to the left and right of the display. A user can click on any movie poster or any top rated movie to navigate to that movie's details page. 
On a movie's details page, a user sees another poster for that movie, the movie title and rating, and other key information like the movie release date, genre, runtime, and plot overview. At the bottom of the page, there is a "View Trailer" button. When clicked, this button will reveal an embedded video in the place of the movie poster. The user can click the play/pause button on this video to play/pause the trailer, and can hide the trailer again by clicking the "Hide Trailer" button at the bottom of the page.
To return to the home dashboard, a user can click either the site title or the home button in the header.

### Logging In and Out
To login to the site, a user can click the Login button in the header. This will take the user to a Login page with inputs for username and password. When the user types in correct inputs and clicks the Login button at the bottom of the form, the user will be redirected to the site home. If the user enters incorrect/incomplete inputs, an error message will display.
Because our site does not currently support real user accounts, you can test this functionality by logging in as one of three fake users: 

(1)

username: `Jessica`  

password: `Candel`

(2)

username: `Marcus`  

password: `Aurelius`

(3)

username: `Thirdu`  

password: `Ser`

Once logged in, a user can visit the user profile page by clicking the Profile button in the header. The Profile page displays the user's name and favorited movies. The user can logout by clicking the Logout button at the bottom of this page.


### Adding and Removing Movies from Favorites
Once a user is logged in, see section above, a button to add to favorites will appear on the Movie Details page under the movie image/trailer. If the user already has that movie in their favorites, then a button to remove from favorite will be displayed. By clicking the 'Add to Favorites' button the app will update the server by calling a PATCH request to the api. This request will push that movie object into the favorites array for the logged in user. To see a user's favorites, navigate to the Profile page. If the user clicks the 'Remove from Favorites' button, the app calls another PATCH request to update the user in the server removing that movie. Changes can bee seen on the user's Profile page. 

### Footer Content
Included in the footer are links to an About page, FAQ page, and Contact Us page. These links provide some information on the creation of the app and the developers that made it.

### Mobile Friendly Responsive Design

In addition to all the functionality above, we made the application completely responsive for mobile, tablet and large screens.

[Back to Top of Page](#table-of-contents)

---

### Challenges
- **One:** Understanding how to deploy to Heroku. Specifically using the heroku logs to figure out what we were missing or doing wrong. 
- **Two:** Figuring out how to access the youtube video and getting it to display properly with the design we had in mind. 
- **Three:** DDAU (Data Down Action Up) specifically passing methods down and data back up. 

### Wins
- **One:** Implementing React Router throughout the whole App.
- **Two:** Creating a backend server using Express and deploying that repository to Heroku. This made it possible to access the server without having to run the server locally. 
- **Three:** Using React-Youtube to access a specific movie's trailer and displaying it on the Movie's Details page. With this, implementing conditional rendering to toggle between the trailer and that movie's backdrop image. 



[Back to Top of Page](#table-of-contents)

