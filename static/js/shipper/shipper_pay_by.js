function drawShipperCost() {

    const carrier_pay_by_data = JSON.parse(window.shipper_pay_by_km_and_kg);

    const color = Chart.helpers.color;

    let labels = [];
    let pay_by_km = [];
    let pay_by_weight = [];

    let i
    for (i = 0; i < carrier_pay_by_data.length; i++) {
        labels.push(carrier_pay_by_data[i]["issuerName"]);
        pay_by_km.push(carrier_pay_by_data[i]["costos_dist"]);
        pay_by_weight.push(carrier_pay_by_data[i]["costos_peso"]);
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Pago por km',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: pay_by_km,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }, {
            label: 'Pago por kg',
            backgroundColor: color(window.chartColors.green_alpha).rgbString(),
            borderColor: window.chartColors.green,
            borderWidth: 1,
            data: pay_by_weight,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }]
    };

    const ctx = document.getElementById('shipper-pay-by-km-kg-chart-container').getContext('2d');
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
                    text: 'Pago por distancia y peso'
                }
            }
        }
    });
}