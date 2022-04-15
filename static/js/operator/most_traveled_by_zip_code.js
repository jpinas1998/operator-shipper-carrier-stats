function drawMostTraveledPlacedByZipCode() {

    const source_data = JSON.parse(window.most_traveled_by_zip_code);

    const color = Chart.helpers.color;

    let labels = [];
    let data = [];

    let i;
    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["identifier"]);
        data.push(source_data[i]["cant"]);
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de viajes',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: data,
            barPercentage: 0.8,
            categoryPercentage: 0.7,
        }]
    };

    const ctx = document.getElementById('most-traveled-by-zipcode-chart-container').getContext('2d');
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
                    text: 'Zonas a las cuáles más viajo'
                }
            }
        }
    });
}