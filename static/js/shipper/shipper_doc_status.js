function drawShipperDocStatus() {

    const data = JSON.parse(window.shipper_doc_status);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['stage_name']);
        stats.push(data[i]['cant'])
    }

    const config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: stats,
                backgroundColor: [window.chartColors.green, window.chartColors.red, window.chartColors.yellow],
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
                    text: 'Estados  de los documentos'
                }
            }
        }
    };

    const ctx = document.getElementById("shipper-doc-status-chart-container").getContext('2d');
    window.myPie = new Chart(ctx, config);
}