"use strict";
// ===== DONNÉES =====
// Tableau d'objets : chaque objet = une légende du Barça.
// Chaque propriété correspond à une donnée affichée sur la carte ou dans la modal.
let data = [
    {
        id: 1,
        name: "Lionel Messi",
        poste: "Attaquant",
        annees: "2004–2021",
        nationalite: "Argentin",
        titres: 35,
        rating: 10.0,
        image: "img/messi.webp",
        imgPosition: "top",
        description: "Le plus grand joueur de l'histoire du Barça. 672 buts en Liga, " +
            "8 Ballons d'Or. Formé à La Masia, symbole absolu du club."
    },
    {
        id: 2,
        name: "Johan Cruyff",
        poste: "Attaquant",
        annees: "1973–1978",
        nationalite: "Néerlandais",
        titres: 3,
        rating: 9.8,
        image: "img/cruyff.jpg",
        imgPosition: "center",
        description: "Philosophe du football total. Cruyff a révolutionné le jeu au Camp Nou " +
            "et posé les bases de tout ce que le Barça est devenu."
    },
    {
        id: 3,
        name: "Xavi Hernández",
        poste: "Milieu",
        annees: "1998–2015",
        nationalite: "Espagnol",
        titres: 25,
        rating: 9.7,
        image: "img/xavi.jpg",
        imgPosition: "top",
        description: "Le maestro du tiki-taka. 767 matches officiels, 4 Ligues des Champions. " +
            "Le joueur avec le plus de passes réussies de l'histoire."
    },
    {
        id: 4,
        name: "Andrés Iniesta",
        poste: "Milieu",
        annees: "2002–2018",
        nationalite: "Espagnol",
        titres: 32,
        rating: 9.6,
        image: "img/iniesta.webp",
        imgPosition: "center",
        description: "L'homme aux moments décisifs. Auteur du but vainqueur en finale " +
            "de Coupe du monde 2010. Symbole de discrétion et d'élégance."
    },
    {
        id: 5,
        name: "Ronaldinho",
        poste: "Attaquant",
        annees: "2003–2008",
        nationalite: "Brésilien",
        titres: 9,
        rating: 9.5,
        image: "img/ronaldinho.jpg",
        imgPosition: "top",
        description: "Le magicien brésilien. Ballon d'Or 2005, deux fois élu meilleur " +
            "joueur du monde. Dribbles improbables et joie de vivre incomparables."
    },
    {
        id: 6,
        name: "Pep Guardiola",
        poste: "Milieu",
        annees: "1990–2001",
        nationalite: "Espagnol",
        titres: 17,
        rating: 9.2,
        image: "img/guardiola.jpg",
        imgPosition: "top",
        description: "Capitaine du Dream Team de Johan Cruyff. Guardiola a tout compris " +
            "du football de position, avant de devenir l'entraîneur le plus titré du club."
    },
    {
        id: 7,
        name: "Carles Puyol",
        poste: "Défenseur",
        annees: "1999–2014",
        nationalite: "Espagnol",
        titres: 21,
        rating: 9.3,
        image: "img/puyol.webp",
        imgPosition: "top",
        description: "Capitaine emblématique, guerrier du Camp Nou. Son leadership " +
            "et sa lecture du jeu en faisaient l'un des défenseurs les plus complets."
    },
    {
        id: 8,
        name: "Neymar Jr",
        poste: "Attaquant",
        annees: "2013–2017",
        nationalite: "Brésilien",
        titres: 14,
        rating: 9.0,
        image: "img/neymar.jpg",
        imgPosition: "top",
        description: "Pièce centrale du trio MSN avec Messi et Suárez. " +
            "Vainqueur de la LDC 2015, vendu au PSG pour 222M€ en 2017."
    },
    {
        id: 9,
        name: "Víctor Valdés",
        poste: "Gardien",
        annees: "2000–2014",
        nationalite: "Espagnol",
        titres: 21,
        rating: 8.9,
        image: "img/valdes.webp",
        imgPosition: "top",
        description: "Gardien de la génération dorée. 14 ans au Camp Nou, " +
            "six titres de Liga et trois Ligues des Champions."
    },
    {
        id: 10,
        name: "Dani Alves",
        poste: "Défenseur",
        annees: "2008–2016",
        nationalite: "Brésilien",
        titres: 23,
        rating: 9.1,
        image: "img/daniAlves.jpg",
        imgPosition: "top",
        description: "Le latéral droit le plus titré de l'histoire (43 titres en carrière). " +
            "Sa complicité avec Messi sur le côté droit était incomparable."
    },
    {
        id: 11,
        name: "Luis Suárez",
        poste: "Attaquant",
        annees: "2014–2020",
        nationalite: "Uruguayen",
        titres: 13,
        rating: 9.4,
        image: "img/suarez.jpg",
        imgPosition: "top",
        description: "Membre du légendaire trio MSN. 198 buts en 283 matchs, " +
            "meilleur buteur de Liga 2015–2016 avec 40 buts en une saison."
    },
    {
        id: 12,
        name: "Gerard Piqué",
        poste: "Défenseur",
        annees: "2008–2023",
        nationalite: "Espagnol",
        titres: 30,
        rating: 9.2,
        image: "img/pique.jpg",
        imgPosition: "top",
        description: "L'un des défenseurs centraux les plus titrés de l'histoire. " +
            "8 titres de Liga, 3 Ligues des Champions, champion du monde 2010."
    }
];

