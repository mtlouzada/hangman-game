//Missão 21
import entradados from 'readline-sync';






 const startHangman = () => {
    console.log("\n------------------WELCOME TO------------------\n");
    console.log(`
        
  ___ ___                    .___                            ___________           .__     
 /   |   \_____    ____    __| _/_____   ____   ____         \__    ___/___   ____ |  |__  
/    ~    \__  \  /    \  / __ |/     \_/ __ \ /    \   ______ |    |_/ __ \_/ ___\|  |  \ 
\    Y    // __ \|   |  \/ /_/ |  Y Y  \  ___/|   |  \ /_____/ |    |\  ___/\  \___|   Y  \
 \___|_  /(____  /___|  /\____ |__|_|  /\___  >___|  /         |____| \___  >\___  >___|  /
       \/      \/     \/      \/     \/     \/     \/                     \/     \/     \/ 
`)
 };

    const nomeJogador = entradados.question('Digite o seu nome: ');