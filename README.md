![Node.js CI](https://github.com/pedroeml/pragma-client/workflows/Node.js%20CI/badge.svg)
![GitHub Pages CI](https://github.com/pedroeml/pragma-client/workflows/GitHub%20Pages%20CI/badge.svg)

# Pragma Brewery Client

This is a simple Angular project generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9 for the Pragma Brewery Code Assignment.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## Build

```bash
# development
$ npm run build

# production
$ npm run build --prod

# production (GitHub Pages)
$ npm run deploy
```

## Test

```bash
# unit tests
$ npm run test

# end-to-end
$ npm run e2e
```

## Serve on a Docker container with NGINX (Production only)

```bash
# starting up
$ docker-compose up

# shutting down
$ docker-compose down
```

Open your browser on `http://localhost/` or `http://127.0.0.1/`.

## Code Assignment questions

> What could you do better in your code next iteration?

I started the this front-end repo by configuring Webpack's setup which turned out to be way harder than the implementation itself. This repository has a branch (`webpack-no-test-no-e2e`) exclusively for my failed attempt on setting up Angular 7 without CLI + Webpack 4. The only thing working correctly there is the Angular application build and serving on localhost. Unit tests with Karma+Jasmine and E2E with Protractor are not propperly configured to run there.

Now about this branch, which I've built using Angular CLI, everything is working as supposed to fortunately. The unit test coverage on each module's service folder isn't acceptable, so on next iteration I must work on it. Unfortunately, the E2E of this project only covers the `home` route because, for some reason, right after the Angular Router redirect to the `sensor` route the webdriver can't find any element on the DOM basically. I tried some tricks like making the driver wait few seconds or waiting for Angular, but it didn't work.
