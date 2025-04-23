// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function selects a random number depending on the user's choice.
 */
function randomNumber() {
  // random number
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // input
  const numberType = document.getElementById('option-positive').checked

  // process
  if (numberType == true) {
    // output
    document.getElementById('result').innerHTML = 'The random number is: ' + randomNumber
  } else {
    // output
    document.getElementById('result').innerHTML = 'The random number is: ' + (-1 * randomNumber)
  }
}