import { functionOptimizeImages } from 'images-folder-optimizer';

functionOptimizeImages({
  stringOriginFolder: 'src/images',
  stringDestinationFolder: 'public/images',
  arrayOriginFormats: ['jpg', 'png'],
  arrayDestinationFormats: ['webp', 'avif'],
}).then((results) => {
  console.table(results);
});
