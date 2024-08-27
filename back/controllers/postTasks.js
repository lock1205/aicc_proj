const database = require('../database/database');
// const { v4: uuid4 } = require('uuid');

exports.postTasks = async (req, res) => {
  try {
    const values = [
      req.body.arg_num,
      // req.body.key,
      req.body.company_name,
      req.body.level,
      req.body.master_name,
      req.body.master_tel,
      req.body.end_date,
      req.body.sum_money,
      // req.body.arg_edit,
      // req.body.arg_del,
      // req.body.arg_cancel,
      req.body.ai_data,
      req.body.ai_media,
      req.body.ai_lang,
    ];
    await database.query(
      'INSERT INTO agreement(arg_num,company_name,level,master_name,master_tel,end_date,sum_money,ai_data,ai_media,ai_lang) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
      values
    );

    return res.status(201).json({ message: 'agreement submit successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
