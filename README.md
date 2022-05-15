# Test App

This is a test app.

## Deploy project locally

### Install dependencies

Some git hooks will be configured (see `.hooks` directory in the root of the project for more information).

```
npm install
```

### Start development server

It will start a local server in [http://localhost:8000/](http://localhost:8000/).

```
npm run dev
```

### Build app

When generating the bundle, you can analyse it by opening in the browser the `stats.html` file 
that will be automatically generated after the build.

The generated bundle can be found in the `dist` folder.

```
npm run build
```

### Start local server with the previous generated bundle

Will start a local server in [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

**CAUTION: You need first to build the app.**

```
npm run preview
```


