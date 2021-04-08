
var index = -1;

function update() {
    var url = 'https://corona.lmao.ninja/v2/countries/Germany';
    var noise = new Audio('soundscapes/ocean_waves.mp3');
    noise.volume = 0.1;
    noise.play();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            switch (index) {
                case 0:
                    document.getElementById("Output").innerHTML = "Infiziert ";
                    document.getElementById("Value").innerHTML = data.active;
                    break;
                case 1:
                    document.getElementById("Output").innerHTML = "Genesen ";
                    document.getElementById("Value").innerHTML = data.recovered;
                    break;
                case 2:
                    document.getElementById("Output").innerHTML = "Intensiv Fälle ";
                    document.getElementById("Value").innerHTML = data.critical;
                    break;
                case 3:
                    document.getElementById("Output").innerHTML = "Gestorben ";
                    document.getElementById("Value").innerHTML = data.deaths;
                    break;
            }
            console.log("Refreshed everything!");
        });
}

function next() {
    switch (index) {
        case 0:
            index++;
            break;
        case 1:
            index++;
            break;
        case 2:
            index++;
            break;
        default:
            index = 0;
            break;
    }
    update()
}

function autoRefresh( t ) {
    setTimeout("next();autoRefresh(25000)", t);
}

next()