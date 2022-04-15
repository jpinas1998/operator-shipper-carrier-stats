function drawCarrierMostTravelByState() {

    const source_data = JSON.parse(window.most_travel_by_state);
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

    const ctx = document.getElementById('carrier-travel-state-chart-container').getContext('2d');
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
                    text: 'Estados a los cuáles más he viajado'
                }
            }
        }
    });
}