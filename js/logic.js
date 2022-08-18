function addValue(newValue) {
    if (document.getElementById('screen').innerText == 0) {
        document.getElementById('screen').innerText = '';
        document.getElementById('screen').innerText += newValue;

    }
    else {
        document.getElementById('screen').innerText += newValue;
    }

}

function clearScreen() {
    document.getElementById('screen').innerText = '0';
    document.getElementById('result').innerText = '0';
}

function getResult() {

    try {
        const eqation = document.getElementById('screen').innerText;
        const result = eval(eqation);
        document.getElementById('result').innerText = result;
        document.getElementById('screen').innerText = result;

    }
    catch (err) {
        document.getElementById('result').innerText = 'error';
    }

}

function eraseCharacter() {
    if (document.getElementById('screen').innerText.length == 1) {
        document.getElementById('screen').innerText = '0';
    }
    else {
        document.getElementById('screen').innerText = document.getElementById('screen').innerText.slice(0, -1);
    }


}