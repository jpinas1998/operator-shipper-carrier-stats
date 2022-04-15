function setCarrierGeneralStats() {

    const source_data = JSON.parse(window.carrier_general_stats);

    document.getElementById('pay').innerHTML = source_data["factura"];
    document.getElementById('merchandise').innerHTML = source_data["cant_mercancia"];
    document.getElementById('weight').innerHTML = source_data["peso"] + ' kg';
    document.getElementById('distance').innerHTML = source_data["km_recorridos"] + ' km';
    document.getElementById('trips').innerHTML = source_data["cant_viajes"];
}