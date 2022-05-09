
let rowNumber = 0;

let dataBaseOfTable = {
    "dateHour": "horaExemplo1",
    "location": "locationExemplo1",
    "biome": "biomeExemplo1"
}

function adicionaLinha(idTabela) {

    rowNumber++;

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    celula1.innerHTML = rowNumber.toString();
    celula2.innerHTML = dataBaseOfTable["dateHour"];
    celula3.innerHTML = dataBaseOfTable["location"];
    celula4.innerHTML = dataBaseOfTable["biome"];
    celula5.innerHTML = "<button id='idBtnEdit' onclick='editRow(this)'>Editar</button> <button onclick='removeRow(this)'>Remover</button>";
}

function removeRow(cell) {
    var row = cell.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(row);
}

function editRow(btn) {

    //row Index ta pegando o número do index, e não o element Row
    // var row = cell.parentNode.parentNode.rowIndex;

    // for (var i = 0, cellOfRow; cellOfRow = row.cells[i]; i++) {

    //     console.log(cellOfRow);

    //     // cellOfRow.innerHTML = "<input type='text'>"
    //     cellOfRow.style.display = "none";
    // }

    var table = document.getElementById('tbl');
    for (var i = 0, row; row = table.rows[i]; i++) {
        
        rowOfButtonEdit = btn.parentNode.parentNode;
        
        if (row == rowOfButtonEdit) {
            for (var j = 0, col; col = row.cells[j]; j++) {

                if (col != row.cells[4]) {
                    col.innerHTML = `<input type='text' value='${col.innerHTML}'>`
                }
                
            }
        }

    }
}

