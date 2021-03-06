# Web app from scratch

## My recipe searcher

The perfect website to discover delicious recipes.
[Live demo](https://giovannikaaijk.github.io/web-app-from-scratch-1920/index.html)

<img width="1440" alt="Schermafbeelding 2020-02-14 om 09 38 10" src="https://user-images.githubusercontent.com/43671292/74514918-cfeff480-4f0d-11ea-9c4f-070b49ba8448.png">

## Table of Contents

- [Web app from scratch](#web-app-from-scratch)
  * [Description](#description)
  * [Actor Diagram](#actor-diagram)
  * [Interaction Diagram](#interaction-diagram)
  * [Features](#features)
    + [Api](#api)
    + [Virtual dom](#virtual-dom)
    + [Upcoming features](#upcoming-features)
  * [Packages used](#packages-used)
  * [Installation](#installation)
  * [Keep up to date](#keep-up-to-date)
  * [Contributing](#contributing)
  * [Sources](#sources)
  * [License](#license)

## Description

During this course I created a web app to discover recipes. The data I use comes from [Edamam](https://developer.edamam.com/). The user has the ability to search different recipes and check the detail pages. In this project, I only used vanilla Javascript.

## Actor Diagram
<img width="1440" alt="actor-diagram_Tekengebied 1" src="https://user-images.githubusercontent.com/43671292/75246667-89817c00-57d0-11ea-8bb5-98b7404ac735.png">

## Interaction Diagram
<img width="1440" alt="interaction-diagram_Tekengebied 1" src="https://user-images.githubusercontent.com/43671292/75252167-62c94280-57dc-11ea-8b41-83092bc119c1.png">

## Features

### Api

Trough an API the app collects different recipes, the following data is requested from the objects:
```
{
    q: "chicken"
    from: 0
    to: 51
    more: true
    count: 168103
    hits: [{All the results in an array}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
}

Hit Example:
{
    recipe:
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6"
    label: "Chicken Vesuvio"
    image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
    source: "Serious Eats"
    url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
    shareAs: "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken"
    yield: 4
    dietLabels: ["Low-Carb"]
    healthLabels: (3) ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"]
    cautions: ["Sulfites"]
    ingredientLines: (10) ["1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper", "1 cup frozen peas, thawed"]
    ingredients: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    calories: 4055.7632762010808
    totalWeight: 2765.5901364771207
    totalTime: 60
    totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
    totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
    digest: (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    __proto__: Object
    bookmarked: false
    bought: false
}

```
The api data:
```
api: The query to the Edamam API,
appId: Your account ID on Edamam,
appKey: Your personal requested key
```

### Virtual dom
For this course, I created a virtual dom. This virtual dom checks the difference between the old three of the dom and the new three, then it replaces all old elements with the new ones.

### Upcoming features
- My own router instead of using Routie

## Interested in the project? Use the following steps to clone the project to your local computer:

## Before you clone

* Install Node.js
* Install a Code Editor
* An CLI(Command Line Interface) like bash or iTerm

## Packages used

* Routie
* Webpack

* When cloned, use npm install to install all the packages at once

## Installation

```
git clone https://github.com/GiovanniKaaijk/web-app-from-scratch-1920.git
```
Get into the right folder
```
cd web-app-from-scratch-1920
```
Install used npm packages
```
npm install
```
Run the webpack builder
```
npm run watch
```

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources
Sources used in this app:
- [Creating the virtual dom](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#diff-oldvtree-newvtree)

## License
[License](https://github.com/GiovanniKaaijk/web-app-from-scratch-1920/blob/master/LICENSE)

