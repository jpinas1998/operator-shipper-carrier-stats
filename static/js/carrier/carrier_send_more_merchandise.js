function drawCarrierSendMoreMerchandise() {

    const data = JSON.parse(window.send_more_merchandise);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['addreseeName']);
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
                    text: 'Viajes por cliente'
                }
            }
        }
    };

    const ctx = document.getElementById("carrier-travel-most").getContext('2d');
    window.myPie = new Chart(ctx, config);
}