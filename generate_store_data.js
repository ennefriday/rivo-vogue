const fs = require('fs');

const dataFile = 'src/lib/storeData.ts';
let content = fs.readFileSync(dataFile, 'utf8');

// The file ends with:
//     "isNewArrival": false
//   }
// ];
//
// export function getProductBySlug ...

// Find where the array ends
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint === -1) {
  console.error("Could not find end of storeProducts array");
  process.exit(1);
}

// Generate Bags 1-10
const bags = [];
for (let i = 1; i <= 10; i++) {
  bags.push(`  {
    "id": "bag-gen-${i}",
    "slug": "luxury-bag-${i}",
    "name": "Luxury Bag ${i}",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_${i}.jpg",
    "hoverImage": "/store/bag/bag_${i}.jpg",
    "galleryImages": [
      "/store/bag/bag_${i}.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": ${i === 1 ? 'true' : 'false'},
    "isNewArrival": ${i > 7 ? 'true' : 'false'}
  }`);
}

// Generate Shoes 1-10
const shoes = [];
for (let i = 1; i <= 10; i++) {
  shoes.push(`  {
    "id": "shoe-gen-${i}",
    "slug": "luxury-shoe-${i}",
    "name": "Luxury Shoe ${i}",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_${i}.jpg",
    "hoverImage": "/store/shoes/shoe_${i}.jpg",
    "galleryImages": [
      "/store/shoes/shoe_${i}.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  }`);
}

// Perfume 11
const per11 = `  {
    "id": "perfume-gen-11",
    "slug": "signature-scent-11",
    "category": "Perfumes",
    "name": "Signature Scent 11",
    "price": "₦75,000",
    "shortDescription": "An alluring blend of premium ingredients.",
    "fullDescription": "A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.",
    "coverImage": "/store/perfume/per11.png",
    "hoverImage": "/store/perfume/per11.png",
    "galleryImages": [
      "/store/perfume/per11.png"
    ],
    "details": [
      {
        "label": "Volume",
        "value": "100ml / 3.4 fl oz"
      },
      {
        "label": "Type",
        "value": "Eau de Parfum"
      }
    ]
  }`;

// Remove any existing duplicate entries from the content if they exist (just in case)
// We will just append them.

let newContent = content.slice(0, insertionPoint);
if (!newContent.endsWith(',')) {
  // If the last item didn't end with a comma, add one
  // Actually, we just add a comma to the last item before appending
  newContent = newContent.trim().replace(/\}$/, '},\n');
}

const additions = [...bags, ...shoes, per11].join(',\n');
newContent += additions + '\n];\n' + content.slice(insertionPoint + 2);

fs.writeFileSync(dataFile, newContent);
console.log("Added 21 products successfully.");
