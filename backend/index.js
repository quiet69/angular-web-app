const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const { type } = require('express/lib/response');
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json())
const expport = process.env.expport;

const userTable = process.env.DBTABLE;
const config = {
    // port: parseInt(process.env.UPORT),
    server: process.env.USERVER,
    user: process.env.USERNAMEOWO,
    password: process.env.USERPASSWORD,
    database: process.env.USERDB,
    options: {
      enableArithAbort: true,
      trustServerCertificate: true // change to true for local dev / self-signed certs
    },
    connectionTimeout: 30000,
    pool: {
      max:10,
      min:0,
      idleTimeoutMillis: 30000,
    },
};


sql.on('error', err => {
    console.log('owo error:')
    console.log(err)
});


sql.connect(config,err=>{
    if(err) console.log(err);
    else {
        console.log('DB connection successful');
        // sql.close();
    }
})

//routes
app.get('/carddeets', (req,res)=>{
    let query = `select * from ${userTable}`;
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.query(query)
    }).then(result => {
        res.send(result.recordset)
        sql.close();
    }).catch(err => {
        console.log(err)
        sql.close();
    })
});

app.get('/carddeets/:id', (req,res)=>{
    let id = parseInt(req.params.id)
    let query = `select * from ${userTable} where CardsID = ${id}`;
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.query(query)
    }).then(result => {
        if(Object.keys(result.recordset).length !== 0){
            res.send(result.recordset)
            sql.close();
        } else {
            sql.close();
            return res.send(`Card with id ${id} not found`)
        }
    }).catch(err => {
        console.log(err)
        sql.close();
    })
});

app.post('/carddeets', (req,res) => {
    let entrydate = req.body.entrydate;
    let worktype = req.body.worktype;
    let premise = req.body.premise;
    let address = req.body.address;
    let sessionname = req.body.sessionname;
    let remarks = req.body.remarks;
    let cardurl = req.body.cardurl;
    
    let query = `insert into ${userTable} (EntryDate,Work_Type,Premise,Address,SessionName,Remarks,CardUrl) 
            values ('${entrydate}','${worktype}','${premise}','${address}','${sessionname}','${remarks}','${cardurl}');`
    
    new sql.ConnectionPool(config).connect().then(pool => {
    return pool.query(query)
    }).then(result => {
        res.send('successfull!')
        sql.close();
    }).catch(err => {
        res.send(err.message)
        // console.log(err)
        console.log(query)
        sql.close();
    });
});



app.put('/carddeets/:id/',(req,res) => {
    let entrydate = req.body.entrydate;
    let worktype = req.body.worktype;
    let premise = req.body.premise;
    let address = req.body.address;
    let sessionname = req.body.sessionname;
    let remarks = req.body.remarks;
    let cardurl = req.body.cardurl


    let query = `UPDATE ${userTable}
    SET EntryDate = '${entrydate}', Work_Type = '${worktype}', Premise = '${premise}', Address = '${address}', SessionName = '${sessionname}', Remarks = '${remarks}', CardUrl = '${cardurl}'
    WHERE CardsID = ${req.params.id};`;

    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.query(query)
        }).then(result => {
            res.send('updated successfully!')
            sql.close();
        }).catch(err => {
            res.send('some error occurred!')
            console.log(err)
            sql.close();
        });
});

app.delete('/carddeets/:id', (req,res)=>{
    let query = `DELETE FROM ${userTable} WHERE CardsID=${req.params.id}`;
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.query(query)
        }).then(result => {
            res.send('deleted successfully!')
            sql.close();
        }).catch(err => {
            res.send('some error occurred!')
            console.log(err)
            sql.close();
        });
})






app.listen(expport, ()=> {
    console.log(`server listening on port ${expport}!`)
});