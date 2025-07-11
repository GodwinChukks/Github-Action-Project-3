# Github-Action-Project-3

### Github Dashboard

![image](screenshot/1.PNG)

### Clonning repository into the project folder

![image](screenshot/2.PNG)

## Step 1:

### Running `npm init` to generate the `package.json file`

![image](screenshot/3.PNG)

## Step 2:

### Downloading and installing express locally. The command `npm install express` tell Node package manager(npm) tp download and install express locally. 

![image](screenshot/4.PNG)

### `Express` is is a fast, minimalist web framework for Node.js..

### The command installs the latest version of Express from the npm registry into your project's node_modules folder.

## Step 4:

## Installing jest supertest:

### Jest is a testing framework created by Facebook that's widely used with JavaScript, especially in Node.js and React projects. It makes writing and running tests smooth and intuitive.

### Supertest is a library that lets you simulate HTTP requests for testing Express apps or other Node servers. It integrates perfectly with Jest and makes it easy to test your API endpoints.

## When you pair Jest with Supertest:

- Jest handles the structure and assertions

- Supertest handles the HTTP simulation

### Together, they give you clean, fast API testing without spinning up a real server.

### installing jest supertest

![image](screenshot/5.PNG)

The flag `save-dev` meaning they’re only needed during development—not in production.

## Step 5: 

### Create our code base folder for the project

![image](screenshot/6.PNG)

## Step 6:

creating `index.js` file and code

![image](screenshot/7.PNG)

## Step 7:

### creating app.js file and code

![image](screenshot/8.PNG)

## Step 8:

### creating app.test.js file and code

![image](screenshot/9.PNG)

### verifying our code base are successfully created

![image](screenshot/10.PNG)

## Step 9: Testing index.js 

![image](screenshot/11.PNG)

## Step 10:

### updating package.json test script

![image](screenshot/12.PNG)

### Testing to cofirm app is listening on port 3000

![image](screenshot/13.PNG)

### Testing our app locally on the web browser

![image](screenshot/14.PNG)

### Creating gitignore file and passing node_modules file to it

![image](screenshot/15.PNG)

### Running test on our script

![image](screenshot/16.PNG)

### Creating our github workflows

![image](screenshot/17.PNG)

### Push job to Github repository

![image](screenshot/18.PNG)

## Job was successfully build and tested using Github Action

![image](screenshot/19.PNG)


# Impleting Matrix Build to Test Accross Environment and Versions Simulteneously.

### A matrix build lets you define multiple variables (like Node.js versions, operating systems, or environments) and automatically create combinations of them that GitHub Actions will run in parallel.

## Test Across Environment and Versions Simultaneously" Means…

## You can run your tests on:

- Multiple Node versions (e.g. 14, 16, 18)

- Multiple environments (development, staging, production)

- GitHub will spin up jobs like:

- Node 14 + development

- Node 14 + staging

- Node 16 + production

- Node 18 + development ...all at the same time.

### GitHub generates parallel jobs for each combo—so you test how your app behaves under every version/env pairing.

### We also implement in our pipeline dependency caching to speed up future runs, and artifact uploads to preserve results like test reports, logs, or coverage summaries. These additions will make your workflow more efficient and traceable

### update package.json script

```
{
  "name": "github-action-project-3",
  "version": "1.0.0",
  "description": "### Github Dashboard",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/GodwinChukks/Github-Action-Project-3.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/GodwinChukks/Github-Action-Project-3/issues"
  },
  "homepage": "https://github.com/GodwinChukks/Github-Action-Project-3#readme",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "jest": "^30.0.4",
    "supertest": "^7.1.3"
  }
}

```

### Pushing workflow after implementing matrix strategy, dependencies caching and artifact upload

![image](screenshot/20.PNG)

## Successful pipeline run

![image](screenshot/21.PNG)

![image](screenshot/22.PNG)

![image](screenshot/23.PNG)


## Integrating ESLint for linting and static analysis

### updated package.json script

```
{
  "name": "github-action-project-3",
  "version": "1.0.0",
  "description": "NodeJS CI pipeline with GitHub Actions matrix build, linting, and code analysis",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "lint": "eslint ."
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/GodwinChukks/Github-Action-Project-3.git"
  },
  "keywords": [],
  "author": "Godwin Chukks",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/GodwinChukks/Github-Action-Project-3/issues"
  },
  "homepage": "https://github.com/GodwinChukks/Github-Action-Project-3#readme",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "jest": "^30.0.4",
    "supertest": "^7.1.3",
    "eslint": "^8.50.0"
  }
}

```

## 1. Next Steps we Activate ESLint 

### Run `npm install eslint --save-dev`

![image](screenshot/24.PNG)

## 2. Initialize Config (interactive setup):

### Run `npx eslint --init`

## Choose:

- Format: JSON

- Environment: Node and CommonJS

- Style guide: Recommended or customize

### Configuring npx eslint

![image](screenshot/25.PNG)
![image](screenshot/26.PNG)
![image](screenshot/27.PNG)
![image](screenshot/28.PNG)

### pushing workflow pipeline after update

![image](screenshot/29.PNG)

### Successfull build and analyze using ESlint

![image](screenshot/30.PNG)

![image](screenshot/31.PNG)

## Deploying our Project to Heroku

### creating bucket ready for depolyment

![image](screenshot/32.PNG)

### creating secrets for aws deployment

![image](screenshot/33.PNG)

### Successful deploy to aws s3

![image](screenshot/34.PNG)

### confirm aws s3 deployment

![image](screenshot/36.PNG)

### confirming aws s3 deployment













