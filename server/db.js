const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'pfobdaclixussl',
  password: '02b9afa727c790f1bf94cae769bdcf9c7e7d511dd331e25a1ba492d0ef407e0f',
  host: 'ec2-34-241-90-235.eu-west-1.compute.amazonaws.com',
  port: 5432,
  database: 'd7lkcrvoj8g39g',
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
