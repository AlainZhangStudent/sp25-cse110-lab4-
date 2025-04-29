let statistics = {
    redCards: 21,
    blueCards: 45,
    greenCards: 12,
    raceCars: 5,
    blackCards: 40,
    rareCars: 2
};

for (let property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 !== 0) {
        console.log(statistics[property]);
    }
}
