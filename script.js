const select = document.querySelector("#slctEixoH");
txtTitulo = document.getElementById("txtTitulo")
txtLegenda = document.getElementById("txtLegenda")
arrayEixoH = [];
arrayValores = [];
txtEixoH = document.getElementById("txtEixoH")
txtValores = document.getElementById("txtValores")
txtIndex = document.getElementById("txtIndex")
txtEditarEixoH = document.getElementById("txtEditarEixoH")
txtEditarValores = document.getElementById("txtEditarValores")


const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: "Legenda",
            data: [1, 2],
            borderWidth: 1
        },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Titulo'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },

    }
});


function adicionar() {

    legenda = txtLegenda.value

    arrayEixoH.push(txtEixoH.value)
    arrayValores.push(txtValores.value)


    atualizarSelect()

    chart.data = {
        labels: arrayEixoH,
        datasets: [{
            label: legenda,
            data: arrayValores,
            borderWidth: 1
        },
        ]
    };

    chart.update();

    txtEixoH.value = "";
    txtValores.value = "";


}

function preencherCampos() {


    if (select.value == "") {
        return;
    }

    cont = 0
    valorSelectEixoH = document.getElementById("slctEixoH").value

    while (valorSelectEixoH != arrayEixoH[cont]) {
        cont++
    }

    document.getElementById("txtEditarEixoH").value = arrayEixoH[cont]
    document.getElementById("txtEditarValores").value = arrayValores[cont]
    txtIndex.value = cont

}

function atualizar() {

    id = document.getElementById("txtIndex").value

    arrayEixoH[id] = txtEditarEixoH.value
    arrayValores[id] = txtEditarValores.value

    chart.data.labels = arrayEixoH;
    chart.data.datasets.forEach((datasets) => {
        datasets.data = arrayValores
    })

    chart.update();
    
    atualizarSelect()

    txtEditarValores.value = ""
    txtEditarEixoH.value = ""

}

function atualizarTitulo() {

    chart.options.plugins.title.text = txtTitulo.value;
    chart.update();

}

function atualizarLegenda() {

    chart.data.datasets.forEach((datasets) => {
        datasets.label = txtLegenda.value
    })
    // chart.data.datasets.label = txtLegenda.value;
    chart.update();

}

function atualizarSelect() {

    contSelect = select.options.length
    for (let i = 1; i < contSelect; i++) {
        if (select.options[1].value) {
            select.remove(1);
        }
    }
    for (let i = 0; i < arrayEixoH.length; i++) {
        select.options[select.options.length] = new Option(arrayEixoH[i], arrayEixoH[i]);
    }




}


