# Rancid Tomatillos
#### Turing School of Software Design - Mod3 Partner Project

### Contributors
- Kelly Dinneen : [github profile](https://github.com/kellydinneen)
- Lucas Merchant : [github profile](https://github.com/lbmerchant93)

#### Instructors: 
- Leta Keana : [github profile](https://github.com/letakeane)
- Scott Ertmer : [github profile](https://github.com/sertmer)

The details of this project are outlined in [this project spec](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html)

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-rancid-tomatillos)
4. [Challenges & Wins](#challenges-&-wins)
5. [Appreciation](#appreciation)

## Introduction
  

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
We used Cypress.js to implement end-to-end-tests of the user flow. To run these tests, `cd` into the project repository and install Cypress by typing `npm i -D cypress` on the command line and adding 
```
"scripts": {
    "cypress:open": "cypress open"
  }
  ```
 to your `package.json` file.
 
 Then run `npm run cypress:open`
 
 Cypress.js should open a window with a list of test files. Click on a file name to run the tests in that file.

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

### Appreciation
Thank you to Leta Keana and Scott Ertmer for introducing us to the tools used in this project.


[Back to Top of Page](#table-of-contents)

