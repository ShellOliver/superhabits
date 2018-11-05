module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "example",
    database: "db1",
    synchronize: true,
    logging: false,
    entities: ['./db/EntitySchema/*.schema.js'],
    migrations: ['./db/migrations']
}