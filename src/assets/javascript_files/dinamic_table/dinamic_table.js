let sortDirection = false;

function LoadTableData(eventData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let event of eventData) {
        dataHtml += `<tr><td>${event.location}</td><td>${event.biome}</td></tr>`
    }
    console.log(document);
}

