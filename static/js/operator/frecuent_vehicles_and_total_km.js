function drawFrequentsAndDistanceVehicules() {

    const source_data = JSON.parse(window.frecuent_vehicles_and_total_km);

    const color = Chart.helpers.color;

    let labels = [];
    let frequency = [];
    let distance = [];

    let i;
    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["chapa"]);
        frequency.push(source_data[i]["cant_viajes"]);
        distance.push(source_data[i]["km_recorridos"]);
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de viajes',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: frequency,
            barPercentage: 0.8,
            categoryPercentage: 0.7,
            yAxisID: 'y',
        }, {
            label: 'Km recorridos',
            backgroundColor: color(window.chartColors.green_alpha).rgbString(),
            borderColor: window.chartColors.green,
            borderWidth: 1,
            data: distance,
            barPercentage: 0.8,
            categoryPercentage: 0.7,
            yAxisID: 'y1',
        }
        ]
    };

    const ctx = document.getElementById('frequent-and-distance-vehicles-chart-container').getContext('2d');
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
                    text: 'Datos de los vehículos'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }
            }
        }
    });
}