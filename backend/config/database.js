const path = require("path");

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // host: env("DATABASE_HOST", "localhost"),
      // port: env("DATABASE_PORT", 5432),
      // database: env("DATABASE_NAME", "testdb"),
      // user: env("DATABASE_USERNAME", "testdb_owner"),
      // password: env("DATABASE_PASSWORD", "LKqhY6okCa1O"),
      // schema: env("DATABASE_SCHEMA", "public"),
      host: env("DATABASE_HOST", process.env.DATABASE_HOST),
      port: env("DATABASE_PORT", process.env.DATABASE_PORT),
      database: env("DATABASE_NAME", process.env.DATABASE_NAME),
      user: env("DATABASE_USERNAME", process.env.DATABASE_USERNAME),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
      schema: env("DATABASE_SCHEMA", process.env.DATABASE_SCHEMA),
      // ssl: env("DATABASE_SSL", { rejectUnauthorized: false }),
    },
  },
});
