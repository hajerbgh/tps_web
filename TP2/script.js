let taches = [];
//Variables pour les éléments HTML
let inputEl, btnAjouterEl, ulEl, rechercheEl, compteurEnCoursEl, compteurTermineesEl, btnSupprimerToutEl;
const LS_KEY = "taches"; // clé de stockage localStorage

//Exécution quand le DOM est chargé 
document.addEventListener('DOMContentLoaded', () => {
  // Récupération des éléments HTML par leur ID
  inputEl = document.getElementById('nouvelle-tache');
  ulEl = document.getElementById('liste-taches');
  btnAjouterEl = document.getElementById('btn-ajouter');
  rechercheEl = document.getElementById('recherche');
  compteurEnCoursEl = document.getElementById('en-cours');
  compteurTermineesEl = document.getElementById('terminees');
  btnSupprimerToutEl = document.getElementById('btn-supprimer-tout');
  // Ajout des événements // listeners
  btnAjouterEl.addEventListener('click', ajouterTacheFromInput);
  //keydown : touche bouton du clavier
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') ajouterTacheFromInput(); }); //lorsque l’utilisateur appuie sur Entrée.
  btnSupprimerToutEl.addEventListener('click', supprimerToutesTaches);
  rechercheEl.addEventListener('input', () => renderTaches(rechercheEl.value));//// Recherche en temps réel
  // Chargement des données depuis localStorage
  loadFromStorage();
  // Affichage initial
  renderTaches();
  console.log('Bienvenue dans le gestionnaire de tâches !');
});

function ajouterTacheFromInput() {
  const texte = inputEl.value.trim();//récupère ce que user a écrit & Supp les espaces inutiles
  if (!texte) {
    alert('Écris une tâche avant d’ajouter.');
    return;
  }
  ajouterTache(texte);
  inputEl.value = '';// Vide le champ après ajout
  inputEl.focus();
}
//  Fonction qui ajoute une tâche dans le tableau 
function ajouterTache(texte) {
  const tache = {
    id: Date.now(),
    texte,
    terminee: false
  };
  taches.push(tache);
  saveToStorage();
  renderTaches(rechercheEl.value);// Réaffiche la liste (avec recherche si active)
}

//  Supprimer une tâche par son id 
function supprimerTache(id) {
  taches = taches.filter(t => t.id !== id);// Garde toutes sauf celle supprimée
  saveToStorage();
  renderTaches(rechercheEl.value);
}
//  Marquer une tâche comme terminée
function terminerTache(id) {
  const idx = taches.findIndex(t => t.id === id);
  if (idx !== -1) {
    taches[idx].terminee = !taches[idx].terminee; // Inverse l’état
    saveToStorage();
    renderTaches(rechercheEl.value);
  }
}

//Supprimer toutes les tâches

function supprimerToutesTaches() {
  if (!taches.length) {
    alert('Aucune tâche à supprimer.');
    return;
  }
  if (!confirm('Voulez-vous vraiment supprimer toutes les tâches ?')) return;
  taches = [];
  saveToStorage();
  renderTaches();
}
//Afficher la liste des tâches
function renderTaches(filter = '') {
  ulEl.innerHTML = ''; //Vide d’abord la <ul> puis reconstruit la liste à partir du tableau taches.
  const needle = filter.trim().toLowerCase();// Texte recherché
  // Filtrage des tâches selon recherche (insensible à la casse.)
  const liste = taches.filter(t => {
    if (!needle) return true; // si pas de recherche → tout afficher
    return t.texte.toLowerCase().includes(needle);
  });
  // Si aucune tâche
  if (liste.length === 0) {
    const li = document.createElement('li');
    li.className = 'vide';
    li.textContent = 'Aucune tâche';
    ulEl.appendChild(li);
  } else {
    // Parcourir et afficher chaque tâche
    liste.forEach(t => {
      const li = document.createElement('li');
      li.className = 'tache';
      if (t.terminee) li.classList.add('terminee');

      const span = document.createElement('span');
      span.className = 'texte-tache';
      span.textContent = t.texte;
           // Zone actions (terminer/supprimer)

      const actions = document.createElement('div');
      actions.className = 'actions';
      // Bouton terminer/annuler
      const btnTerminer = document.createElement('button');
      btnTerminer.type = 'button';
      btnTerminer.className = 'btn btn-terminer';
      btnTerminer.textContent = t.terminee ? 'Annuler' : 'Terminer';
      btnTerminer.addEventListener('click', () => terminerTache(t.id));
      // Bouton supprimer
      const btnSupprimer = document.createElement('button');
      btnSupprimer.type = 'button';
      btnSupprimer.className = 'btn btn-supprimer';
      btnSupprimer.textContent = 'Supprimer';
      btnSupprimer.addEventListener('click', () => {
        if (confirm('Supprimer cette tâche ?')) supprimerTache(t.id);
      });
      // Ajout des boutons dans actions
      actions.appendChild(btnTerminer);
      actions.appendChild(btnSupprimer);
      // Construction finale du <li>
      li.appendChild(span);
      li.appendChild(actions);
      ulEl.appendChild(li);
    });
  }

  updateCompteurs();
}

function updateCompteurs() {
  const terminees = taches.filter(t => t.terminee).length;
  const total = taches.length;
  compteurEnCoursEl.textContent = `En cours : ${total - terminees}`;
  compteurTermineesEl.textContent = `Terminées : ${terminees}`;
}
// Sauvegarde des tâches dans localStorage
//JSON.stringify / JSON.parse convertissent entre tableau JS et chaîne pour le stockage.
function saveToStorage() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(taches));
  } catch (e) {
    console.error('Erreur sauvegarde localStorage', e);
  }
}
//Chargement des tâches depuis localStorage 
function loadFromStorage() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) { taches = []; return; }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) taches = parsed;
    else taches = [];
  } catch (e) {
    console.error('Erreur lecture localStorage', e);
    taches = [];
  }
}
