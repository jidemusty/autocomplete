import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from "./AutoComplete";
import { getData } from "./data";

const rootElement = document.getElementById("root");
ReactDOM.render(<AutoComplete suggestions={[
    "Da Ke",
    "Nathan Feger",
    "Ben Herndon",
    "Seamus Martin",
    "Jose Franny Rodriguez",
    "Karen Aragon",
    "Erik Vinicius Gomez",
    "Maiana Alebrant",
    "Brittani Slimp",
    "Rainier Sales",
    "Matheus Nunes",
    "Maianne Riberio"
]} />, rootElement);