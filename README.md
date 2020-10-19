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
4. Remove the `SAMPLE-` prepend at files under `src/enviroments/`. 
5. Use the corresponding files according to the environment you are in (in this case, `environment.ts`) and point the `apiDomain` environment variable according to the local URL Gracenote API is deployed to (`http://localhost:8080` by default)<sup>[1](#myfootnote1)</sup>. 
6. Finally, run the desired Angular command. See the following instructions that are taken from the generated README by Angular.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

<sub><a name="myfootnote1">1</a>: Use `environment.prod.ts` for production deployment</sub>

### Deploy to production
1. Run the command `ng build --prod --build-optimizer` at the root directory of the project. This will create a `dist/` folder with the generated minified files.
2. Copy the contents of this folder to a server instance (i.e. Tomcat server, Azure storage account, etc.).

![preview 09-19-20](https://user-images.githubusercontent.com/3778912/96346436-6fcdd580-10ce-11eb-84d8-5b4519e3b517.PNG)

<sub><a name="myfootnote1">1</a>: Use `environment.prod.ts` for production deployment</sub>

## Future Plans
- Optimize service API calls– probably generate a client model through Swagger
- Add user implementation
