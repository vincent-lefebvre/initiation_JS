// je vérifie ma connection au fichier html
//alert('ok js')

// Les opérateurs arithmétiques //

// L'addition

// 1 - Déclaration et affectations de plusieurs variables :

// var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

//l'addition de nb1 & nb2 avec l'opérateur "+"
resultat = nb1 + nb2;
console.log(resultat);

//La soustraction de nb1 & nb2 avec l'opérateur "-"
resultat = nb1 - nb2;
console.log(resultat);

//La division de nb1 & nb2 avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

//La multiplication de nb1 & nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);

/* le modulo correspond au reste de la division.
 le modulo de nb1 & nb2 avec l'opérateur "%" */
resultat = nb1 % nb2
console.log(resultat);

// deuxième variante
nb1 += 5; //ce qui équivalent à écrire nb1 = nb1 + 5

//exercice1
var A = 1;
var B = A + 3; //retourne 4 dans la console
console.log(B);

//exercice 2
var A = 5;
var B = 3;
var C = A + B; //retourne 8
A = 2;
C = B - A; //retourne 1

//exercice 3
var A = 5;
var B = A + 4;//retourner 9
A = A + 1;//retourne 6 (5+1)
B = A - 4;//retourne 2 (6-2)

//exercice 4
var A = 15;
var B = 122;
var C = A; // console.log(C) => retourne 15
A = 7;