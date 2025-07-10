# Github-Action-Project-3

### Github Dashboard

1

### Clonning repository into the project folder

2

## Step 1:

### Running `npm init` to generate the `package.json file`

3

## Step 2:

### Downloading and installing express locally. The command `npm install express` tell Node package manager(npm) tp download and install express locally. 

4

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

5

The flag `save-dev` meaning they’re only needed during development—not in production.

## Step 5: 

### Create our code base folder for the project

6

## Step 6:

creating `index.js` file and code

7

## Step 7:

### creating app.js file and code

8

## Step 8:

### creating app.test.js file and code

9

### verifying our code base are successfully created

10

## Step 9: Testing index.js 

11

## Step 10:

### updating package.json test script

12

### Testing to cofirm app is listening on port 3000

13

### Testing our app locally on the web browser

14

### Creating gitignore file and passing node_modules file to it

15

### Running test on our script

16

### Creating our github workflows

17

### Push job to Github repository

18

## Job was successfully build and tested using Github Action

19


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









