const db = require('../db');

class MainController {
  async getTable(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    ); 
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    ); 
    res.setHeader('Access-Control-Allow-Credentials', true);

    const table = await db.query(`SELECT * FROM public.items `);
    res.json(table.rows);
  }
}

module.exports = new MainController();
