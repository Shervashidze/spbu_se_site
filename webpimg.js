const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const files = await imagemin([path.resolve('./docs') + '/assets/images/*.{jpg, png}'], {
    destination: path.resolve('./docs') + '/assets/images',
    plugins: [imageminWebp({ quality: 70 })],
  });

  console.log(files);
})();
