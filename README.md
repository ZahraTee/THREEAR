# THREE AR

## Introduction

THREE AR aims to provide a simple to use Augmented Reality API for the web, leveraging three.js's 3D capabilities.

## Aims

  - Provide a unified Augmented Reality API for three.js
  - Be written in TypeScript
  - No external libraries (except three.js), everything is bundled in the library
  - Available on npm as a UMD module
  - Can be used with modern build tools/bundlers like Webpack, Rollup etc
  - Provide documentation and examples

## Demo

Got the [the basic demo](https://jamesmilneruk.github.io/THREEAR/examples/basic.html) using a mobile device and point your camera at the following marker:

![Hiro Marker](./data/hiro.jpg "Hero Marker")

## Development

#### Install

First you will want to clone the repo and then install the dependencies:

```
  git clone git@github.com:JamesMilnerUK/THREEAR.git
  npm install
```

#### Local Debugging

If you want to experiment with the examples locall you can use:

```npm run serve```

This leverages `live-server` which allows instant reloads on changes to the file system. Here if we go to `http://127.0.0.1:8080/examples/basic.html` we can see the basic example app. If you access this from a mobile device and point it at the Hiro marker above you should see a rotating cube and torus appear. 

You might want to remotely debug the page test these using your mobile OS and browser of choice:

[Remote debugging on Chrome (Android)](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) 
[Remote debugging on Safari (iOS))](https://medium.com/@sarahelson81/remote-debugging-webpages-in-ios-safari-8fd9b7a79a60)

## Acknowledgements

 - [ar.js](https://github.com/jeromeetienne/AR.js) on which this library is based
 - [jsartoolkit](https://github.com/artoolkitx/jsartoolkit5) who created the Emscripten library from the C code for artoolkit
 
## License

MIT
