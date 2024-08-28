const database = require('../database/database');

exports.getTasks = async (req, res) => {
  try {
    const allTasks = await database.query('SELECT * FROM agreement'); // agreement테이블에서 모든 행을 선택
    //res.json();

    return res.status(201).json(allTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
