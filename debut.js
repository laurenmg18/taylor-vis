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
    .attr("height", "700")
    .attr("width", "1500")
    .style("border", "none");

const bigCirc = svg.append("circle")
    .attr("cx", "750")
    .attr("cy", "700")
    .attr("r", "700")
    .attr("fill", "black")

const label = svg.append("circle")
    .attr("cx", "750")
    .attr("cy", "700")
    .attr("r", "250")
    .attr("fill", "#c6e597")

const littleCirc = svg.append("circle")
    .attr("cx", "750")
    .attr("cy", "700")
    .attr("r", "115")
    .attr("fill", "black")

const hole = svg.append("circle")
    .attr("cx", "750")
    .attr("cy", "700")
    .attr("r", "75")
    .attr("fill", "#97e9c1")

/*
    let draw = (dataset) => {
   

        let length = svg.selectAll('.length')
                        .data(dataset) 
                        .join('circle')
                        .classed('length', true)
                        .attr('cy', 700)
                        .attr('cx', 750)
                        .attr('r', (d) => 250 + 29*d.track)
                        .style('fill','none')
                        .style('stroke','#737373')
                        .style('stroke-width', "5")
    }
draw(debut)
*/

for (i = 0; i < debut.length; i++) {
    var arc = d3.arc()
            .outerRadius(250 + 29*debut[i].track)
            .innerRadius((250+29*debut[i].track)-3)
            // Use of arc.startAngle() Function 
            .startAngle(-1.75)
            .endAngle(-1+0.00001*debut[i].duration);
        svg.append("path")
            .attr("class", "arc")
            .attr("d", arc)
            .attr("transform","translate(750,700)");

        let p = document.querySelector(".arc");
        p.style.fill = "#737373";
}


/*
var arc = d3.arc()
.outerRadius(400)
.innerRadius(397)
// Use of arc.startAngle() Function 
.startAngle(-1.75)
.endAngle(0);

svg.append('path')
    .attr('class',arc)
    .attr('d',arc)
    .atrr('transform','translate(750,700)');

/*
let draw = (dataset) => {
    let length = svg.selectAll('.length')
                    .data(dataset) 
                    .join('path')
                    .classed('length', true)
                    .attr('class', arc)
                    .attr('d', arc)
                    .attr("transform","translate(750,700)");
    let p = document.querySelector(".arc");
    p.style.fill = "#737373";
}

draw(debut)
*/