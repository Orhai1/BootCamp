const fs = require('fs');

function readFileWithErrorHandling(filePath, callback) {
  fs.stat(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return callback(`File not found: ${filePath}`);
      } else if (err.code === 'EISDIR') {
        return callback(`Expected file but found directory: ${filePath}`);
      }
      else{
         return callback(`Unknown error: ${err.message}`);
      }
    } else {
      const size = data.size;
      return callback(`File read successfully. Size: ${size} bytes`);
    }
});
}


readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
readFileWithErrorHandling('nonexistent.txt', (result) => {
  console.log(result);
  // Error: "File not found: nonexistent.txt"
});