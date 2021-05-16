function tournamentWinner(competitions, results) {
    const teams = {}
    for (i = 0; i < results.length; i++) {
        // if away team wins, add 3 points to the home team
        // see which team wins
        if (results[i] === 0) {
            // check if that team exists in the team table
            if (teams[competitions[i][1]]) {
                // if it does, add 3 points
                teams[competitions[i][1]] += 3
            } else {
                // otherwise, create the key of the team with a value of 3
                teams[competitions[i][1]] = 3
            }
        }
        // if home team wins, add 3 points to the away team
        // see which team wins
        if (results[i] === 1) {
            // check if that team exists in the team table
            if (teams[competitions[i][0]]) {
                // if it does, add 3 points
                teams[competitions[i][0]] += 3
            } else {
                // otherwise, create the key of the team with a value of 3
                teams[competitions[i][0]] = 3
            }
        }
    }
    // returns team with highest score
    // reduce object to just the team that has the highest value and returns it.
    return Object.keys(teams).reduce((a, b) => teams[a] > teams[b] ? a : b)
}