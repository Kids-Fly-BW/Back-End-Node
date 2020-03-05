# API Documentation

### 1 Backend deployed at [https://kidfly.herokuapp.com/](add URL here)

### Backend deployed at Herku https://dashboard.heroku.com/apps/kidfly

## getting started

to get the server running locally

-clone thid repo
-\*\* npm i to install all required dependencies

1 ---This end point will register the user and with username, password, and email. To login only username and password are needed

https://kidfly.herokuapp.com/api/auth/register

this is what the object looks like
{
"username": "phil",
"password": "fly",
"email": "fred@gmail.com"
}

2-- This is the login endpoint. It only needs a username and password

https://kidfly.herokuapp.com/api/auth/login

this the shape of the object

{
"username": "phil",
"password": "fly"
}

3--- This is to post a booking; the inputs are detailed on the figma

https://kidfly.herokuapp.com//api/booking

this is the shape of the object

{
"airport_name": "newwerk",
"airline": "cold country",
"flight_number": 7,// integer not a string
"user_id":2
}

4-- this get bookings

https://kidfly.herokuapp.com//api/booking

5--- update a booking by user id

https://kidfly.herokuapp.com//api/booking/1

6-- delete a booking by id

https://kidfly.herokuapp.com//api/booking/1

7-- this create a profile

https://kidfly.herokuapp.com//api/profiles

{
"number_travelers": "3",
"children-aquipment":"chair, mask , shoes",
"luggage-details":"fragile",
"disability":"blind",
"user_id": 1 // integer not a string
}

8-- update profile by id

https://kidfly.herokuapp.com//api/profiles/2

9-- delete a profile by id

https://kidfly.herokuapp.com//api/profiles/1

10 --- get all users

https://kidfly.herokuapp.com//api/users
