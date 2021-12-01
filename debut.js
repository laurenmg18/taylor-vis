const debut = [
    {
      "track": 1,
      "name": "Tim McGraw",
      "album": "Taylor Swift",
      "duration": 232106,
      "popularity": 49,
      "danceability": 0.58,
      "valence": 0.425,
    },
    {
        "track": 2,
        "name": "Picture To Burn",
        "album": "Taylor Swift",
        "duration": 173066,
        "popularity": 54,
        "danceability": 0.658,
        "valence": 0.821,
    },
    {
      "track": 3,
      "name": "Teardrops On My Guitar - Radio Single Remix",
      "album": "Taylor Swift",
      "duration": 203040,
      "popularity": 59,
      "danceability": 0.621,
      "valence": 0.289,
    },
    {
      "track": 4,
      "name": "A Place in this World",
      "album": "Taylor Swift",
      "duration": 199200,
      "popularity": 49,
      "danceability": 0.576,
      "valence": 0.428,
    },
    {
      "track": 5,        
      "name": "Cold As You",
      "album": "Taylor Swift",
      "duration": 239013,
      "popularity": 50,
      "danceability": 0.418,
      "valence": 0.261,
    },
    {
        "track": 6,
      "name": "The Outside",
      "album": "Taylor Swift",
      "duration": 207106,
      "popularity": 47,
      "danceability": 0.589,
      "valence": 0.591,
    },
    {
        "track": 7,
      "name": "Tied Together with a Smile",
      "album": "Taylor Swift",
      "duration": 248106,
      "popularity": 47,
      "danceability": 0.479,
      "valence": 0.192,
    },
    {
        "track": 8,
      "name": "Stay Beautiful",
      "album": "Taylor Swift",
      "duration": 236053,
      "popularity": 48,
      "danceability": 0.594,
      "valence": 0.504,
    },
    {
        "track": 9,
      "name": "Should've Said No",
      "album": "Taylor Swift",
      "duration": 242200,
      "popularity": 53,
      "danceability": 0.476,
      "valence": 0.472,
    },
    {
        "track": 10,
      "name": "Mary's Song (Oh My My My)",
      "album": "Taylor Swift",
      "duration": 213080,
      "popularity": 50,
      "danceability": 0.403,
      "valence": 0.374,
    },
    {
        "track": 11,
      "name": "Our Song",
      "album": "Taylor Swift",
      "duration": 201106,
      "popularity": 54,
      "danceability": 0.668,
      "valence": 0.539,
      "tempo": 89.011
    },
    {
        "track": 12,
      "name": "I'm Only Me When I'm With You",
      "album": "Taylor Swift",
      "duration": 213053,
      "popularity": 50,
      "danceability": 0.563,
      "valence": 0.518,
    },
    {
        "track": 13,
      "name": "Invisible",
      "album": "Taylor Swift",
      "duration": 203226,
      "popularity": 48,
      "danceability": 0.612,
      "valence": 0.233,
    },
    {
        "track": 14,
      "name": "A Perfectly Good Heart",
      "album": "Taylor Swift",
      "duration": 220146,
      "popularity": 46,
      "danceability": 0.483,
      "valence": 0.268,
    },
    {
        "track": 15,
      "name": "Teardrops on My Guitar - Pop Version",
      "album": "Taylor Swift",
      "duration": 179066,
      "popularity": 48,
      "danceability": 0.459,
      "valence": 0.483,
    },
]


const body = d3.select("body");


let div = body.append("div")

const svg = div.append("svg")
    .attr("height", "500")
    .attr("width", "1000")
    .style("border", "none");

const bigCirc = svg.append("circle")
    .attr("cx", "500")
    .attr("cy", "500")
    .attr("r", "500")
    .attr("fill", "black")

const label = svg.append("circle")
    .attr("cx", "500")
    .attr("cy", "500")
    .attr("r", "175")
    .attr("fill", "#c6e597")

