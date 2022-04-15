function drawShipperMostTravelByZipCode() {

    const source_data = JSON.parse(window.shipper_most_traveled_zipcode);
    const color = Chart.helpers.color;

    let labels = [];
    let data = [];

    for (let i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["identifier"]);
        data.push(source_data[i]["cant"]);
    }

    const barChartData = {
        labels: labels,
        datasets: [{
            label: 'Número de viajes',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: data,
            barPercentage: 0.5,
            categoryPercentage: 1
        }]
    };

    const ctx = document.getElementById('shipper-most-travel-by-zipcode-chart-container').getContext('2d');
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
                    text: 'Códigos postales dónde he enviado más viajes'
                }
            }
        }
    });
}