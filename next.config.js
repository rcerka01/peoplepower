module.exports = {
    env: {
      auth0_domain: "dev-people-power.eu.auth0.com",
      auth0_clientId_dev: "GfEKefsBil5ngruRf4HV9T0IZitgHOAS",
      auth0_redirectUri: "https://peoplepower.vercel.app"
    },
    serverRuntimeConfig: {
    //   Will only be available on the server side
    //   mySecret: 'secret',
    //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      // staticFolder: '/static',
    }
}
    