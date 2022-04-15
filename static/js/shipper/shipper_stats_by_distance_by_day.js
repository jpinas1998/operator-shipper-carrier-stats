function drawShipperStatsByDistanceByDay() {
    const source_data = JSON.parse(window.shipper_merchandise_by_distance_by_day);

    let labels = [];
    let usedColors = []
    let issuers_data = {}

    let i;
    for (i = 0; i < source_data.length; i++) {
        let date = source_data[i]["date"]
        let node_data = source_data[i]["data"]

        labels.push(date)
        for (let j = 0; j < node_data.length; j++) {
            const issuerName = node_data[j]["issuerName"]
            if (!(issuerName in issuers_data)) {
                issuers_data[issuerName] = []
            }
            issuers_data[issuerName].push(node_data[j]["km_recorridos"])
        }
    }

    let dataset = []
    Object.entries(issuers_data).forEach(([issuerName, amounts]) => {
        let color = randomNotUsedColor(usedColors, window.chartColorsList);
        dataset.push({
            label: issuerName,
            backgroundColor: color,
            borderColor: color,
            data: amounts,
        })
    });

    const chartData = {
        labels: labels,
        datasets: dataset
    };

    const ctx = document.getElementById('shipper-stats-by-distance-by-day-chart-container').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distancia recorrida por transportista'
                }
            },
        }
    });
}