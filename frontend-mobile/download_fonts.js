const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  { name: 'Montserrat-Regular.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/master/fonts/ttf/Montserrat-Regular.ttf' },
  { name: 'Montserrat-Bold.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/master/fonts/ttf/Montserrat-Bold.ttf' },
  { name: 'Montserrat-Medium.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/master/fonts/ttf/Montserrat-Medium.ttf' },
  { name: 'Montserrat-SemiBold.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/master/fonts/ttf/Montserrat-SemiBold.ttf' },
  { name: 'Roboto-Regular.ttf', url: 'https://raw.githubusercontent.com/googlefonts/roboto/master/src/hinted/Roboto-Regular.ttf' },
  { name: 'Roboto-Bold.ttf', url: 'https://raw.githubusercontent.com/googlefonts/roboto/master/src/hinted/Roboto-Bold.ttf' },
  { name: 'Roboto-Medium.ttf', url: 'https://raw.githubusercontent.com/googlefonts/roboto/master/src/hinted/Roboto-Medium.ttf' }
];

const dir = path.join(__dirname, 'assets', 'fonts');
const androidDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'assets', 'fonts');

[dir, androidDir].forEach(d => {
  if (!fs.existsSync(d)){
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log("Starting to download fonts...");

let pending = fonts.length;

const download = (url, dest, fontName) => {
  https.get(url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest, fontName);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${fontName}: ${response.statusCode}`);
      pending--;
      return;
    }

    const file = fs.createWriteStream(dest);
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        // Also copy to android assets
        const androidDest = path.join(androidDir, fontName);
        fs.copyFileSync(dest, androidDest);
        console.log(`Downloaded and linked ${fontName}`);
        pending--;
        if (pending === 0) {
          console.log("All fonts downloaded and linked to Android.");
        }
      });
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${fontName}: ${err.message}`);
    pending--;
  });
};

fonts.forEach(font => {
  const dest = path.join(dir, font.name);
  download(font.url, dest, font.name);
});
