/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated version of the row
const updatedRow: RowElement = { ...row, age: 23 };

// Update and delete the row using CRUD functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
