# Favorite Game App
https://favgameproject.herokuapp.com/

Sign up and search for your favorite games then add them to your profile. 

# Models
User - username, email, password, favorites
Favorite - cover, genres, id, name, platforms, summary

# Current usability
A user can sign up or log in to use the search functionality and view their profile. 
Games can be searched for by keywords in game name, summary. 
Favorite games can be added to your profile and viewed from your profile page. 
Games on your profile page can be removed from your favorites. 

# Planned features
In rough order of importance~
Display more detailed information on games searched, genres and platforms named instead of number. 
Cover art displayed.
Comment/review section on each favorite game of profile for user to write about why it is their favorite.
Update search function to have optional paramaters for genres and platforms. 
Allow users to view other user profiles to read comment/review of other users.
Add other misc/bio section to profile for user to update with whatever they wish.
Add 404 page.
Add about or other refrences to my work.
Make meaningful home page with popular games as rated on IGDB.
Integrate with steam database to track sales on popular games.

# Tech Used
Node.js
Express.js
Passport
MongoDB
Mongoose
Heroku
Bootstrap

# Using Data from
https://igdb.github.io/api/ with the IGDB node module

