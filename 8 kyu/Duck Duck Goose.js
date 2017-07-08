function duckDuckGoose(players, goose) {
  var index = (goose % players.length) - 1;
  return players.slice(index)[0].name;
}
