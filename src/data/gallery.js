// ലഹരി നിർമ്മാർജന സമിതി (LNS) - ഔദ്യോഗിക ഫോട്ടോ ഗ്യാലറി
// Images strictly taken from public/gallery/ folder only

const GALLERY_FILES = [
  '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg',
  '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg',
  '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg',
  '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg',
  '21.jpeg', '22.jpeg', '23.jpeg', '24.jpeg', '25.jpeg',
  '26.jpeg', '27.jpeg', '28.jpeg', '29.jpeg', '30.jpeg',
  '32.jpeg', '33.jpeg', '34.jpeg', '35.jpeg', '36.jpeg',
  '37.jpeg', '38.jpeg', '39.jpeg', '40.jpeg', '43.jpeg',
  '44.jpeg', '45.jpeg', '46.jpeg', '47.jpeg', '48.jpeg',
  '49.jpeg', '50.jpeg', '51.jpeg', '52.jpeg', '53.jpeg',
  '54.jpeg', '55.jpeg', '56.jpeg', '57.jpeg', '58.jpeg',
  '59.jpeg', '60.jpeg', '61.jpeg', '62.jpeg', '63.jpeg',
  '64.jpeg', '65.jpeg'
];

export const galleryImages = GALLERY_FILES.map((fileName, index) => ({
  id: `gal-${index + 1}`,
  image: `/gallery/${fileName}`
}));

export const galleryCategories = [
  { id: 'all', name: 'എല്ലാം', englishName: 'All Photos' }
];

export const galleryItems = galleryImages;
export const videoItems = [];
