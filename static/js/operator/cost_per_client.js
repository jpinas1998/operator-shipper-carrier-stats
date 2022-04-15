function drawCostPerClient() {

    const pay_per_client = JSON.parse(window.cost_per_client);
    const weight_and_pay_by_km = JSON.parse(window.pay_by_weight);

    const color = Chart.helpers.color;

    let labels = [];
    let pay_per_client_data = [];
    let weight_and_pay_by_km_data = [];

    let i;
    for (i = 0; i < pay_per_client.length; i++) {
        labels.push(pay_per_client[i]["issuerName"]);
        pay_per_client_data.push(pay_per_client[i]["costos"]);
    }

    for (i = 0; i < weight_and_pay_by_km.length; i++) {
        weight_and_pay_by_km_data.push(weight_and_pay_by_km[i]["costos"]);
    }


    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Cuánto me pagan por km',
            backgroundColor: color(window.chartColors.blue_alpha).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: pay_per_client_data,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }, {
            label: 'Cuánto me pagan por kg',
            backgroundColor: color(window.chartColors.green_alpha).rgbString(),
            borderColor: window.chartColors.green,
            borderWidth: 1,
            data: weight_and_pay_by_km_data,
            barPercentage: 0.7,
            categoryPercentage: 0.8,
        }]
    };

    const ctx = document.getElementById('cost-per-client-chart-container').getContext('2d');
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
                    text: 'Pago por cliente'
                }
            }
        }
    });
}