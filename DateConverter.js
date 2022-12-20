function gSubmit() {
    let dd = parseInt(document.getElementById('gDay').value);
    let mm = parseInt(document.getElementById('gMon').value);
    let year = parseInt(document.getElementById('gYear').value);
    let resultBox = document.getElementById('gResult');

    let dateConverter = new MyDate(true);
    dateConverter.gSetDate(dd, mm, year);
    let x = dateConverter.gGetDay();
    let y = dateConverter.gGetMonth();
    let z = dateConverter.gGetYear();

    let xyz = dateConverter.dayRecognizer(true);

    let dddddd = x + "-" + y + "-" + z;
    if (dd === null || mm === null || year === null) {
        resultBox.value = "Input is not well-defined";
    } else if (mm > 12 || mm < 1 || dd > 31 || dd < 1 ) {
        resultBox.value = "Invalid input";
    } else {
        resultBox.value = x + "-" + y + "-" + z;// + ", " + xyz;
    }
    // console.log(dddddd)
}

function bSubmit() {
    let dd = parseInt(document.getElementById('bDay').value);
    let mm = parseInt(document.getElementById('bMon').value);
    let year = parseInt(document.getElementById('bYear').value);
    let resultBox = document.getElementById('bResult');

    let dateConverter = new MyDate(false);
    dateConverter.bSetDate(dd, mm, year);
    let x = dateConverter.bGetDay();
    let y = dateConverter.bGetMonth();
    let z = dateConverter.bGetYear();

    let tmp = new MyDate(true);
    tmp.gSetDate(x, y, z);
    let xyz = tmp.dayRecognizer(true);

    if (dd === "" || mm === "" || year === "") {
        resultBox.value = "Input is not well-defined";
    } else if (mm > 12 || mm < 1 || dd > 31 || dd < 1 ) {
        resultBox.value = "Invalid input";
    } else {
        resultBox.value = x + "-" + y + "-" + z;// + ", " + xyz;
    }
    // console.log(dddddd)
}