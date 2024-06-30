import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import arrayTecnologias from '../data/data.js';

async function criarEinserirTecnologia(arrayTecnologias) {
    try {
        const db = await open({
            filename: './data/banco.db',
            driver: sqlite3.Database,
        });
        
        for (const tecnologia of arrayTecnologias) 
        {
            await db.run(`INSERT INTO tecnologias (nome) VALUES (?)`, [tecnologia]);
            console.log(`Tecnologia ${tecnologia} inserida com sucesso!`);
        }

        await db.run(`CREATE TABLE IF NOT EXISTS tecnologias (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT) `);

        await db.run(`INSERT INTO tecnologias (nome) VALUES (?)`, [nome]);
        console.log(`Tecnologia ${nome} inserida com sucesso!`);

    } catch (error) {
        console.error(`Erro ao abrir ou manipular o banco de dados`, error);
    }
}

criarEinserirTecnologia(arrayTecnologias);