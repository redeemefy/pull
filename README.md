# Pull

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

> Pull still under development. Feedback is welcome!!!

The application is a capstone project for Nashville Software School. The main intention of the application is to gather resource, voluteers, and hosts in one place. 

- People can create a ticket for an event.
- People can comment on the ticket and create an thread.
- People can request to volunteer (rejected by default).
- Host can accept people to volunteer.

## To run "Pull"

- Clone the repo.
- `src/app/` create a folder `environments`.
- Inside `environments` create file `environment.ts`.
- Go to [firebase](http://www.firebase.com) and create a new project.
- Copy the database credentials to the file you just created...

```
export const environment = {
  production: false,
  firebase: {
    apiKey: 'Firebase apiKey',
    authDomain: 'your-firebase-domain.com',
    databaseURL: 'https://your-firebase-domain.com',
    projectId: 'your-firebase-domain',
    storageBucket: 'your-firebase-domain.com',
    messagingSenderId: '098374578963647892'
  }
};
```

- `cd` to the root of the app `path-to-the-project/pull`.
- run `npm install`.
- run `ng serve`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
