const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');
var glob = require('glob');

glob('./docs/**/*.jpg', function(err, files) {
  files.forEach(element => {
    console.log(element);
    imagemin([element]), {
      destination: './',
      plugins: [imageminWebp({ quality: 70 })]
    };
  })
});
