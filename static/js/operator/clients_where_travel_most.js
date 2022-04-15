function drawTravelHireMoreChart() {

    const data = JSON.parse(window.clients_travel_more);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['addreseeName']);
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
                    text: 'Clientes para los cuáles realicé más viajes'
                }
            }
        }
    };

    const ctx = document.getElementById("client-hire-most").getContext('2d');
    window.myPie = new Chart(ctx, config);
}