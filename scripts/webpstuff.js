const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['docs/assets/images/stuff/*.{jpg,png}'], {
    destination: 'docs/assets/images/stuff',
    plugins: [imageminWebp({ quality: 70 })],
  });

  console.log(files);
})();
