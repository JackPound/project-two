

function genreCheck(genre) {
  if (genre == 2) {
    return 'Point-n-Click';
  } else if (genre == 4) {
    return 'Fighting'
  } else if (genre == 5) {
    return 'Shooter'
  } else if (genre == 7) {
    return 'Music'
  } else if (genre == 8) {
    return 'Platform'
  } else if (genre == 9) {
    return 'Puzzle'
  } else if (genre == 10) {
    return 'Racing'
  } else if (genre == 11) {
    return 'Real Time Strategy (RTS)'
  } else if (genre == 12) {
    return 'Role-playing (RPG)'
  } else if (genre == 13) {
    return 'Simulator'
  } else if (genre == 14) {
    return 'Sports'
  } else if (genre == 15) {
    return 'Strategy'
  } else if (genre == 16) {
    return 'Turn-based strategy (TBS)'
  } else if (genre == 24) {
    return 'Tactical'
  } else if (genre == 25) {
    return 'Hack and slash/Beat em up'
  } else if (genre == 26) {
    return 'Quiz/Trivia'
  } else if (genre == 30) {
    return 'Pinball'
  } else if (genre == 31) {
    return 'Adventure'
  } else if (genre == 32) {
    return 'Indie'
  } else if (genre == 33) {
    return 'Arcade'
  } else {
    return 'No genre'
  }
}
genreCheck(32)