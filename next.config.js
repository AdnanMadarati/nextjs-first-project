const { PHASE_PRODUCTION_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      env: {
        username: "adnan",
        password: "Masaraty",
        cluster: "cluster0",
        database: "finale",
      },
    };
  }
  return {
    env: {
      username: "adnan",
      password: "Masaraty",
      cluster: "cluster0",
      database: "finale",
    },
  };
};
