function drawShipperStatsByCarrier() {

    const source_data = JSON.parse(window.shipper_stats_by_carrier);

    const color = Chart.helpers.color;

    let labels = [];
    let frequency = [];
    let distance = [];
    let weight = [];
    let price = [];
    let merchandise = [];

    let i;
    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["issuerName"]);
        price.push(source_data[i]["factura"]);
        merchandise.push(source_data[i]["cant_mercancia"]);
        frequency.push(source_data[i]["cant_viajes"]);
        weight.push(source_data[i]["peso"]);
        distance.push(source_data[i]["km_recorridos"]);
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Cantidad de viajes',
                backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: frequency,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }, {
                label: 'Km recorridos',
                backgroundColor: color(window.chartColors.green_alpha).rgbString(),
                borderColor: window.chartColors.green,
                borderWidth: 1,
                data: distance,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }, {
                label: 'Peso transportado',
                backgroundColor: color(window.chartColors.red_alpha).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: weight,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }, {
                label: 'Cantidad de mercancía transportada',
                backgroundColor: color(window.chartColors.yellow_alpha).rgbString(),
                borderColor: window.chartColors.yellow,
                borderWidth: 1,
                data: merchandise,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }, {
                label: 'Pago realizado',
                backgroundColor: color(window.chartColors.orange_alpha).rgbString(),
                borderColor: window.chartColors.orange,
                borderWidth: 1,
                data: price,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }
        ]
    };

    const ctx = document.getElementById('shipper-stats-by-carrier-chart-container').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Estadísticas de los transportistas'
                }
            },
        }
    });
}