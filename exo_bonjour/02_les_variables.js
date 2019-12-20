/***************
 Les variables
***************/

// 1.je fais une alerte pour vérifier que mon fichier JS est bien relié à mon html
// alert("js ok")

/* Lorsque l'on a besoin de de stocker une information on utilise une variable. Une variable peut être interprétée comme une boite dans laquelle nous allons stocker une information.

IL EXISTE PLUSIEURS TYPES DE VARIABLES */

// pour déclarer une variable (la créer) :
var prenom ;

// pour lui affecter une valeure ; 
var prenom = 'Alpha' ;

// Affiche la valeur d'une variable : 
// a- pour tester une valeur on ouvre la console du navigateur (F12) puis on écrit le nom de la variable à droite des ">>" puis ENTER

// b- Afficher une alerte avec la variable
alert (prenom) ;

// c- On écrit dans le script
console.log (prenom) ;

//Il est possible d'écrire plusieurs variables sur une seule ligne : 
var nb1, nb2, nb3;

//et d'y affecter des valeurs :
nb1 = 1;
nb2 = 50;
nb3 = 220;

//une instruction se termine TOUJOURS par un point virgule

// Le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de ponctuation (espace, accent...)

///  /!\  LE JS EST SENSIBLE A LA CASSE /!\  \\\ 

// mavariable différent de maVariable ou ma_variable

//écriture snake case => ma_variable
//écriture camelCase => maVariable

/*******************
 * LES TYPES DE VARIABLES
 *******************/

 // typeof, me permet de connaitre le type de ma variable:
 console.log(typeof prenom)

 //Déclaration et affectation d'un nombre : 
 var age = 40;
 console.log(typeof age)

 //Les variables de type FLOAT
 var uneDecimal = -2.984;
 console.log(typeof uneDecimal)

//  les variables de type Booléens (boolean)
var unBoolean = false; // true
console.log(unBoolean); // retourne false
console.log(typeof unBoolean); //retourne boolean

// LES CONSTANTES

//La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs. Une constante ne peut pas être déclarée à nouveau.

// const HOST ="localhost";
// const USER ="root";
// const PASSWORD ="mysql";
/* 
Donc il est impossible de faire cela : 
        const USER = "Alpha";
La console me retournera => SyntaxError: redeclaration of const USER
*/

// var unNombre = "24";
// console.log (unNombre) ;// affiche 24
// console.log (typeof unNombre);// retourne string (chaine de caractère)

// pour convertir le string (chaine de caractères) "24" en number :
// unNombre = parseFloat (unNombre);
// console.log(unNombre);//affiche 24
// console.log(typeof unNombre);//retourne number