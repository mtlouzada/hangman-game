import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEinserirTecnologia(tecnologia) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

    db.run('')
}

criarEinserirTecnologia();