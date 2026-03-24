const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  { name: 'Montserrat-Regular.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/main/fonts/ttf/Montserrat-Regular.ttf' },
  { name: 'Montserrat-Bold.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/main/fonts/ttf/Montserrat-Bold.ttf' },
  { name: 'Montserrat-Medium.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/main/fonts/ttf/Montserrat-Medium.ttf' },
  { name: 'Montserrat-SemiBold.ttf', url: 'https://raw.githubusercontent.com/googlefonts/montserrat/main/fonts/ttf/Montserrat-SemiBold.ttf' },
  { name: 'Roboto-Regular.ttf', url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/roboto/Roboto-Regular.ttf' },
  { name: 'Roboto-Bold.ttf', url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/roboto/Roboto-Bold.ttf' },
  { name: 'Roboto-Medium.ttf', url: 'https://raw.githubusercontent.com/google/fonts/main/ofl/roboto/Roboto-Medium.ttf' }
];

const dir = path.join(__dirname, 'assets', 'fonts');
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

console.log("Starting to download fonts...");

let pending = fonts.length;

fonts.forEach(font => {
  const dest = path.join(dir, font.name);
  const file = fs.createWriteStream(dest);
  const download = (url) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location);
      } else if (response.statusCode !== 200) {
        console.error(`Failed to download ${font.name}: ${response.statusCode}`);
        pending--;
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${font.name}`);
            pending--;
            if (pending === 0) {
              console.log("All fonts downloaded.");
            }
          });
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${font.name}: ${err.message}`);
      pending--;
    });
  };
  download(font.url);
});
