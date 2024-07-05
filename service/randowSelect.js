import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

    async function selectRandow(){
        try {
            const db = await open({
                filename: '../data/banco.db',
                driver: sqlite3.Database,
            });

            const query = "SELECT * tecnologia FROM tecnologias";

            await db.run(query);

            console.log(`Tecnologia selecionada com sucesso!`)

        } catch (error) {
            console.error(`Erro ao abrir o banco de dados`, error);
        }
    }

selectRandow();