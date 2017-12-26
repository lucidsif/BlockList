module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
      rinkeby: {
        host: "localhost",
          port: 8545,
          network_id: 4
      },
      live: {
        host: "localhost",
          port: 8545,
          network_id: 1,
          gas: 2000000
      }
  }
};
