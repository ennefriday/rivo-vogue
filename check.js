const fs = require('fs');
const content = fs.readFileSync('src/lib/storeData.ts', 'utf8');
const lines = content.split('\n');
lines.forEach(line => {
  if (line.includes('coverImage') || line.includes('hoverImage') || line.includes('galleryImages')) {
    const matches = line.match(/[\'\"](\/store\/[^\'\"]+)[\'\"]/g);
    if (matches) {
      matches.forEach(m => {
        const pathStr = m.replace(/[\'\"]/g, '');
        const fullPath = 'public' + pathStr;
        if (!fs.existsSync(fullPath)) {
          console.log('Missing: ' + fullPath);
        }
      });
    }
  }
});
