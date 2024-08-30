const database = require('../database/database');

exports.getTasks = async (req, res) => {
  try {
    const allTasks = await database.query('SELECT * FROM agreement'); // agreement테이블에서 모든 행을 선택

    return res.status(201).json(allTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getUserTasks = async (req, res) => {
  const value = req.params.user_key;
  try {
    console.log(value);
    const userTasks = await database.query(
      'SELECT * FROM agreement where user_key=$1',
      [value]
    ); // agreement테이블에서 모든 행을 선택

    return res.status(201).json(userTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
