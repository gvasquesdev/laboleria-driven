import cakeRepository from "../repositories/cakeRepository.js"

export async function createCake(req,res) {
    const cake = req.body;

    try {
        const {name, price, image, description} = cake;

        const cakeExists = await cakeRepository.getCakeByName(cake.name);

        if (cakeExists.rowCount > 0) {
            return res.sendStatus(409);
        }
        
        const cakeQuery = await cakeRepository.insertCake(cake.name, cake.price, cake.image, cake.description)
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}