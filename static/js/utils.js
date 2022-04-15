function randomNotUsedColor(usedColor, colorList) {
    if (usedColor.length !== colorList.length) {
        const selectedColor = colorList[Math.floor(Math.random() * colorList.length)];
        if (!usedColor.includes(selectedColor)) {
            usedColor.push(selectedColor)
            return selectedColor;
        } else {
            return Math.floor(Math.random() * 16777215).toString(16);
        }
    }
    return Math.floor(Math.random() * 16777215).toString(16);
}

window.chartColors = {
    red: 'rgb(212, 0, 59)',
    red_alpha: 'rgb(212, 0, 59, 0.5)',

    orange: 'rgb(255, 159, 64)',
    orange_alpha: 'rgb(255, 159, 64, 0.5)',

    yellow: 'rgb(255, 205, 86)',
    yellow_alpha: 'rgb(255, 205, 86, 0.5)',

    green: 'rgb(0, 232, 38)',
    green_alpha: 'rgb(0, 232, 38, 0.5)',

    blue: 'rgb(54, 162, 235)',
    blue_alpha: 'rgb(54, 162, 235, 0.5)',

    purple: 'rgb(153, 102, 255)',
    purple_alpha: 'rgb(153, 102, 255, 0.5)',

    grey: 'rgb(201, 203, 207)',
    grey_alpha: 'rgb(201, 203, 207, 0.5)'
};

window.chartColorsList = [
    window.chartColors.blue,
    window.chartColors.purple,
    window.chartColors.red,
    window.chartColors.grey,
    window.chartColors.green,
    window.chartColors.yellow,
    window.chartColors.orange,
    'rgb(12, 232, 227)',
    'rgb(56, 12, 123)',
    'rgb(212, 231, 12)'
];

window.chartColorsListAlpha = [
    window.chartColors.blue_alpha,
    window.chartColors.purple_alpha,
    window.chartColors.red_alpha,
    window.chartColors.grey_alpha,
    window.chartColors.green_alpha,
    window.chartColors.yellow_alpha,
    window.chartColors.orange_alpha,
    'rgb(12, 232, 227, 0.5)',
    'rgb(56, 12, 123, 0.5)',
    'rgb(212, 231, 12, 0.5)'
];

