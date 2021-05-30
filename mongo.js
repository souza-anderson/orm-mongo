const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/mongo-orm', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PessoaSchema = mongoose.Schema({
            nome: String,
            cargo: String
        })

        const Pessoa = mongoose.model('Pessoa', PessoaSchema)
        // const pessoa = new Pessoa({ nome: 'Anderson', cargo: 'Fullstack Developer' })
        // pessoa.save(() => console.log('salvo'))

        Pessoa.find({}, (err, docs) => console.log(docs))

        // Pessoa.remove({
        //     _id: '60b386883891812204e3a9c3'
        // }, (err, res) => console.log('ok'))

    })