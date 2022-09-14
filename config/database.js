const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: "WEBIDC10.znetlive.com",
      port: 3306,
      database: "cmsgdcb",
      user: "roomush",
      password: "Roomush@123#",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
