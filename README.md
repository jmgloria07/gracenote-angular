# Gracenote

## About

Client application that consumes the REST API [Gracenote](https://github.com/jmgloria07/gracenote). 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8 and uses [Angular Material](https://github.com/angular/material) as its general theme.

## Motivation

I wanted to develop the API with the client in mind so that I can easily visualize the needs in the client's perspective. Now that the API has enough resources, I decided to start this project.

Personally, this also helps me practice front-end development. Layouting, color selections, my visual design sense in general has always been lacking. Furthermore, I also wanted to experience creating an app from ground-up with Angular.

## Setup

1. Clone [Gracenote API](https://github.com/jmgloria07/gracenote) and Gracenote Angular on your preferred directory.
2. Setup Gracenote API.
3. Open Gracenote Angular folder on your preferred IDE (I'm using VS Code).
4. Point the environment variables at `src/environments/environment.ts` to the corresponding server instance created by Gracenote (`http://localhost:8080/` by default).
5. Finally run the desired Angular command. See the following instructions that are taken from the generated README by Angular.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

![preview 09-19-20](https://user-images.githubusercontent.com/3778912/93667797-21232080-fabb-11ea-8e54-c53b0777dcb9.PNG)

## Future Plans
- Optimize service API calls– probably generate a client model through Swagger
- Add user implementation