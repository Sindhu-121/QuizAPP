const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3008;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'egquizdatabase',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.message);
      throw err;
    }
    console.log('Connected to the MySQL database');
  });
  app.use(cors());

//   geting coureses
app.get("/quiz_coures",(req,res) => {
    const sql="SELECT * FROM 1egquiz_courses";
    db.query(sql,(err,result)=>{
        if(err){
            console.error('Error querying the database: ' + err.message);
           res.status(500).json({ error: 'Error fetching coureses' });
          return;
        }
        res.json(result);
        console.log(res)
    })});

    app.get("/quiz_exams/:course_id", (req, res) => {
        const course_id = req.params.course_id;
        const sql = "SELECT * FROM 2egquiz_exam WHERE course_id = ?";
        db.query(sql, [course_id], (err, result) => {
          if (err) {
            console.error('Error querying the database: ' + err.message);
            res.status(500).json({ error: 'Error fetching exams' });
            return;
          }
          res.json(result);
        });
      });
      app.get("/quiz_Subjects/:exam_id",(req,res)=>{
        const sql="SELECT s.subi_id,s.subject_name FROM egquiz_subindex s,3egquiz_subject t WHERE t.subi_id=s.subi_id and exam_id=?";
        const exam_id=req.params.exam_id;
        db.query(sql, [exam_id] ,(err,result)=>{
          if(err){
            console.error('Error querying the database: ' + err.message);
           res.status(500).json({ error: 'Error fetching subjects' });
          return;
        }
        res.json(result);
        })
        });

        
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });