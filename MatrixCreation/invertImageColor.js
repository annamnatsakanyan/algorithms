const image = [
    [255, 255, 255],
    [255, 100, 55],
    [255, 255, 255]
  ];
  
  function invertColors(image) {
    const height = image.length;   // rows
    const width = image[0].length;  // columns
  
    const invertedImage = [];
  
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(255 - image[i][j]);
      }
      invertedImage.push(row);
    }
  
    return invertedImage;
  }
  
  const invertedImage = invertColors(image);
  
  console.log("Original Image:");
  console.table(image);
  
  console.log("Inverted Image:");
  console.table(invertedImage);