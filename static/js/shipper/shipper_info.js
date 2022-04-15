function setShipperData() {

    const source_data = JSON.parse(window.shipper_info);

    document.getElementById('shipper-name').innerHTML = source_data["nombre"];
    document.getElementById('shipper-rfc').innerHTML = source_data["rfc"];
}