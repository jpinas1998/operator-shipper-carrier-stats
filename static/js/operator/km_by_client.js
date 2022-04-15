function drawKmByClient() {

    const source_data = JSON.parse(window.km_by_issuer);
    const color = Chart.helpers.color;

    let labels = [];
    let data = [];

    for (let i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["issuerName"]);
        data.push(source_data[i]["km_recorridos"]);
    }

    const barChartData = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de km',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: data,
            barPercentage: 0.5,
            categoryPercentage: 1
        }]
    };

    const ctx = document.getElementById('km-by-client').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Km recorridos para cada cliente'
                }
            }
        }
    });
}