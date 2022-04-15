function drawCarrierIdleLicence() {

    const source_data = JSON.parse(window.idle_licence);

    const color = Chart.helpers.color;

    let labels = [];
    let licence = [];

    let i;
    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["id"]);
        licence.push(source_data[i]["cant_viajes"]);
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Cantidad de viajes',
                backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: licence,
                barPercentage: 0.8,
                categoryPercentage: 0.7,
            }
        ]
    };

    const ctx = document.getElementById('carrier-idle-licence-chart-container').getContext('2d');
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
                    text: 'Vehículos ociosos'
                }
            },
        }
    });
}