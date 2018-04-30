
function genreCheck(item) {
  let newGenre = []
    if (typeof item == 'string') {
    item.split(',').map(Number).forEach(function(genre){
        if (genre == 2) {
          newGenre.push(' Point-n-Click');
        } else if (genre == 4) {
          newGenre.push(' Fighting');
        } else if (genre == 5) {
          newGenre.push(' Shooter');
        } else if (genre == 7) {
          newGenre.push(' Music');
        } else if (genre == 8) {
          newGenre.push(' Platform');
        } else if (genre == 9) {
          newGenre.push(' Puzzle');
        } else if (genre == 10) {
          newGenre.push(' Racing');
        } else if (genre == 11) {
          newGenre.push(' Real Time Strategy (RTS)');
        } else if (genre == 12) {
          newGenre.push(' Role-playing (RPG)');
        } else if (genre == 13) {
          newGenre.push(' Simulator');
        } else if (genre == 14) {
          newGenre.push(' Sports');
        } else if (genre == 15) {
          newGenre.push(' Strategy');
        } else if (genre == 16) {
          newGenre.push(' Turn-based strategy (TBS)');
        } else if (genre == 24) {
          newGenre.push(' Tactical');
        } else if (genre == 25) {
          newGenre.push(' Hack and slash/Beat em up');
        } else if (genre == 26) {
          newGenre.push(' Quiz/Trivia');
        } else if (genre == 30) {
          newGenre.push(' Pinball');
        } else if (genre == 31) {
          newGenre.push(' Adventure');
        } else if (genre == 32) {
          newGenre.push(' Indie');
        } else if (genre == 33) {
          newGenre.push(' Arcade');
        } else {
          newGenre.push(' No genre');
        }
    })
  }
  return newGenre
}
