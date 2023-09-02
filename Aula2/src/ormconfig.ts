import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || '.db.sqlite',
    entities: [
    './src/models/*.ts'
    ],
})