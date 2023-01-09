// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-A5-JS/sw.js", {
    scope: "/ICS20-A5-JS/",
  })
}

const n1 = parseInt(document.getElementById("num_1").value)
const n2 = parseInt(document.getElementById("num_2").value)
let lcm = 0

if (n1 > n2) {
  let bigger_num = n1
  let smaller_num = n2
  while (bigger_num % smaller_num !== 0) {
    lcm = lcm + bigger_num
  }
} else if (n1 == n2) {
  lcm = lcm + n1
} else {
  let bigger_num = n2
  let smaller_num = n1
  while (bigger_num % smaller_num !== 0) {
    lcm = lcm + bigger_num
  }
}
function calculate() {
  // output
  document.getElementById("answer").innerHTML =
    "the lowest common multiple is:" + lcm + " ."
}
