function drawTravelMoreChart() {

    const data = JSON.parse(window.clients_hire_me_more);

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
                    text: 'Clientes que más me contratan'
                }
            }
        }
    };

    const ctx = document.getElementById("client-travel-most").getContext('2d');
    window.myPie = new Chart(ctx, config);
}