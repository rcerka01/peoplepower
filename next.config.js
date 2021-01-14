module.exports = {
    serverRuntimeConfig: {
    //   Will only be available on the server side
    //   mySecret: 'secret',
    //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      // staticFolder: '/static',
        auth0: { 
          domain: "dev-people-power.eu.auth0.com",
          clientId: "GfEKefsBil5ngruRf4HV9T0IZitgHOAS",
          redirectUri: "http://localhost:3000/"
      }
    },
  }
  