function drawShipperReceivedMoreMerchandise() {

    const data = JSON.parse(window.shipper_receive_more);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['issuerName']);
        stats.push(data[i]['cant_viajes'])
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
                    text: 'Transportistas que más contrato'
                }
            }
        }
    };

    const ctx = document.getElementById("shipper-transported-merchandise").getContext('2d');
    window.myPie = new Chart(ctx, config);
}