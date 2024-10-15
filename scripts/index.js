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
        games: 10
    },
    {
        name: "Zoe",
        points: 57,
        games: 6
    },
    {
        name: "Niccolò",
        points: 89,
        games: 13
    },
    {
        name: "Marta",
        points: 57,
        games: 7
    },
    {
        name: "Diego",
        points: 58,
        games: 13
    },
    {
        name: "Jacopo",
        points: 46,
        games: 8
    },
    {
        name: "Andrea",
        points: 44,
        games: 6
    },
    {
        name: "Simone",
        points: 19,
        games: 7
    },
    {
        name: "Martina",
        points: 17,
        games: 5
    },
    {
        name: "Giacomo",
        points: 6,
        games: 5
    },
    {
        name: "Guilherme",
        points: 25,
        games: 5
    }
];

function loadRanking() {
    // Order the dataset by points/number of games
    let data = dataset.sort((a, b) => {
        let pointsA = a.points / a.games;
        let pointsB = b.points / b.games;
        return pointsA - pointsB;
    });

    // Create the first place infos
    document.getElementById('firstplace-name').innerHTML = '<strong>' + data[0].name + '</strong>';
    document.getElementById('firstplace-score').innerHTML = (data[0].points/data[0].games).toFixed(2);
    document.getElementById('firstplace-points').innerHTML = data[0].points + " punti";
    document.getElementById('firstplace-games').innerHTML = data[0].games + " partite";
    document.getElementById('firstplace-avatar').src = 'assets/images/avatars/' + data[0].name.toLowerCase() + '.png';

    for (let i = 1; i < data.length; i++) {
        let player = new Player(data[i].name, data[i].points, data[i].games);
        
        // Create the ranking table
        let container = document.getElementById('general-ranking-container');

        let avatar = document.createElement('img');
        avatar.className = 'player-avatar';
        avatar.src = 'assets/images/avatars/' + player.name.toLowerCase() + '.png';

        let playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';

        let playerName = document.createElement('p');
        playerName.className = 'player-name';
        playerName.innerHTML = "<strong>" + (i + 1) + "°</strong> " + player.name;

        let subbox = document.createElement('div');
        subbox.className = 'player-subbox';

        let score = document.createElement('p');
        score.className = 'player-score';
        score.innerHTML = (player.points/player.games).toFixed(2);

        subbox.appendChild(score);

        let subdiv = document.createElement('div');

        let points = document.createElement('p');
        points.className = 'player-points';
        points.innerHTML = player.points + " punti";

        let games = document.createElement('p');
        games.className = 'player-games';
        games.innerHTML = player.games + " partite";

        subdiv.appendChild(points);
        subdiv.appendChild(games);

        subbox.appendChild(subdiv);

        playerContainer.appendChild(avatar);

        let tmpDiv = document.createElement('div');
        tmpDiv.appendChild(playerName);
        tmpDiv.appendChild(subbox);

        playerContainer.appendChild(tmpDiv);

        container.appendChild(playerContainer);
    }
}