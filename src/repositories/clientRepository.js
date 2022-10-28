import db from "../config/db.js";

async function insertClient(name, address, phone) {
    return db.query(`INSERT INTO clients (name,address,phone) VALUES ($1,$2,$3)`, [name, address, phone]);
}

async function getClientByName(name) {
    return db.query(`SELECT * FROM clients WHERE name= $1`, [name]);
}

const clientRepository = {
    insertClient,
    getClientByName
}

export default clientRepository;