// ===== ÉLÉMENTS DU DOM =====
const listEl           = document.getElementById("list");
const searchInput      = document.getElementById("search");
const filterPoste      = document.getElementById("filter-poste");
const btnSortRating    = document.getElementById("btn-sort-rating");
const btnSortTitres    = document.getElementById("btn-sort-titres");
const resultCount      = document.getElementById("resultat-count");
const formAdd          = document.getElementById("form-add");
const inputName        = document.getElementById("input-name");
const inputPoste       = document.getElementById("input-poste");
const inputAnnees      = document.getElementById("input-annees");
const inputTitres      = document.getElementById("input-titres");
const inputRating      = document.getElementById("input-rating");
const inputNationalite = document.getElementById("input-nationalite");
const inputImage       = document.getElementById("input-image");
const modalOverlay     = document.getElementById("modal-overlay");
const modalClose       = document.getElementById("modal-close");
const modalBtnEdit     = document.getElementById("modal-btn-edit");
const editOverlay      = document.getElementById("edit-overlay");
const editClose        = document.getElementById("edit-close");
const editCancel       = document.getElementById("edit-cancel");
const formEdit         = document.getElementById("form-edit");
const editId           = document.getElementById("edit-id");
const editName         = document.getElementById("edit-name");
const editPoste        = document.getElementById("edit-poste");
const editAnnees       = document.getElementById("edit-annees");
const editTitres       = document.getElementById("edit-titres");
const editRating       = document.getElementById("edit-rating");
const editNationalite  = document.getElementById("edit-nationalite");

// ===== ÉTAT DU TRI =====
let sortCritere = "rating";
let sortAsc     = false;

// ===== REFRESH =====
/**
 * Relit la recherche, le filtre et le tri, puis réaffiche la liste.
 * Appelée à chaque interaction utilisateur.
 */
function refresh() {
    const query       = searchInput.value.toLowerCase().trim();
    const posteFiltre = filterPoste.value;

    // 1. Filtrer par texte (nom du joueur)
    let result = data.filter(joueur =>
        joueur.name.toLowerCase().includes(query)
    );

    // 2. Filtrer par poste (si un poste est sélectionné)
    if (posteFiltre !== "") {
        result = result.filter(joueur => joueur.poste === posteFiltre);
    }

    // 3. Trier selon le critère et la direction
    result = [...result].sort((a, b) => {
        if (sortAsc) {
            return a[sortCritere] - b[sortCritere];
        }
        return b[sortCritere] - a[sortCritere];
    });

    // 4. Afficher les résultats
    afficherJoueurs(result);

    // 5. Mettre à jour le compteur
    const pluriel = result.length > 1 ? "s" : "";
    if (result.length === 0) {
        resultCount.textContent = "Aucun joueur trouvé.";
    } else {
        resultCount.textContent =
            `${result.length} légende${pluriel} affichée${pluriel}`;
    }
}

