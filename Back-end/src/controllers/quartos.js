const con = require('../connect/connect').con;

const create = (req, res) =>{

    let quarto_id = req.body.quarto_id;
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo = req.body.tipo;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto = req.body.statusQuarto;
    let cliente_id = req.body.cliente_id;

    let query = 'INSERT INTO quartos (quarto_id,  numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES'
    query += `('${quarto_id}', '${numero}', '${andar}' , '${tipo}' , '${valor_diaria}' , '${statusQuarto}' , '${cliente_id}',);`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err);
        }else{
            res.status(201).json(result)
    }
})
}

const read = (req, res)=>{
    con.query('SELECT * FROM quartos', (err,result)=> {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
    }
})
}

const update = (req, res) => {
    const { quarto_id, numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} = req.body;

    const query = 'UPDATE quartos SET cliente_id = ?, numero = ?,  andar = ?, tipo = ?, valor_diaria = ?, statusQuarto,  = ? WHERE quarto_id = ?';
    con.query(query, [quarto_id, numero, andar, tipo, valor_diaria, statusQuarto, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu quarto foi atualizado', result });
        }
    })
}

const DELETE = (req, res) => {
    const { quarto_id } = req.params;

    const query = 'DELETE FROM quartos WHERE quarto_id = ?';
    con.query(query, [quarto_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu quarto foi removido ', result });
        }
    })
}

module.exports = {
    create,
    read
    
}