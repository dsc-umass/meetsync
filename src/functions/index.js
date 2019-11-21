'use strict';

const functions = require('firebase-functions');
const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev: false, 
  conf: {distDir: 'next'}
});

// var app = next({
//     dev: false,
//     conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
//   })

const handle = app.getRequestHandler();

exports.next = functions.https.onRequest(async (req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  await app.prepare();
  handle(req, res);
});