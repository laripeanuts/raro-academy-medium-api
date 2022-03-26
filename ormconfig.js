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
  ]
}