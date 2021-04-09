const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const files = await imagemin(['docs/assets/images/*.{jpg}'], {
    destination: path.resolve('./docs') + '/assets/images',
    plugins: [imageminWebp({ quality: 70 })],
  });

  console.log(path.resolve('./docs') + '/assets/images');
  console.log(files);
})();
