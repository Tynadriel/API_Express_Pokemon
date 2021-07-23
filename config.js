const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'pokemon_app',
    password: env.DB_PASSWORD || '_RondoudouDu33_',
    database: env.DB_NAME || 'pokemon',
  },
};


module.exports = config;