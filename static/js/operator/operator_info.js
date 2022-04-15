function setOperatorData() {

    const source_data = JSON.parse(window.operator_data);

    document.getElementById('operator-name').innerHTML = source_data["nombre"];
    document.getElementById('operator-rfc').innerHTML = source_data["rfc"];
}