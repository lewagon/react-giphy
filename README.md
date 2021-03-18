# react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn build
```

## Docker

To build docker image:

```bash
docker build -t cats-image .
```

To run built docker image as a container under localhost:8001:

```bash
docker run -dp 8080:8080 cats-image
```

Go to: http://localhost:8001 to search for cat memes with giphy