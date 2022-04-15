function drawDangerousMaterial() {

    const source_data = JSON.parse(window.dangerous_material);

    const color = Chart.helpers.color;

    let i;
    let data_dm = [];
    let data_no_dm = [];
    let labels = [];

    for (i = 0; i < source_data.length; i++) {
        labels.push(source_data[i]["issuerName"]);
        data_no_dm.push(source_data[i]["gan_x_km_no_dm"])
        data_dm.push(source_data[i]["gan_x_km_dm"])
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Pago por km transportando mercancía peligrosa',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: data_dm,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
        }, {
            label: 'Pago por km sin transportar mercancía peligrosa',
            backgroundColor: color(window.chartColors.green_alpha).rgbString(),
            borderColor: window.chartColors.green,
            borderWidth: 1,
            data: data_no_dm,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
        }]
    };

    const ctx = document.getElementById('dangerous-material-chart-container').getContext('2d');
    window.myBoxPlot = new Chart(ctx, {
        type: 'boxplot',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Pago del km por cliente con y sin mercancía peligrosa'
                }
            }
        }
    });
}