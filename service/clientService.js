const ApiError = require("../exceptions/apiError")
const ClientModel = require("../models/clientModel")
const ClientDto = require("../dtos/clientDto")

class ClientService {
    async createClient (body, id) {
        const client = await ClientModel.create({...body, "owner": id})
        const clientDto = new ClientDto(client)

        return clientDto
    }

    async getClients(id) {
        const clients = await ClientModel.find({ owner: id })
        if (!clients) {
            throw ApiError.BadRequest(`There is no added clients for this account`)
        } 
        return clients
    }

    async removeClient(id) {
        const removed = await ClientModel.deleteOne({ _id: id })
               
        return removed
    }
}

module.exports = new ClientService()


