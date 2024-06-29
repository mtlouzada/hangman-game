import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEinserirTecnologia(nome) {
    try {
        const db = await open({
            filename: './data/banco.db',
            driver: sqlite3.Database,
        });
        
        await db.run(`CREATE TABLE IF NOT EXISTS tecnologias (id INTEGER PRIMARY KEY, nome TEXT) `);

        await db.run(`INSERT INTO tecnologias (nome) VALUES (?)`, [nome]);
        console.log(`Tecnologia ${nome} inserida com sucesso!`);
        
    } catch (error) {
        console.error(`Erro ao abrir ou manipular o banco de dados`, error);
    }
}

criarEinserirTecnologia('Go');