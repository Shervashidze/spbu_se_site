const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const files = await imagemin(['docs/assets/img/*.{jpg,png}'], {
    destination: path.resolve('./docs') + '/assets/img',
    plugins: [imageminWebp({ quality: 70 })],
  });

  console.log(files);
})();
