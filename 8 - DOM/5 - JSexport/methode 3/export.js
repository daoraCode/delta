'use strict';

const severin = "je suis l'exporté par défaut";
// l'export par defaut ne peut s'utiliser qu'une seule fois par fichier

export default severin;

export const arraysNumber = [1, 4, 9, 90, 767, 21, 67, 32, 91, 2]
export const newArraysNumber = [100, 200, 300, 400]
export const fruitsArray = new Array('pomme', 
                                     'abricot', 
                                     'fraise', 
                                     'raisin', 
                                     'banane', 
                                     'poire',
                                     'framboise')

export const mixedArray = new Array(29, false, null, undefined, {
    firstName: 'Severin',
    lastName: 'Mboukou'
})