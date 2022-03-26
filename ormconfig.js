module.exports = {
  "type": "mysql",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": [
    "dist/**/*.entity{.ts,.js}"
    // process.env.NODE_ENV === 'development' ?
    //   "src/**/*.entity.ts" :
    //   "dist/**/*.entity.js"
  ],
  // "migrations": ["src/migration/*.ts"],
  // "subscribers": ["src/subscriber/**/*.ts"],
  // "cli": {
  //   "entitiesDir": "src/models",
  //   "migrationsDir": "src/migration",
  //   "subscribersDir": "src/subscriber"
  // }
}