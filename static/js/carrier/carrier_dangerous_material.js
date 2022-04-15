function drawCarrierDangerousMaterial() {

    const carrier_pay_by_data = JSON.parse(window.carrier_dangerous_material);

    const color = Chart.helpers.color;

    let labels = [];
    let gan_dm = [];
    let gan_no_dm = [];

    let i
    for (i = 0; i < carrier_pay_by_data.length; i++) {
        labels.push(carrier_pay_by_data[i]["addreseeName"]);
        gan_dm.push(carrier_pay_by_data[i]["gan_x_km_dm"]);
        gan_no_dm.push(carrier_pay_by_data[i]["gan_x_km_no_dm"]);
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Ganancia por km transportando material peligroso',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: gan_dm,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }, {
            label: 'Ganancia por km sin transportar material peligroso',
            backgroundColor: color(window.chartColors.green_alpha).rgbString(),
            borderColor: window.chartColors.green,
            borderWidth: 1,
            data: gan_no_dm,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }]
    };

    const ctx = document.getElementById('carrier-dangerous-material-chart-container').getContext('2d');
    window.myBar = new Chart(ctx, {
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
                    text: 'Pago por distancia y peso con y sin material peligroso'
                }
            }
        }
    });
}