# Random Quote App

***

## Overview

Random Quote App is a web app that generates quotes at random. It's part of the coursework of the [freeCodeCamp](freecodecamp.org) frontend course. 

## How to use the web app

To use the web app, follow these steps:

1. Open your web browser of choice. 
2. Input the URL, `random-quote-app.netlify.app`, into your browser's search bar. 
3. Click on the `Pull Quote` button to generate a new quote. 

## App design

### The frontend 

The frontend was built with **React**. The app is styled with an external stylesheet written in **SASS**. The app uses the `react-icons` library for the social media icons. 

### The API 

I used the `typfi` API for getting quotes. 

## How the app works under the hood

The Random Quote App working principle is pretty simple. 

The following steps take place when you click the `Pull Quote` button:

1. A `GET` request is sent to the `typfi` API. 
2. If the request is successful, the API returns an array of quotes and the associated authors. 
3. The `Math.random()` is used to select a quote at random from the returned data. 
4. The selected quote is displayed along with the author.

> There's something interesting that happens each time a new quote is generated. Do you know what happens? 

> The `background-color` of the button and parent container of the quote change. 

> Isn't that cool 😎? 

***

## Troubleshooting 

If you have error generating quotes, check your internet connection. 

***

**Enjoy the app**