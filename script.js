let listeDeTache = ['donner à manger au chien','code ?','code code code']


// fonction d'ajout d'une tache
function ajoutTache(listeDeTache){
    let nouvelleTache = prompt("Description de la tache à ajouter :")
    listeDeTache.push(nouvelleTache)
    afficherListeDeTache(listeDeTache)
}

// Affiche la liste des taches présente dans le tableau listeDeTache
function afficherListeDeTache(listeDeTache){
    let zoneAffichage = document.getElementById("zoneAffichage")
    zoneAffichage.innerHTML = ""
    for (let i = 0; i < listeDeTache.length; i++) {
        zoneAffichage.innerHTML +=`Tache N° ${i} : ${listeDeTache[i]}<br>`
    }
}

//Supprime une tache donné du tableau ListeDeTache
function supprimerTache(listeDeTache){
    let numeroTacheASupprimer = prompt("Quelle tache souhaitez vous supprimez ?")
    numeroTacheASupprimer = parseInt(numeroTacheASupprimer)

    // On vérifie si l'entré utilisateur est bien un nombre
    if (isNaN(numeroTacheASupprimer)) {
        console.log("Vous n'avez pas saisi un numéro")
        return
    }

    // On vérifie si l'entré utilisateur est bien un numéro valide
    if (numeroTacheASupprimer < 0 || numeroTacheASupprimer > listeDeTache.length){
        console.log("Le numéro de tache n'est pas valide")
        return
    }

    listeDeTache.splice(numeroTacheASupprimer,1)
}

function clicButtonReveal(){
    let buttonReveal = document.getElementById("afficher")
    buttonReveal.addEventListener("click", ()=> {
        afficherListeDeTache(listeDeTache)
    })
}

function clicButtonAdd(){
    let buttonAdd = document.getElementById("add")
    buttonAdd.addEventListener("click", () =>{
        ajoutTache(listeDeTache)
    })
}

function clicButtonRemove(){
    let buttonRemove = document.getElementById("remove")
    buttonRemove.addEventListener("click", () => {
        supprimerTache(listeDeTache)
        afficherListeDeTache(listeDeTache)
    })
}

//Fonction de booucle principal comprenant les fonctions d'attente d'événements
function bouclePrincipal(){
    clicButtonReveal()
    clicButtonAdd()
    clicButtonRemove()
}