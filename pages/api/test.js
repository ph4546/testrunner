import connection from '../../lib/db'


export default async function handler(req, res) {
  /*
  if(req.method !== 'GET') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  */

  
  //connection.connect()
  //connection.query('SELECT * FROM Users', function (err, rows, fields) {
    //if (err) throw err

  const query = 'SELECT * FROM Users';
  const [rows] = await connection.query(query);
  res.json(rows);
    //res.send(rows)
}


/*
export default async function handler(req, res) {
  if(req.method !== 'GET') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  try {
      const data = await excuteQuery({
        query: 'SELECT * FROM Users'
    });
    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
}
*/