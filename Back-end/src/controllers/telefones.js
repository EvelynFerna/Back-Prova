const con = require('../connect/connect').con;

const create = (req, res) =>{

    let telefone_id = req.body.telefone_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;
   

    let query = 'INSERT INTO telefone (telefone_id,numero, tipo, cliente_id) VALUES'
    query += `('${telefone_id}', '${numero}', '${tipo}', '${cliente_id}',);`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err);
        }else{
            res.status(201).json(result)
    }
})
}

const read = (req, res)=>{
    con.query('SELECT * FROM telefone', (err,result)=> {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
    }
})
}

const update = (req, res) => {
    const { telefone_id, numero, tipo, cliente_id, } = req.body;

    const query = 'UPDATE telefone SET numero = ?, tipo = ?, cliente_id = ?, WHERE telefone_id = ?';
    con.query(query, [telefone_id, numero, tipo, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu telefone foi atualizado', result });
        }
    })
}

const DELETE = (req, res) => {
    const { telefone_id } = req.params;

    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    con.query(query, [telefone_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu telefone foi removido ', result });
        }
    })
}

module.exports = {
    create,
    read
    
}