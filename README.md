# Habitualise App

![Main CI Status](https://github.com/Habitualise/habitualise-client/actions/workflows/ci.yml/badge.svg?branch=main)

<img width="342" alt="image" src="https://user-images.githubusercontent.com/64414639/233824502-c2ee7496-e8c3-4336-8ff9-fb7f7799636a.png">
<img width="344" alt="image" src="https://user-images.githubusercontent.com/64414639/233824548-10df0d90-90e7-4217-b62c-e2926d6166d7.png">

## Project Setup

1. (Required) Complete all **React Native CLI Quickstart** setup steps for Android and iOS before running the app: https://reactnative.dev/docs/environment-setup
2. (Required) Run `npm install` to install all dependencies
3. (Recommended) Install other recommended VSCode extensions in the repository after cloning

## Contribution Conventions

1. Before contributing make sure a ticket exists in the project board for the work you are doing
2. Create a new branch from `main` using the following branch naming conventions: `firstName/FEATURE-short-description`
   - Replace `FEATURE` with any of the commitizen conventional key words e.g. `CHORE`, `DEFECT`, `FEATURE`, `REFACTOR`, `TEST`
3. Commit using any of the following commands: `git cz`, `npm run commit`
   - **Do not** commit with `git commit` or `git commit -m`
4. When you are ready to merge your branch, create a pull request with the following title format: `[FEATURE] Short description`
   - Replace `FEATURE` with any of the commitizen conventional key words e.g. `CHORE`, `DEFECT`, `FEATURE`, `REFACTOR`, `TEST`
   - Fill in the pull request template with the relevant information
   - Link the pull request to the ticket in the project board via the description - valid keywords include `closes #XX`, `fixes #XX`, `resolves #XX` etc.

## Project Structure

```
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature.

A feature could have the following structure:

```
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

You should import things from other features only by using:

`import {AwesomeComponent} from "@/features/awesome-feature"`

and not (will raise an error)

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`
