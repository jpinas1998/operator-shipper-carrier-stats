window.onload = function () {
    setShipperData();
    drawShipperReceivedMoreMerchandise();
    drawShipperDocTypes();
    drawShipperDocStatus();
    setShipperGeneralStats();

    drawShipperStatsByCarrier();
    drawShipperStatsByVehicularConf();
    drawShipperStatsByDay();
    drawShipperStatsByMerchandiseByDay();
    drawShipperStatsByDistanceByDay();
    drawShipperStatsByPayByDay();
    drawShipperStatsByWeightByDay();

    drawShipperMostTravelByZipCode();
    drawShipperMostTravelByState();
    drawShipperMostTravelByMunicipality();

    drawShipperCost();
    drawShipperDangerousMaterial();
}