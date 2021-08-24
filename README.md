 <!-- // "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // }, -->

# Steps to implement Password Auth

## Save User with hashed password

### Install Bcrypt

`npm i bcrypt`

If using typescript, install

`npm i @types/bcrypt`

### Create the Service module

This will allows us to add functionality to the create user model function

### Get the hash function from Bcrypt

remember the function takes 2 arguments!!!

`hash(plaintext, saltRounds: number)`

### Replace the User password with its hashed version

This will return a promise while hashing!

### Use this patched **create** function in the User controller

### Create User with data coming from the body

You can do some validations before saving the user, such as password length!!

## Login with User Credentials

### Create a new resource called **auth**

This includes the router, controller and a service module

### Create a login route

### Create a login user controller function

Here we will handle the errors from the login process

### Create a find User with validation function in the service module

Here we'll handle the possible outcomes of the login process
Throw errors when we have invalid inputs!!

### Find the User in the database using an unique identifier other than the ID

Make sure we have a `@unique` field in our user model!

### Use the compare Bcrypt function to validate the user credential password against the saved hashed