// ===== AFFICHAGE DES CARTES =====
/**
 * Génère le HTML de chaque carte et l'insère dans #list.
 * @param {Array} tabJoueurs - Tableau d'objets joueurs à afficher
 */
function afficherJoueurs(tabJoueurs) {
    if (tabJoueurs.length === 0) {
        listEl.innerHTML =
            "<li class=\"empty-msg\">Aucune légende ne correspond à ta recherche.</li>";
        return;
    }

    let html = "";
    tabJoueurs.forEach(joueur => {
        // On génère une classe CSS basée sur le poste pour coloriser la carte
        const classePoste = "poste-" + joueur.poste.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");

        const plurielTitre = joueur.titres > 1 ? "s" : "";

        html += `
      <li>
        <article class="card ${classePoste}" data-id="${joueur.id}">
          <img src="${joueur.image}" alt="Photo de ${joueur.name}"
          style="object-position: ${joueur.imgPosition};" />
          <div class="card-body">
            <span class="card-poste">${joueur.poste}</span>
            <h2>${joueur.name}</h2>
            <p class="card-meta">${joueur.annees} · ${joueur.nationalite}</p>
            <div class="card-footer">
              <span class="rating-badge">${joueur.rating.toFixed(1)}</span>
              <span class="titres-badge">
                🏆 ${joueur.titres} titre${plurielTitre}
              </span>
            </div>
            <button
              class="btn btn-danger btn-delete"
              aria-label="Supprimer ${joueur.name}"
            >
              Supprimer
            </button>
          </div>
        </article>
      </li>
    `;
    });

    listEl.innerHTML = html;
}

// ===== TRI =====

btnSortRating.addEventListener("click", function () {
    if (sortCritere === "rating") {
        // Même critère → on inverse la direction
        sortAsc = !sortAsc;
    } else {
        sortCritere = "rating";
        sortAsc     = false;
    }
    mettreAJourBoutonsTri();
    refresh();
});

btnSortTitres.addEventListener("click", function () {
    if (sortCritere === "titres") {
        sortAsc = !sortAsc;
    } else {
        sortCritere = "titres";
        sortAsc     = false;
    }
    mettreAJourBoutonsTri();
    refresh();
});

/**
 * Met à jour les libellés des boutons de tri
 * selon le critère et la direction actuelle.
 */
function mettreAJourBoutonsTri() {
    const flecheAsc  = "↑ (ASC)";
    const flecheDesc = "↓ (DESC)";

    if (sortCritere === "rating") {
        btnSortRating.textContent =
            `Trier par note ${sortAsc ? flecheAsc : flecheDesc}`;
    } else {
        btnSortRating.textContent = "Trier par note";
    }

    if (sortCritere === "titres") {
        btnSortTitres.textContent =
            `Trier par titres ${sortAsc ? flecheAsc : flecheDesc}`;
    } else {
        btnSortTitres.textContent = "Trier par titres";
    }
}

// ===== RECHERCHE EN TEMPS RÉEL =====
searchInput.addEventListener("input", refresh);

// ===== FILTRE PAR POSTE =====
filterPoste.addEventListener("change", refresh);

// ===== SUPPRESSION PAR DÉLÉGATION =====
listEl.addEventListener("click", function (event) {
    const btnDelete = event.target.closest(".btn-delete");
    if (!btnDelete) return;

    const card      = btnDelete.closest(".card");
    const id        = Number(card.dataset.id);
    const joueur    = data.find(j => j.id === id);
    const nomJoueur = joueur ? joueur.name : "ce joueur";

    if (!confirm(`Supprimer ${nomJoueur} de la liste ?`)) return;

    data = data.filter(j => j.id !== id);
    refresh();
});

