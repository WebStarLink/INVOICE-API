const clientService = require("../service/clientService")

class ClientController {
    async create(req, res, next) {
        try {
            const { body } = req
            const { id } = req.user
            const profile = await clientService.createClient(body, id)

            return res.json(profile)
        } catch (error) {
            next(error)
        }
    }
    async clients(req, res, next) {
        try {
            const { id } = req.user
            const clients = await clientService.getClients(id)

            return res.json(clients)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ClientController()