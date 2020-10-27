'use strict';








export let names = ['Severin', 'Alex', 'Baptiste', 'Alain', 'Marie', 'Leslie'] 
export const newArraysNumber = [100, 200, 300, 400]
export const moviesArray = new Array('The Revenant',
                                     'Avengers Endgame',
                                     'Spider-Man',
                                     'Batman Begins',
                                     'James Bond 007 Casino Royale',
                                     'Man of Steel')

export const mixedArray = new Array(44, false, null, undefined, {
    firstName: 'Antony',
    lastName: 'Mboukou'
})

export let body = document.getElementsByTagName('body')[0]
export let newh1 = document.createElement('h1')
newh1.className = 'myh1'
newh1.innerText = 'Welcome everyone in Panel'

body.appendChild(newh1)