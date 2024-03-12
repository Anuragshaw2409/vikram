# Vikram

Vikram is a guide for my college JBIT that guides you to different locations according to your choice.

This is a MERN PROJECT.

The path is shown with the help of images that is stored in Google drive. The links of all the images is stored in mongo db that has location and steps field. The location has the goal address and steps is an array of urls of the images.

The backend fetches images from Google drive using node-fetch and sends it to the frontend.

The backend of Vikram is in Backend-vikram repository.
It has 3 endpoints. 
1) To store image links to mongo.
2) To get the array size of the steps for the location.
3) To fetch images from Google drive and send it to frontend.