// ===== CLIC SUR UNE CARTE → OUVRIR LA MODAL =====
listEl.addEventListener("click", function (event) {
    if (event.target.closest(".btn-delete")) return;

    const card = event.target.closest(".card");
    if (!card) return;

    const id     = Number(card.dataset.id);
    const joueur = data.find(j => j.id === id);
    if (!joueur) return;

    ouvrirModal(joueur);
});

// ===== MODAL DE DÉTAIL =====

/**
 * Remplit et affiche la modal avec les détails d'un joueur.
 * @param {Object} joueur - L'objet joueur à afficher
 */
function ouvrirModal(joueur) {
    document.getElementById("modal-img").src                   = joueur.image;
    document.getElementById("modal-img").alt                   = `Photo de ${joueur.name}`;
    document.getElementById("modal-img").style.objectPosition = joueur.imgPosition || "top";
    document.getElementById("modal-poste").textContent         = joueur.poste;
    document.getElementById("modal-name").textContent          = joueur.name;
    document.getElementById("modal-annees").textContent        = `📅 ${joueur.annees}`;
    document.getElementById("modal-titres").textContent        = joueur.titres;
    document.getElementById("modal-rating").textContent        = joueur.rating.toFixed(1) + " ★";
    document.getElementById("modal-nat").textContent           = joueur.nationalite;
    document.getElementById("modal-desc").textContent          = joueur.description;

    // Stocker l'id sur le bouton modifier pour pouvoir le récupérer au clic
    modalBtnEdit.dataset.id = joueur.id;

    modalOverlay.removeAttribute("hidden");
    modalClose.focus();
}

function fermerModal() {
    modalOverlay.setAttribute("hidden", "");
}

modalClose.addEventListener("click", fermerModal);

modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) fermerModal();
});

// ===== BOUTON MODIFIER DANS LA MODAL =====
modalBtnEdit.addEventListener("click", function () {
    const id     = Number(modalBtnEdit.dataset.id);
    const joueur = data.find(j => j.id === id);
    if (!joueur) return;

    fermerModal();
    ouvrirFormEdit(joueur);
});

// ===== MODAL DE MODIFICATION =====

/**
 * Pré-remplit le formulaire de modification avec les données du joueur.
 * @param {Object} joueur - L'objet joueur à modifier
 */
function ouvrirFormEdit(joueur) {
    editId.value            = joueur.id;
    editName.value          = joueur.name;
    editPoste.value         = joueur.poste;
    editAnnees.value        = joueur.annees;
    editTitres.value        = joueur.titres;
    editRating.value        = joueur.rating;
    editNationalite.value   = joueur.nationalite;

    editOverlay.removeAttribute("hidden");
    editName.focus();
}

function fermerFormEdit() {
    editOverlay.setAttribute("hidden", "");
}

editClose.addEventListener("click", fermerFormEdit);
editCancel.addEventListener("click", fermerFormEdit);

editOverlay.addEventListener("click", function (event) {
    if (event.target === editOverlay) fermerFormEdit();
});

