var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "../docs/assets/img/",            // Output folder
  PNGImages = "../docs/assets/img/*.png",         // PNG images
  JPEGImages = "../docs/assets/img/*.jpg";        // JPEG images
  
imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 65 // Quality setting from 0 to 100
  })]
});
