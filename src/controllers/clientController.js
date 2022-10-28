import clientRepository from "../repositories/clientRepository.js"

export async function createClient(req,res) {
    const client = req.body;

    try {
        const {name, address, phone} = client;

        const clientExists = await clientRepository.getClientByName(client.name);

        if (clientExists.rowCount > 0) {
            return res.sendStatus(409);
        }
        
        const clientQuery = await clientRepository.insertClient(client.name, client.address, client.phone)
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}