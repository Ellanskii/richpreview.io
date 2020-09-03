import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  dev: false
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  await nuxt.render(req, res)
}

app.get('*', handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions.https.onRequest(app)