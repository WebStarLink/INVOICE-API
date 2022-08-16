const ApiError = require("../exceptions/apiError")
const ClientModel = require("../models/clientModel")
const ClientDto = require("../dtos/clientDto")

class ClientService {
    async createClient (body, id) {
        const existClient = await ClientModel.findOne({itn: body.itn})
        const existLegal = await ClientModel.findOne({legal: body.legal})
        const existIban = await ClientModel.findOne({iban: body.iban})

        if (existClient) {
            throw ApiError.BadRequest(`Client with TAX number ${body.itn} already exist`)
        } 
        if (existLegal) {
            throw ApiError.BadRequest(`Client with this legal name already exist`)
        } 
        if (existIban) {
            throw ApiError.BadRequest(`Client with IBAN ${body.iban} already exist`)
        }

        const client = await ClientModel.create({...body, "owner": id})
        const clientDto = new ClientDto(client)

        return clientDto
    }
}

module.exports = new ClientService()


