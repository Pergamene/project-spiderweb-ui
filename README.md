[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")

# Project Spiderweb UI

## License; use, modification, sharing, and distribution

* This project does **not** have an Open Source license and its copyright is only extended to the specified authors.
* You are not permitted to share the software.
* You are not permitted to distribute the software.
* You are not permitted to modify the software.
* You are not permitted to use the software, except at its hosted URL.

* You are, however, permitted to view and fork this repo.

You can read more about our permissions at https://choosealicense.com/no-permission/

## Development

### Setup

```
git clone https://github.com/Pergamene/project-spiderweb
cd project-spiderweb
npm install
npm start
```

### Testing

To run the tests, you can run `npm run test`.  However, for the alpha stages we are not focused on automated testing.

### Build

To build the app, run `npm run build`. This will create a `build` folder that has all the minified 
bundles and assets you need to deploy. If you want to test that the build output works, you can run

```
npm run serve
```

## Notes

### Deployment

For deployment, we use [Netlify](https://www.netlify.com/). Since this project does not have an Open Source license, you are not permitted to deploy the code to a public URL.

### Supported browsers
This app uses the `es6-bundled` bundle -- this means that it will not work on IE11. It could be deployed with the `es5-bundled` bundle, but nobody likes IE11 anyway.