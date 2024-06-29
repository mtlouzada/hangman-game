import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEinserirTecnologia(nome) {
    const db = await open({
        filename: './data/banco.db',
        driver: sqlite3.Database,
    });

    db.run(`CREATE TABLE IF NOT EXISTS tecnologias (id INTEGER PRIMARY KEY, nome TEXT) `);

    db.run(`INSERT INTO tecnologias (nome) VALUES (?)`, [nome]);
}

criarEinserirTecnologia('Go');