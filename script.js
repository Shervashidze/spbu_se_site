var glob = require('glob');
var CWebp = require('cwebp').CWebp;
var DWebp = require('cwebp').DWebp;
const path = require('path')


glob('./docs/**/*.jpg', function(err, files) {

  files.forEach(element => {
    element = path.resolve(element);
    
    var encoder = new CWebp(element);
    encoder.quality(65);

    element = element.replace('.jpg', '.webp');
    element = element.replace('.png', '.webp');
    encoder.write(element, function(err) {
      console.log(err || 'encoded successfully');
    });
  });
});
