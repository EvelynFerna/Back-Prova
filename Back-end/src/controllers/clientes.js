const con = require('../connect/connect').con;

const create = (req, res) =>{

    let cliente_id = req.body.cliente_id
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;
    
    let query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro, cliente_id) VALUES'
    query += `('${nome}', '${cpf}', '${email}' , '${endereco}' , '${data_nascimento}' , '${data_cadastro}' ,  '${cliente_id}' ,);`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err);
        }else{
            res.status(201).json(result)
    }
})
}
 
const read = (req, res)=>{
    con.query('SELECT * FROM clientes', (err,result)=> {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
    }
})
}

const update = (req, res) => {
    const { cliente_id, nome, cpf, email, data_nascimento, data_cadastro, } = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, data_nascimento = ?, data_cadastro = ?, WHERE clientes_id = ?';
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu Cliente foi atualizado', result });
        }
    })
}

const deleteClientes = (req, res) => {
    const { cliente_id } = req.params;

    const query = 'DELETE FROM clientes WHERE Cliente_id = ?';
    con.query(query, [cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Seu Cliente foi removido ', result });
        }
    })
}


module.exports = {
    create,
    read,
    update,
    deleteClientes
    
}
