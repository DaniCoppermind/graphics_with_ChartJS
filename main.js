const $graphic1 = document.getElementById("g1");

const product1 = {
    label: "Production Week 1",
    data: [78, 208, 100, 75],
    backgroundColor: 'rgba(39, 48, 144, 0.5)',
    borderColor: 'rgba(39, 48, 144, 1)',
    borderWidth: 1,
};
const product2 = {
    label: "Production Week 2",
    data: [189, 45, 71, 200],
    backgroundColor: 'rgba(12, 189, 90, 0.5)',
    borderColor: 'rgba(12, 189, 90, 1)',
    borderWidth: 1,
};

new Chart($graphic1, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        datasets: [
            product1,
            product2
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

const $graphic2 = document.getElementById("g2");

const value1 = {
    label: "Production Week 1",
    data: [78, 208, 100, 75],
    backgroundColor: 'rgba(100, 84, 103, 0.5)',
    borderColor: 'rgba(100, 84, 103, 1)',
    borderWidth: 1,
};
const value2 = {
    label: "Production Week 2",
    data: [189, 45, 8, 200],
    backgroundColor: 'rgba(153, 17, 52, 0.5)',
    borderColor: 'rgba(153, 17, 52, 1)',
    borderWidth: 1,
};
const value3 = {
    label: "Production Week 3",
    data: [345, 187, 216, 97],
    backgroundColor: 'rgba(236, 214, 142, 0.5)',
    borderColor: 'rgba(236, 214, 142, 1)',
    borderWidth: 1,
};

new Chart($graphic2, {
    type: 'bar',
    data: {
        labels: ["Shirts","Jeans","Socks","Shoes"],
        datasets: [
            value1,
            value2,
            value3
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

const $graphic3 = document.getElementById('g3');
const headers = ["Local", "Regional", "National", "International"];

const numbers1 = {
    data: [40, 25, 89, 200],
    backgroundColor: [
        'rgba(239, 55, 149, 0.5)',
        'rgba(143, 146, 134, 0.5)',
        'rgba(13, 127, 108, 0.5)',
        'rgba(31, 83, 52, 0.5)',
    ],
    borderColor: [
        'rgba(239, 55, 149, 1)',
        'rgba(143, 146, 134, 1)',
        'rgba(13, 127, 108, 1)',
        'rgba(31, 83, 52, 1)',
    ],
    borderWidth: 1,
};

new Chart($graphic3, {
    type: "pie",
    data: {
        labels: headers,
        datasets: [
            numbers1
        ]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Ware Production"
        }
    }
});

const $graphic4 = document.getElementById('g4');
const rawMaterial = ["Thread","Satin","Percale","Linen"];

const consumption = {
    data: [356,195,270,568],
    backgroundColor: [
        'rgba(98, 76, 129, 0.5)',
        'rgba(61, 70, 188, 0.5)',
        'rgba(27, 137, 61, 0.5)',
        'rgba(96, 42, 56, 0.5)',
    ],
    borderColor: [
        'rgba(98, 76, 129, 1)',
        'rgba(61, 70, 188, 1)',
        'rgba(27, 137, 61, 1)',
        'rgba(96, 42, 56, 1)',
    ],
    borderWidth: 1,
};

new Chart($graphic4, {
    type: "doughnut",
    data: {
        labels: rawMaterial,
        datasets: [
            consumption
        ]
    },
    options: {
        title: {
            display: true,
            text: "Raw Material Consumption"
        }
    }
});