// ===== SOUMISSION DU FORMULAIRE DE MODIFICATION =====
formEdit.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validation des champs obligatoires
    const nomValide    = validerChamp(editName,   "error-edit-name",   "Le nom est obligatoire.");
    const posteValide  = validerChamp(editPoste,  "error-edit-poste",  "Choisis un poste.");
    const anneesValide = validerChamp(editAnnees, "error-edit-annees", "Les années sont obligatoires.");
    const titresValide = validerChamp(editTitres, "error-edit-titres", "Le nombre de titres est obligatoire.");
    const ratingValide = validerChamp(editRating, "error-edit-rating", "La note doit être entre 1 et 10.");

    if (!nomValide || !posteValide || !anneesValide || !titresValide || !ratingValide) {
        return;
    }

    const id = Number(editId.value);

    // On trouve le joueur dans le tableau et on met à jour ses propriétés
    data = data.map(function (joueur) {
        if (joueur.id !== id) return joueur;
        return {
            id:          joueur.id,
            name:        editName.value.trim(),
            poste:       editPoste.value,
            annees:      editAnnees.value.trim(),
            nationalite: editNationalite.value.trim() || "Inconnu",
            titres:      Number(editTitres.value),
            rating:      parseFloat(editRating.value),
            image:       joueur.image,
            imgPosition: joueur.imgPosition,
            description: joueur.description
        };
    });

    fermerFormEdit();
    refresh();

    resultCount.textContent = `✅ ${editName.value.trim()} modifié avec succès !`;
    setTimeout(refresh, 2500);
});

// ===== FORMULAIRE D'AJOUT =====

/**
 * Valide un champ et affiche/efface son message d'erreur.
 * @param {HTMLElement} input   - Le champ à valider
 * @param {string}      errorId - L'id du <span> d'erreur associé
 * @param {string}      message - Le message à afficher si invalide
 * @returns {boolean} true si valide
 */
function validerChamp(input, errorId, message) {
    const errorEl = document.getElementById(errorId);
    if (!input.value.trim() || !input.checkValidity()) {
        input.classList.add("invalid");
        errorEl.textContent = message;
        return false;
    }
    input.classList.remove("invalid");
    errorEl.textContent = "";
    return true;
}

formAdd.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomValide = validerChamp(
        inputName, "error-name", "Le nom est obligatoire (min. 2 caractères)."
    );
    const posteValide = validerChamp(
        inputPoste, "error-poste", "Choisis un poste."
    );
    const anneesValide = validerChamp(
        inputAnnees, "error-annees", "Les années sont obligatoires (ex. 2000–2010)."
    );
    const titresValide = validerChamp(
        inputTitres, "error-titres", "Le nombre de titres est obligatoire (0–99)."
    );
    const ratingValide = validerChamp(
        inputRating, "error-rating", "La note doit être entre 1 et 10."
    );

    if (!nomValide || !posteValide || !anneesValide || !titresValide || !ratingValide) {
        return;
    }

    const nomTrimmed = inputName.value.trim();
    const nouveauJoueur = {
        id:          Date.now(),
        name:        nomTrimmed,
        poste:       inputPoste.value,
        annees:      inputAnnees.value.trim(),
        nationalite: inputNationalite.value.trim() || "Inconnu",
        titres:      Number(inputTitres.value),
        rating:      parseFloat(inputRating.value),
        image: inputImage.value.trim() ||
            "https://placehold.co/400x300/7f8c8d/white?text=" +
            encodeURIComponent(nomTrimmed),
        imgPosition: "top",
        description: "Légende ajoutée manuellement. " + nomTrimmed +
            " a joué en tant que " + inputPoste.value + " au FC Barcelone."
    };

    data.push(nouveauJoueur);
    refresh();
    formAdd.reset();

    document.getElementById("liste").scrollIntoView({ behavior: "smooth" });

    resultCount.textContent = `✅ ${nomTrimmed} ajouté avec succès !`;
    setTimeout(refresh, 2500);
});

// Effacer les erreurs quand l'utilisateur recommence à taper
[inputName, inputPoste, inputAnnees, inputTitres, inputRating].forEach(input => {
    input.addEventListener("input", function () {
        this.classList.remove("invalid");
        const cle     = this.id.replace("input-", "");
        const errorEl = document.getElementById("error-" + cle);
        if (errorEl) errorEl.textContent = "";
    });
});

// Fermer avec la touche Échap
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (!modalOverlay.hasAttribute("hidden")) fermerModal();
        if (!editOverlay.hasAttribute("hidden"))  fermerFormEdit();
    }
});

// ===== INITIALISATION =====
refresh();