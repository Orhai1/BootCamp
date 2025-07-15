var firstPiece = { id: 101, name: 'Ofri' }

var secondPiece = { country: 'Israel'}

var fullPassport = { ...firstPiece, ...secondPiece };

console.log(fullPassport);