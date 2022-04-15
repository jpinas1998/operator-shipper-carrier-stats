function drawCarrierDocType() {

    const data = JSON.parse(window.carrier_doc_types);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['docType']);
        stats.push(data[i]['cant'])
    }

    const config = {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [window.chartColors.green, window.chartColors.red, window.chartColors.yellow],
                data: stats,
                label: ''
            }],
            labels: labels
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Tipos de documentos'
                }
            }
        }
    };

    const ctx = document.getElementById("carrier-doc-type").getContext('2d');
    window.myPie = new Chart(ctx, config);
}