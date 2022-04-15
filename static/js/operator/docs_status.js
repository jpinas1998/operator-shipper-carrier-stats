function drawDocsStatus() {

    const data = JSON.parse(window.docs_status);

    let labels = [];
    let stats = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i]['stage_name']);
        stats.push(data[i]['cant'])
    }

    const config = {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [window.chartColors.green, window.chartColors.red, window.chartColors.yellow],
                data: stats,
                label: ''
            }],
            labels: labels
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Estado de los los documentos'
                }
            }
        }
    };

    const ctx = document.getElementById("docs-status-chart-container").getContext('2d');
    window.myPie = new Chart(ctx, config);
}