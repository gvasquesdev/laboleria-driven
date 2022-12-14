import db from "../config/db.js";

async function insertCake(name, price, image, description) {
    return db.query(`INSERT INTO cakes (name,price,image,description) VALUES ($1,$2,$3,$4)`, [name, price, image, description]);
}

async function getCakeByName(name) {
    return db.query(`SELECT * FROM cakes WHERE name= $1`, [name]);
}

const cakeRepository = {
    insertCake,
    getCakeByName
}

export default cakeRepository;