const littleCirc = svg.append("circle")
    .attr("cx", "500")
    .attr("cy", "500")
    .attr("r", "80")
    .attr("fill", "black")

const hole = svg.append("circle")
    .attr("cx", "500")
    .attr("cy", "500")
    .attr("r", "45")
    .attr("fill", "#97e9c1")


const draw1 = (dataset) => {
for (var j = dataset.length-1; j>=0; j--) {
    var arc = d3.arc()
            .outerRadius(175 + 21*dataset[j].track)
            .innerRadius((175+21*dataset[j].track)-3)
            // Use of arc.startAngle() Function 
            .startAngle(-1.75)
            .endAngle(-2+0.00001*dataset[j].duration);
        svg.append("path")
            .attr("class", "arc")
            .attr("d", arc)
            .attr("transform","translate(500,500)")
            .style("fill","#737373")

}
}

const draw2 = (dataset) => {
    for (var j = dataset.length-1; j>=0; j--) {
        var arc = d3.arc()
                .outerRadius(175 + 21*dataset[j].track)
                .innerRadius((175+21*dataset[j].track)-3)
                // Use of arc.startAngle() Function 
                .startAngle(-1.75)
                .endAngle(-2+0.05*dataset[j].popularity);
            svg.append("path")
                .attr("class", "arc")
                .attr("d", arc)
                .attr("transform","translate(500,500)")
                .style("fill","#737373")
    }
}

const draw3 = (dataset) => {
    for (var j = dataset.length-1; j>=0; j--) {
        var arc = d3.arc()
                .outerRadius(175 + 21*dataset[j].track)
                .innerRadius((175+21*dataset[j].track)-3)
                // Use of arc.startAngle() Function 
                .startAngle(-1.75)
                .endAngle(-2+4.25*dataset[j].danceability);
            svg.append("path")
                .attr("class", "arc")
                .attr("d", arc)
                .attr("transform","translate(500,500)")
                .style("fill","#737373")
    }
}

const draw4 = (dataset) => {
    for (var j = dataset.length-1; j>=0; j--) {
        var arc = d3.arc()
                .outerRadius(175 + 21*dataset[j].track)
                .innerRadius((175+21*dataset[j].track)-3)
                // Use of arc.startAngle() Function 
                .startAngle(-1.75)
                .endAngle(-2+4*dataset[j].valence);
            svg.append("path")
                .attr("class", "arc")
                .attr("d", arc)
                .attr("transform","translate(500,500)")
                .style("fill","#737373")
    }
}

let buttonDiv = body.append('div')
                    .attr("class","topcoat-button-bar full")

let button1 = buttonDiv.append('div')
                        .attr("class","topcoat-button-bar__item")
                        .attr('id', 'button1')
let duration = button1.append('button')
                        .attr("class","topcoat-button-bar__button full")
                        .text("Length")
                        .attr('id', 'duration')

let button2 = buttonDiv.append('div')
                        .attr("class","topcoat-button-bar__item")
                        .attr('id', 'button2')
let popularity = button2.append('button')
                        .attr("class", "topcoat-button-bar__button full")
                        .text('Popularity')
                        .attr('id', 'popularity')

let button3 = buttonDiv.append('div')
                        .attr("class","topcoat-button-bar__item")
                        .attr('id', 'button3')
let danceability = button3.append('button')
                            .attr("class", "topcoat-button-bar__button full")
                            .text('Danceability')
                            .attr('id', 'danceability')

let button4 = buttonDiv.append('div')
                        .attr("class","topcoat-button-bar__item")
                        .attr('id', 'button4')
let happiness = button4.append('button')
                        .attr("class", "topcoat-button-bar__button full")
                        .text('Happiness')
                        .attr('id', 'happiness')

duration.on('click', () => draw1(debut))
popularity.on('click', () => draw2(debut))
danceability.on('click', () => draw3(debut))
happiness.on('click', () => draw4(debut))



