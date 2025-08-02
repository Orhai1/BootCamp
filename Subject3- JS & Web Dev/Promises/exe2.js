function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];



const startTime = Date.now()
const promises = files.map(file => processFile(file.name, file.time))

Promise.all(promises)
  .then(results => {
    const totalTime = (Date.now() - startTime) / 1000
    console.log(`All files processed in ${totalTime} seconds`)
    console.log("Results:", results)
  })
  .catch(error => {
    console.error("Error:", error.message)
  })
