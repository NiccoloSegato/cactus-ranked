class Player {
    constructor(name, score, games) {
        this.name = name;
        this.points = score;
        this.games = games;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadRanking();
});

const dataset = [
    {
        name: "Alice",
        points: 37,
        games: 8
    },
    {
        name: "Zoe",
        points: 49,
        games: 5
    },
    {
        name: "Niccolò",
        points: 78,
        games: 12
    },
    {
        name: "Marta",
        points: 57,
        games: 7
    },
    {
        name: "Diego",
        points: 52,
        games: 12
    },
    {
        name: "Jacopo",
        points: 46,
        games: 7
    },
    {
        name: "Andrea",
        points: 21,
        games: 4
    },
    {
        name: "Simone",
        points: 11,
        games: 5
    },
    {
        name: "Martina",
        points: 17,
        games: 5
    },
    {
        name: "Giacomo",
        points: 7,
        games: 4
    },
    {
        name: "Guilherme",
        points: 12,
        games: 4
    }
];

function loadRanking() {
    // Order the dataset by points/number of games
    let data = dataset.sort((a, b) => {
        let pointsA = a.points / a.games;
        let pointsB = b.points / b.games;
        return pointsA - pointsB;
    });

    // Create the first three spots names
    document.getElementById('firstplace-name').innerHTML = '<strong>' + data[0].name + '</strong>';
    document.getElementById('secondplace-name').innerHTML = '<strong>' + data[1].name + '</strong>';
    document.getElementById('thirdplace-name').innerHTML = '<strong>' + data[2].name + '</strong>';

    // Create the first three spots scores
    document.getElementById('firstplace-scores').innerHTML = data[0].points + " /" + data[0].games;
    document.getElementById('secondplace-scores').innerHTML = data[1].points + " /" + data[1].games;
    document.getElementById('thirdplace-scores').innerHTML = data[2].points + " /" + data[2].games;

    // Create the first three spots scores
    document.getElementById('firstplace-points').innerHTML = (data[0].points/data[0].games).toFixed(2);
    document.getElementById('secondplace-points').innerHTML = (data[1].points/data[1].games).toFixed(2);
    document.getElementById('thirdplace-points').innerHTML = (data[2].points/data[2].games).toFixed(2);

    for (let i = 3; i < data.length; i++) {
        let player = new Player(data[i].name, data[i].points, data[i].games);
        
        // Create the ranking table
        let container = document.getElementById('general-ranking-container');

        let playerContainer = document.createElement('div');
        playerContainer.className = 'leaderboard-spot-container';

        let playerPosition = document.createElement('p');
        playerPosition.className = 'leaderboard-spot-position';
        playerPosition.innerHTML = i + 1 + "°";

        let subContainer = document.createElement('div');
        subContainer.className = 'leaderboard-spot-sub';

        let playerName = document.createElement('p');
        playerName.className = 'leaderboard-spot-name';
        playerName.innerHTML = player.name;

        let playerScore = document.createElement('p');
        playerScore.className = 'leaderboard-spot-points';
        playerScore.innerHTML = (player.points/player.games).toFixed(2) + " - " + player.points + " /" + player.games;

        subContainer.appendChild(playerName);
        subContainer.appendChild(playerScore);

        playerContainer.appendChild(playerPosition);
        playerContainer.appendChild(subContainer);

        container.appendChild(playerContainer);
    }
}