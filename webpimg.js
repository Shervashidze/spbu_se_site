const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');
var glob = require('glob');


glob('./docs/**/*.jpg', function(err, files) {
  files.forEach(element => {
    console.log(element);
    imagemin([element]), {
      destination: element.substring(0,element.lastIndexOf("/")+1),
      plugins: [imageminWebp({ quality: 70 })]
    };
  })
});
