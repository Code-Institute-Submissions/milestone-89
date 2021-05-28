# Must Play

My project is a game dedication page. On my webpage i wanted to pay hommage to some of my favourite games i've played. While doing this I wish to 
inform the user about each game by giving a brief summary, a video trailer and also a google map so that the user may go out and buy the game
for themselves.
 
## UX
### Targeted User
* This website is targeted at gamers that are interested in story driven single player games.
* People above the age of 18.
* Have an interest in well written storylines.
* People who love to get lost in the world of a game.

### User Story
1. As a new user to this Website, I want to easily navigate the website so i can find 
the information i need.
2. As a new user to this Website, I want important information visible to me when i load up the 
website initially.
3. As a new user to this Website, I want to know the a general idea on how good the games
showcased are.
4. As a new user to this Website, I want a brief summary of the games showcased.
5. As a new user to this Website, I want to be able to watch a video trailer so i can 
better understand the games showcased. 
6. As a new user to this Website, I want to know locations in Ireland that i may purchase these
games.

### Wireframes
Two sets of wireframes had to be made as layout changes were made to the website as development
was taking place.

#### Wireframe 1.o
Stored in this repository as "first-wireframe.pdf"

#### Wireframe 2.0
Stored in this repository as "second-wireframe.pdf"


## Features
* This is a one page website
* The page is also reponsive.
* On initial load up the page features a hero image with overlayed text and it is supposed to grab the 
users attention with large fonts and vital info.
* There is a summary for each game.
* There is a video trailer for each Game. 
* There is a Google map so the user can find a store to buy a game.

### Features Left to Implement
* A feature I would like to implement in the future would be a gallery page, I feel it would 
help the user better understand the games and have a better feel for them if the video doesnt help.

## Technologies Used
* This website uses HTML programming language.
* This website uses CSS programming language.
* This website uses JavaScript
* This website uses jQuery
* This Website uses the Google Maps API [https://developers.google.com/maps/]
* This website uses Bootstrap CDN. bootstrap was used to ensure a responsive and consistent 
website. [https://www.bootstrapcdn.com/]
* This website uses Font Awesome. Font Awesome was used to mainly for the social links
so that they looked more appealing. [https://fontawesome.com/] 
* This website uses Google Fonts. Google Fonts was used to for a more appealing text on screen
[https://fonts.google.com/]

## Testing
W3C Markup Validation ans W3C CSS Validation were used to validate the code of the website.
* [https://validator.w3.org/]
* [https://jigsaw.w3.org/css-validator/]


### Testing User Stories
1. As a new user to this Website, I want to easily navigate the website so i can find 
the information i need.
* This is a one page website, so all info is on the one page.
* Page layout is very simple for a user to understand quickly
* When hovering over any buttons they will change colour to inform the user they are on a button, button 
colour will revert when use ris not hovering on the button.

2. As a new user to this Website, I want important information visible to me when i load up the 
website initially.
* On page load there is a h1 title Saying "MUST PLAY".
* There is a hero image showcasing three games that the website focuses on.
* Scrolling down will give you a brief summary of all three games.

3. As a new user to this Website, I want to know the a general idea on how good the games
showcased are.
* On Page load, there is text over layed ontop of the hero image. this text gives the game raiting from a game reviewer.

4. As a new user to this Website, I want a brief summary of the games showcased.
* Once you scroll past the hero image a brief summary of each game is given.

5. As a new user to this Website, I want to be able to watch a video trailer so i can 
better understand the games showcased.  
* Underneath eache summary is a link which will bring you to the corresponding video trailer.

6. As a new user to this Website, I want to know locations in Ireland that I may purchase these
games.
* Once one of the links under the sommary is clicked, the trailer and map is revealed, which gives locations 
for videogame stores in each major city in Ireland.

### Manually testing functionality of the website
#### Home Page:
1. Hero image / Overlayered text:
* Go to the homepage with a desktop screen size
* Make sure image take up 100% of the width.
* Make sure transparent layer completely covers image
* Ensure overlayed text is in the correct position
* Ensure that the game raitings changes size on mouse enter and on mouse leave.
* Change screen size from desktop to tablet checking responsiveness of the image and the text.
* Change screen size from tablet to mobile and repeat the above step. 
* Repeat these steps again using a mobile device and a tablet.

2. Game Summaries:
* Go to the homepage with a desktop screen size
* Ensure all conent is on the same row with three equal colums.
* Click Each link under the summaries to ensure the correct content appears
* Ensure each link changes colour on mouse enter and mouse leave.
* Change screen size from desktop to tablet to make sure the all content responds properly and
that there is no overflow issues with padding or margins.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet.
*Repeat these steps again with links clicked.

3. Trailer:
* Go to the homepage with a desktop screen size
* Ensure trailer takes up 75% of the width
* Ensure background image takes up 25% of initial width.
* Ensure Backround image disappears when page width is less that 900px.
* Change screen size from desktop to tablet to make sure the all content responds properly and
that there is no overflow issues with padding or margins.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet.
* Repeat these steps with each links clicked

4. Google Map:
* Go to the homepage with a desktop screen size
* Click on one of the summary link
* Ensure that map is centered on Ireland
* Ensure cluster markers are working
* Ensure all stores are being shown
* Change screen size from desktop to tablet to make sure the all content responds properly and
that there is no overflow issues with padding or margins.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet.
* Repeat these steps with each links clicked.



### More Testing
1. Asked my family and friends to look at the site to see if they could find any bugs. 
(This happened after I had done all my own testing and they were unable to find any bugs but did give suggestions 
on colour pallete changes)

## Deployment

### This project was deployed using Github Pages using github repositories
1. Go to github.com
2. Sign into your account
3. On the Left handside you sould see a list of your repositories, click the repository
you wish to deploy.
4. Click on the settings tab in your repository
5. Click "options" within settings on the left tab 
6. Scroll down until you see the heading Github Pages
7. Select branch "main" and click save
8. A page is then automatically deployed using your username as a domain name
(you also have the choice of uding a custom domain)
9. In my case my deployed with the domain https://robertl231.github.io/milestone-2/

### How to run this project locally
You will need a Github account and a browser (chrome)
1. Install the gitpod chrome extension to your browser. 
[https://www.gitpod.io/docs/browser-extension/]
2. After installation, go to github.com and find this project repository.
[https://github.com/Robertl231/milestone-1] 
3. Click on the green "Gitpod Button" in the top right above the repository.
4. Once this is done the site will create a new workspace for this project.


## Credits

### Content
All Content is my own unless stated otherwise here or in the form of comments in the html 
code

### Media
#### The photos used in this site were obtained from sources listed below:
1. firefly.png
[https://www.pinclipart.com/pindetail/omhwJT_firefly-svg-us-last-banner-royalty-free-download/]
2. gow-symbol.png
[https://www.pikpng.com/pngvi/xwbRJm_omega-symbol-god-of-war-logo-omega-hd/]
3. uncharted-symbol.png
[https://www.pngwing.com/en/free-png-tprls/download]
4. hero.jpg
[https://twitter.com/Naughty_Dog]
[https://twitter.com/SonySantaMonica]
(hero image was initially three seperate images, I photoshoped them together for an appealing and 
striking hero image)

### Acknowledgements

I would like to thank my Mentor Miguel for all his help and guidance, aswell as my friends and family
