// alert('ok js');
// // Déclarer un tableau indexé :
//     //a)
//     var monTableau = [];
//     // console.log(monTableau);
//     // //b)
//     var myArray = new Array;
//     console.log(myArray);
//     // //myArray et monTableau sont des tableaux qui peuvent contenir plusieurs informations

//     // //affecter des valeurs au tableau, plusieurs méthodes :
//     ////a)
//     var nosPrenoms = ["Christian","Philippe","Mamadou","Zitouni"];
//     console.log(nosPrenoms);
//     // //b)
// // a)
// var monTableau = []; // alt gr + 5
// console.log(monTableau);
// // b)
// var myArray = new Array;
// console.log(myArray);
// // myArray et monTableau sont des tableaux qui peuvent contenir plusieurs information

// //Affecter des valeurs au tableau, plusieurs méthode :
// //a) 
// var nosPrenoms = ["Christian", "Philippe", "Mamadou", "Zitouni", "Sébastien", 18, 20];
// console.log(nosPrenoms);
// //b) 
// monTableau[0] = "Christian";
// monTableau[1] = "Mamadou";
// monTableau[2] = "Philippe";
// monTableau[3] = "Sébastien";
// monTableau[4] = "Zitouni";
// console.log(monTableau);

// // -- Déclarer et affecter des valeurs à un objet.

// var Coordonnee = {
//     prenom: "Hugo",
//     nom: "LIEGEARD",
//     age: 82
// };
// console.clear();//permet d'effacer les ligne de débug qui précède le console.clear()
// console.log(Coordonnee);// j'affiche toute les informations de mon tableau
// console.log(Coordonnee['prenom']);// je n'affiche que le prénom
// console.log(Coordonnee.nom);// je n'affiche que le nom

// // *-- on va créer 2 tableaux indexé

// var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
// var listeDeNom = ["MAMA", "BENALLAL", "LIEGEARD"];
// var Annuaire = [listeDePrenom, listeDeNom];

// console.log(Annuaire);
// document.write();// fonction native de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur console

// document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
// document.write("<hr>");
// document.write(Annuaire[0][0]);
// document.write(" ");
// document.write(Annuaire[1][1]);

//     console.clear();//permet d'effacer les lignes de debug qui précède le console.clear()
//     console.log(Coordonee);//j'affiche toute les infos de mon tableau
//     // // Declarer et affecter des valeurs à un objet.


//     var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
//     var listeDeNom = ["MAMA","BENALLAL","LIEGEARD"];
//     var Annuaire = [listeDePrenom, listeDeNom];

//     console.log(Annuaire);
//     document.write(Annuaire[0][2] + "" + Annuaire[1][2]);//fonction native de JS qui permet d'inscrire un résultat directement sur la page html
// var array3Dimension = [
//     {
//         prenom: "Hugo",
//         nom: "LIEGEARD",
//         coordonnees: {
//             email: "hugo.liegeard@lepoles.com",
//             tel: {
//                 fixe: "0596 108 328",
//                 fax: "0596 108 632",
//                 port: {
//                     prive: "07 83 97 10 15",
//                     pro: "07 83 97 15 15"
//                 }
//             },
//             adresse: {
//                 ville: "DUCOS",
//                 cp: "97224",
//                 region: "Martinique",
//                 pays: {
//                     code: "FR",
//                     nom: "FRANCE"
//                 }
//             }
//         }
//     }//fermeture 1er
// ];// fin array3Dimension
// console.log(array3Dimension);
// console.log(array3Dimension[0].coordonnees.email)
// Réduire

// ajouter un élément // pour ajouter un élément à mon tableau, je fais appel à la fonction push


// var couleur = ['rouge', 'jaune', 'vert'];
//console.clear();
//console.log(couleur);
//console.log(couleur.length); //length me permet d'afficher sur ma console le nombre d'éléments que contient mon tableau

// couleur.pop();
// couleur.shift();
// console.log(couleur);
// console.log()


