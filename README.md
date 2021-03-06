# PropertyApp

This app uses Angular 5, with TypeScript and RxJS on the front-end.
It uses the Angular CLI, for code scaffolding.

The Node API is written in TypeScript, and uses the Express framework.
Below are a set of steps to setup the project.

## Node API server

1.  `cd server`
2.  `npm install`
3.  `npm run serve` to launch the API server.

This leaves the API server running at `http://localhost:8080/`. The app will automatically reload if you change any of the source files, courtesy to Nodemon.

The Node API exposes a REST endpoint for the front-end, to consume. The API server inturn fetches data from the McMakler's Public API servers. The Node API is not responsible for serving front-end assets to the browser.

## Front end server

1.  `cd client`
2.  `npm install`
3.  `ng serve` for a dev server.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Git Hooks

The application has a `precommit` git hook which auto formats the code and runs an `ng lint` on the entire front-end code base.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Screenshots

Loading Animation while fetching data
![Screen](https://raw.githubusercontent.com/nikilok/PropertyApp/master/screenshots/loading.png)
Catalog with photographs
![Screen](https://raw.githubusercontent.com/nikilok/PropertyApp/master/screenshots/catalog.png)
Catalog with missing photographs
![Screen](https://raw.githubusercontent.com/nikilok/PropertyApp/master/screenshots/catalog-without-images.png)
A Card Upon Mouseover
![Screen](https://raw.githubusercontent.com/nikilok/PropertyApp/master/screenshots/card-hover-effects.png)

Mobile view of the catalog
![Screen](https://raw.githubusercontent.com/nikilok/PropertyApp/master/screenshots/responsive-view.png)
