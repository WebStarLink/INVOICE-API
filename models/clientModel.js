const {Schema, model} = require('mongoose')

const ClientSchema = new Schema({
    legal: {type: String, required: true},
    itn: {type: String, required: true},
    address: {type: String},
    iban: {type: String, required: true},
    bank: {type: String},
    bic: {type: String},
    phone: {type: String},
    noticea: {type: String},
    noticeb: {type: String},
    contract: {type: String},
    contractdate: {type: Date},
    owner: {type: String, required: true}
})


module.exports = model ("Client", ClientSchema)