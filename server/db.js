const Pool = require("pg").Pool;
const pool = new Pool({
  user: "pwwdaepsrvcttk",
  password: "e925fe8e4af5c2aa61eb65751c7c56e9744bd478556739ca7fcca33a11e261ab",
  host: "ec2-54-170-90-26.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "dciu49618jrskq",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
