"use strict";

// Tableau de données
const data = [
    {
        id: 35,
        name: "The Witcher 3",
        category: "RPG",
        platform: "PC",
        rating: 9.5,
        year: 2015,
        image: "https://placehold.co/400x300/4a90d9/white?text=The+Witcher+3"
    },
    {
        id: 36,
        name: "Call of Duty Black Ops",
        category: "FPS",
        platform: "Xbox 360",
        rating: 8.7,
        year: 2010,
        image: "https://placehold.co/400x300/e74c3c/white?text=Call+of+Duty+Black+Ops"
    },
    {
        id: 37,
        name: "The Legend of Zelda Breath of the Wild",
        category: "Aventure",
        platform: "Nintendo Switch",
        rating: 9.2,
        year: 2017,
        image: "https://placehold.co/400x300/27ae60/white?text=Zelda+Breath+of+the+Wild"
    },
    {
        id: 38,
        name: "Starcraft II",
        category: "Stratégie",
        platform: "PC",
        rating: 8.5,
        year: 2010,
        image: "https://placehold.co/400x300/f39c12/white?text=Starcraft+II"
    },
    {
        id: 39,
        name: "Elden Ring",
        category: "RPG",
        platform: "PS5",
        rating: 9.0,
        year: 2022,
        image: "https://placehold.co/400x300/4a90d9/white?text=Elden+Ring"
    },
    {
        id: 40,
        name: "Counter Strike 2",
        category: "FPS",
        platform: "PC",
        rating: 8.9,
        year: 2023,
        image: "https://placehold.co/400x300/e74c3c/white?text=Counter+Strike+2"
    },
    {
        id: 41,
        name: "Uncharted 4",
        category: "Aventure",
        platform: "PS4",
        rating: 8.8,
        year: 2016,
        image: "https://placehold.co/400x300/27ae60/white?text=Uncharted+4"
    },
    {
        id: 42,
        name: "Civilization VI",
        category: "Stratégie",
        platform: "PC",
        rating: 8.4,
        year: 2016,
        image: "https://placehold.co/400x300/f39c12/white?text=Civilization+VI"
    },
    {
        id: 43,
        name: "Dark Souls III",
        category: "RPG",
        platform: "PS4",
        rating: 8.6,
        year: 2016,
        image: "https://placehold.co/400x300/4a90d9/white?text=Dark+Souls+III"
    },
    {
        id: 44,
        name: "Valorant",
        category: "FPS",
        platform: "PC",
        rating: 8.3,
        year: 2020,
        image: "https://placehold.co/400x300/e74c3c/white?text=Valorant"
    }
];

// Sens du tri
let sortAsc = false;

// Bouton de tri
const btnSort = document.getElementById("btn-sort");

if (btnSort) {
    btnSort.addEventListener("click", () => {

        // On inverse le sens du tri
        sortAsc = !sortAsc;

        // On trie une copie du tableau
        const sorted = [...data].sort((a, b) => {
            if (sortAsc) {
                return a.rating - b.rating;
            } else {
                return b.rating - a.rating;
            }
        });

        // On met à jour le texte du bouton
        if (sortAsc) {
            btnSort.textContent = "Trier par note : ascendant";
        } else {
            btnSort.textContent = "Trier par note : descendant";
        }

        // On affiche les jeux triés
        afficherJeux(sorted);
    });
}

/**
 * Affiche les jeux dans la page
 */
function afficherJeux(tabJeux) {
    const container = document.getElementById("list");

    if (!container) {
        console.error("L'élément #list est introuvable.");
        return;
    }

    let html = "";

    tabJeux.forEach(jeu => {
        html += `
            <article class="card" data-id="${jeu.id}">
                <img src="${jeu.image}" alt="${jeu.name}">
                <div class="card-body">
                    <h2>${jeu.name}</h2>
                    <p>${jeu.category} — ${jeu.year}</p>
                    <span class="rating">${jeu.rating}</span>
                </div>
            </article>
        `;
    });

    container.innerHTML = html;
}

// Affichage initial
afficherJeux(data);