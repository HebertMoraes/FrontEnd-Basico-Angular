
let rowNumber = 0;

let dataBaseOfTable = {
    "dateHour": "horaExemplo1",
    "location": "locationExemplo1",
    "biome": "biomeExemplo1"
}
let inEdit = false;

function adicionaLinha(idTabela) {

    if (!inEdit) {
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
        // celula2.innerHTML = dataBaseOfTable["dateHour"];
        // celula3.innerHTML = dataBaseOfTable["location"];
        // celula4.innerHTML = dataBaseOfTable["biome"];

        celula2.innerHTML = `<input type='text'>`;
        celula3.innerHTML = `<input type='text'>`;
        celula4.innerHTML = `<input type='text'>`;
        // celula5.innerHTML = "<button id='idBtnEdit' onclick='editRow(this)'>Salvar</button> <button onclick='removeRow(this)'>Remover</button>";
        celula5.innerHTML = `<div class="d-flex justify-content-evenly">
        <button type="button" class="btn btn-primary" id="idBtnEdit" onclick="editRow(this)">Salvar</button>
        <button type="button" class="btn btn-danger" onclick="removeRow(this)">Remover</button>
    </div>`;

        inEdit = true;
    }
}

function removeRow(cell) {
    var row = cell.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(row);
}

function editRow(btn) {

    if (!inEdit) {
        inEdit = true;

        var table = document.getElementById('tbl');
        for (var i = 0, row; row = table.rows[i]; i++) {

            rowOfButtonEdit = btn.parentNode.parentNode.parentNode;

            if (row == rowOfButtonEdit) {
                for (var j = 0, col; col = row.cells[j]; j++) {

                    if (col != row.cells[4]) {
                        if (col == row.cells[0]) {
                            col.innerHTML = rowNumber.toString();;
                        } else {
                            col.innerHTML = `<input type='text' value='${col.innerHTML}'>`;
                        }
                        //setar o botão de editar para confirmar edit
                        btn.innerHTML = "Confirmar";
                    }

                }
            }
        }
        //se já esta no inEdit, esperar a confirmação da alteração
    } else {

        var table = document.getElementById('tbl');
        for (var i = 0, row; row = table.rows[i]; i++) {

            rowOfButtonEdit = btn.parentNode.parentNode.parentNode;

            if (row == rowOfButtonEdit) {
                for (var j = 0, col; col = row.cells[j]; j++) {

                    if (col != row.cells[4]) {
                        // col.innerHTML = `<input type='text' value='${col.innerHTML}'>`;
                        if (col == row.cells[0]) {
                            col.innerHTML = rowNumber.toString();;
                        } else {
                            col.innerHTML = `<td> ${col.childNodes[0].value} </td>`;
                        }

                        //setar o botão de editar para confirmar edit
                        btn.innerHTML = "Editar";
                    }
                }
            }
        }
        inEdit = false;
    }

}

