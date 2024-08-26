const database = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postUser = async (req, res) => {
  try {
    const values = [
      req.body.id,
      req.body.password,
      req.body.name,
      req.body.email,
      req.body.company,
      req.body.level,
      req.body.phone,
    ];
    await database.query(
      'INSERT INTO users(id, password, name, email, company_name, level, phone ) values($1,$2,$3,$4,$5,$6,$7)',
      values
    );

    return res.status(201).json({ message: 'Signup successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
