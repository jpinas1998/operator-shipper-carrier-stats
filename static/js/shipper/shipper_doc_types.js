function drawShipperDocTypes() {

    const data = JSON.parse(window.shipper_doc_types);

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
                data: stats,
                backgroundColor: window.chartColorsList,
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
                    text: 'Tipos de documento'
                }
            }
        }
    };

    const ctx = document.getElementById("shipper-docs-type-chart-container").getContext('2d');
    window.myPie = new Chart(ctx, config);
}