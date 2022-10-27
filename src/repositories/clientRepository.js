import db from "../config/db.js";

async function insertClient(name, address, telephone) {
    return db.query(`INSERT INTO clients (name,address,phone) VALUES ($1,$2,$3)`, [name, address, telephone]);
}

async function getClientByName(name) {
    return db.query(`SELECT * FROM clients WHERE name= $1`, [name]);
}

const clientRepository = {
    insertClient,
    getClientByName
}

export default clientRepository;