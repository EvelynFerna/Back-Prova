const con = require('../connect/connect').con;

const create = (req, res) =>{

    let reserva_id = req.body.reserva_id;
    let cliente_id = req.body.cliente_id;
    let quarto_id = req.body.quarto_id;
    let data_reserva = req.body.data_reserva;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;
    let valor_total = req.body.valor_total;
    let statusReserva = req.body.statusReserva;

    let query = 'INSERT INTO reservas (quarto_id,  numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES'
    query += `('${reserva_id}', '${cliente_id}', '${quarto_id}' , '${data_reserva}' , '${data_entrada}' , '${data_saida}' , '${valor_total}', '${statusReserva}',);`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err);
        }else{
            res.status(201).json(result)
    }
})
}

const read = (req, res)=>{
    con.query('SELECT * FROM reservas', (err,result)=> {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
    }
})
}

const update = (req, res) => {
    const { reserva_id, cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} = req.body;

    const query = 'UPDATE reservas SET cliente_id = ?,  quarto_id= ?, data_reserva = ?, data_entrada= ?, data_saida = ?,valor_total= ?, statusReserva= ? = ? WHERE reserva_id = ?';
    con.query(query, [reserva_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Sua reserva foi atualizado', result });
        }
    })
}

const deleteReservas = (req, res) => {
    const { reserva_id } = req.params;

    const query = 'DELETE FROM reservas WHERE reserva_id = ?';
    con.query(query, [reserva_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Sua reserva foi removida ', result });
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deleteReservas
    
}
