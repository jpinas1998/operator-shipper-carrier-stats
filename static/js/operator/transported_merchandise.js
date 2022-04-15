function drawTransportedMerchandise() {

    const source_data = JSON.parse(window.transported_merchandise);
    const color = Chart.helpers.color;

    let labels = [];
    let data = [];

    let i;
    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["nombre"]);
        data.push(source_data[i]["cant_vendida"]);
    }

    const barChartData = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de mercancías transportadas',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: data,
            barPercentage: 0.5,
            categoryPercentage: 0.7
        }]
    };

    const ctx = document.getElementById('transported-merchandise').getContext('2d');
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
                    text: 'Mercancías transportadas'
                }
            }
        }
    });
}