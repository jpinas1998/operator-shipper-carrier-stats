function setCarrierData() {

    const source_data = JSON.parse(window.carrier_info);

    document.getElementById('carrier-name').innerHTML = source_data["issuerName"];
    document.getElementById('carrier-rfc').innerHTML = source_data["issuer"];
}