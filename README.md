# What is this project ?

The project named __SWAPI visualizer__ should enable to visualize the data from SWAPI (a public API). This repository includes the frontend of this little project.

# How to run it locally

You need to have yarn installed. If it's not the case, the can find the procedure to install it [here](https://classic.yarnpkg.com/fr/docs/install/#debian-stable).

Then, run the following command to install the project :
```bash
yarn
```

To run the project, you have to run first the [backend](https://github.com/jajoe/swapi_visualizer_back) of the project. Then, just run the following command :
```bash
yarn start
```

# Technical improvments

## Mandatory

searchResults... could be just an object when we use the page Description ! It's really brainfuck^^ (sorry for that, it has to be changed)

## Variable names

Some variable names have to be replaced by things more explicit or more specific. e.g the following names have to be changed :
* getData
* arrayOfFilters
* ...

## PropTypes

We should add propTypes. We have some objects in props of some components, so for these components it's really important to check the props.

## Tests

We should add unitary tests for the components. At least the view components. No need to test the styled components.

# Features good to have

* manage the translations
* graphical design, because the look of the page is really... crazy^^
* Add cache (i.e CacheAPI front-side)
