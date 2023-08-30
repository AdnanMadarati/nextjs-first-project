import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";

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
