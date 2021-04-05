var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./docs/assets/img",            // Output folder
  PNGImages = "./docs/assets/img/*.png",         // PNG images
  JPEGImages = "./docs/assets/img/*.jpg";        // JPEG images
  
imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin(['docs/assets/img/*.jpg'], {
    destination: __dirname + '/docs/assets/img',
    plugins: [
        webp({quality: 65})
    ]
});
