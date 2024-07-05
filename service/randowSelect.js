import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

    async function selectRandow(){
        try {
            const db = await open({
                filename: '../data/banco.db',
                driver: sqlite3.Database,
            });

            const query = "SELECT * tecnologia FROM tecnologias";
            const randomize = query[Math.floor(Math.random() * query.length)];
            await db.run(``);

        } catch (error) {
            console.error(`Erro ao abrir ou manipular o banco de dados`, error);
        }
    }

selectRandow();