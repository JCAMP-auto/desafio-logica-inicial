let hero = "";
let xp = 7500;
let level = "Unknown"; // Variável alterada aqui

// Estrutura de decisões
if (xp < 1000) {
    level = "Ferro";
    hero = "Astra";
} else if (xp >= 1001 && xp <= 2000) {
    level = "Bronze";
    hero = "Draco";
} else if (xp >= 2001 && xp <= 5000) {
    level = "Prata";
    hero = "Lumina";
} else if (xp >= 5001 && xp <= 7000) {
    level = "Ouro";
    hero = "Kael";
} else if (xp >= 7001 && xp <= 8000) {
    level = "Platina";
    hero = "Nyx";
} else if (xp >= 8001 && xp <= 9000) {
    level = "Ascendente";
    hero = "Storm";
} else if (xp >= 9001 && xp <= 10000) {
    level = "Imortal";
    hero = "Zenite";
} else {
    level = "Radiante";
    hero = "Gaia";
}

// Saída
console.log("O Herói de nome " + hero + " está no nível de " + level);