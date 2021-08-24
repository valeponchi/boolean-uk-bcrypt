 <!-- // "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // }, -->
  
# First steps:
- create folder of the pjt, the `.gitignore` file (inside write: `node_modules` and `.env`), then create the `src` folder.
- create a file `dist` (same level of `src` folder.
- run:

```
npm init -y

npm i express morgan dotenv prisma typescript cors (bcrypt)

npx prisma init

npx tsc 

npm i @types/cors @types/express @types/dotenv @types/prisma (@types/bcrypt)
```

- in the package.json make sure you have:
```
"scripts": {
	"compile": "tsc && node ./dist/app.js || exit 1",
	"start": "nodemon -e ts -x \"npm run compile\""
	}
 ```
 - in the tsconfig file make sure you uncomment: inside the `"compilerOptions"`: 
 ```
"target": "es6"
"module": "commonjs"
"outDir": "./dist"
"strict": true
"moduleResolution": "node"
"baseUrl": "./"
"paths": {
			"*": ["node_modules/*"]
		}
"esModuleInterop": true
"skipLibCheck": true
"forceConsistentCasingInFileNames": true
```
outside the `"compilerOptions"`:
`"include": ["./src/**/*"]`


# Steps to implement Password Auth - general

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

