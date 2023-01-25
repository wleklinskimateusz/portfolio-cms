export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "0.0.0.0"),
      port: env.int("DATABASE_PORT", 5000),
      database: env("DATABASE_NAME", "database"),
      user: env("DATABASE_USERNAME", "user"),
      password: env("DATABASE_PASSWORD", "password"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
