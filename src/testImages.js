// src/testImages.js
// Test script to verify image URLs are working
// This is a utility file for testing purposes

export const testImageUrls = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4d9c7856b5e1?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop"
];

export const testImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export const testAllImages = async () => {
  console.log("Testing image URLs...");
  const results = await Promise.all(testImageUrls.map(testImage));
  const workingImages = results.filter(Boolean).length;
  console.log(`${workingImages}/${testImageUrls.length} images are working`);
  return results;
};
