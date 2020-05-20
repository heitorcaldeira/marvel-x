# MarvelX

To run this project, you need to create an account at [Developers Marvel](https://developer.marvel.com/)

After registration, go to [Account Page](https://developer.marvel.com/account) and get your **public** and **private** keys.

Open `src/environments/environment.ts` and update `{ publicApiKey, privateApiKey }` with your keys.

Run  `npm install` and then `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
