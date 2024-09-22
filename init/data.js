// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://a0.muscache.com/im/pictures/944b9510-945e-47cd-bd7d-bc1b5b94ba4b.jpg?im_w=1200",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//     reviews: [],
//     owner
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://a0.muscache.com/im/pictures/47b228ee-4089-4bb6-8967-0bccfcc93ad7.jpg?im_w=1200",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };

const sampleListings = [
  {
    "title": "Luxury Beachfront Villa in Hawaii",
    "description": "A stunning villa with breathtaking ocean views.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/d2555718-0e07-4e12-8794-09248b034e4f.jpg?ml=true&im_w=720",
      "filename": "listing1"
    },
    "price": 5000,
    "location": "Maui, Hawaii",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-156.3319, 20.7984]
    }
  },
  {
    "title": "Rustic Cabin in the Mountains",
    "description": "A rustic cabin with breathtaking mountain views.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968240744604379372/original/24d84836-7553-4a9e-bd8e-1d4805b73b15.jpeg?im_w=720",
      "filename": "listing2"
    },
    "price": 1600,
    "location": "Aspen, Colorado",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8175, 39.1911]
    }
  },
  {
    "title": "Elegant Penthouse in Dubai",
    "description": "An elegant penthouse with stunning views of the city skyline.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1193600135429459413/original/0e8c4f2c-14e9-40dd-9d42-8057d3185c86.jpeg?im_w=720",
      "filename": "listing3"
    },
    "price": 5000,
    "location": "Dubai, UAE",
    "country": "UAE",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Beautiful Apartment in Barcelona",
    "description": "A beautiful apartment located in the vibrant city of Barcelona.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/f597b360-efd7-47f8-9da1-d1ba199664a7.jpg?ml=true&im_w=720",
      "filename": "listing4"
    },
    "price": 1800,
    "location": "Barcelona, Spain",
    "country": "Spain",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [2.1734, 41.3851]
    }
  },
  {
    "title": "Historical Home in Rome",
    "description": "A historical home located near major attractions in Rome.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-47856212/original/7d09bbd6-bd43-4c6d-a75e-51ef0c78129f.jpeg?im_w=720",
      "filename": "listing5"
    },
    "price": 2400,
    "location": "Rome, Italy",
    "country": "Italy",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [12.4964, 41.9028]
    }
  },
  {
    "title": "Luxury Yacht in Miami",
    "description": "Experience luxury on the water with this stunning yacht.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-1194261122671530612/original/6a60eec5-9616-4d1a-ad52-cb9c371b2059.jpeg?im_w=720",
      "filename": "listing6"
    },
    "price": 7000,
    "location": "Miami, Florida",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.1918, 25.7617]
    }
  },
  {
    "title": "Charming Bed & Breakfast",
    "description": "A charming bed & breakfast in a peaceful setting.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/8547fcfd-36b6-4052-90bc-9006d644f938.jpg?im_w=720",
      "filename": "listing7"
    },
    "price": 1200,
    "location": "Charleston, South Carolina",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-79.9309, 32.7765]
    }
  },
  {
    "title": "Seaside Cottage in Maine",
    "description": "A cozy cottage by the sea perfect for a weekend getaway.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/adfd6818-0614-437a-a032-2c9eff1cbd9e.jpeg?im_w=720",
      "filename": "listing8"
    },
    "price": 2200,
    "location": "Bar Harbor, Maine",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-68.2039, 44.3876]
    }
  },
  {
    "title": "Modern Loft in New York City",
    "description": "A modern loft located in the heart of NYC.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/8547fcfd-36b6-4052-90bc-9006d644f938.jpg?im_w=720",
      "filename": "listing9"
    },
    "price": 3000,
    "location": "New York, NY",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.006, 40.7128]
    }
  },
  {
    "title": "Quaint Cottage in the Countryside",
    "description": "A quaint cottage nestled in the countryside.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-713558002485558705/original/2f0b0217-a625-4475-94d3-d14cf9d059e4.jpeg?im_w=720",
      "filename": "listing10"
    },
    "price": 1600,
    "location": "Amherst, Massachusetts",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-72.5162, 42.3770]
    }
  },
  {
    "title": "Stunning Vineyard Retreat",
    "description": "Relax in this stunning retreat located in a vineyard.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-801453506167719777/original/b93cdbc0-65aa-4eec-a026-941e9b633dd9.jpeg?im_w=720",
      "filename": "listing11"
    },
    "price": 2500,
    "location": "Napa Valley, California",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.2869, 38.2975]
    }
  },
  {
    "title": "Chic Apartment in Paris",
    "description": "Experience the charm of Paris in this chic apartment.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1021699523679171741/original/292c0f2a-a851-4a50-a3b5-834faf91b836.jpeg?im_w=720",
      "filename": "listing12"
    },
    "price": 3200,
    "location": "Paris, France",
    "country": "France",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    }
  },
  {
    "title": "Charming Farmhouse in Texas",
    "description": "A charming farmhouse set in the beautiful Texas countryside.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-659023043974589368/original/e82a419d-49c2-40fe-a14f-681358634aa0.jpeg?im_w=720",
      "filename": "listing13"
    },
    "price": 2000,
    "location": "Fredericksburg, Texas",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-98.8723, 30.2747]
    }
  },
  {
    "title": "Luxurious Ski Resort in Switzerland",
    "description": "Ski in style at this luxurious resort.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-37922090/original/3e98dbd8-1b21-49b2-afc7-f1a227470804.jpeg?im_w=720",
      "filename": "listing14"
    },
    "price": 4500,
    "location": "Zermatt, Switzerland",
    "country": "Switzerland",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [7.7491, 46.0207]
    }
  },
  {
    "title": "Exotic Desert Camp in Morocco",
    "description": "Experience the magic of the desert in this exotic camp.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/8e6b5065-9087-4180-842d-6d4a318d2aa6.jpg?im_w=720",
      "filename": "listing15"
    },
    "price": 1800,
    "location": "Merzouga, Morocco",
    "country": "Morocco",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-4.0163, 31.0852]
    }
  },
  {
    "title": "Unique Treehouse in the Forest",
    "description": "Stay in a unique treehouse surrounded by nature.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1126076922242976966/original/87d34412-8c60-4c48-9426-4f997b94e777.jpeg?im_w=720",
      "filename": "listing16"
    },
    "price": 1200,
    "location": "Bend, Oregon",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-121.3153, 44.0682]
    }
  },
  {
    "title": "Stylish Studio in Toronto",
    "description": "A stylish studio apartment located in downtown Toronto.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/907dc7a1-ee66-44b5-90ac-15489adda484.jpg?im_w=720",
      "filename": "listing17"
    },
    "price": 2400,
    "location": "Toronto, Canada",
    "country": "Canada",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-79.3832, 43.6532]
    }
  },
  {
    "title": "Tropical Paradise in Bali",
    "description": "Escape to this tropical paradise in Bali.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-820720687933077442/original/01a87d20-0c1e-4cb2-a289-a9a4f9ccc756.jpeg?im_w=720",
      "filename": "listing18"
    },
    "price": 3000,
    "location": "Ubud, Bali",
    "country": "Indonesia",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [115.2620, -8.4095]
    }
  },
  {
    "title": "Modern Apartment in Sydney",
    "description": "A modern apartment with stunning views of the Sydney Opera House.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-620081444090625084/original/0f3eb402-960a-4a07-869c-a8863770660f.jpeg?im_w=720",
      "filename": "listing19"
    },
    "price": 3500,
    "location": "Sydney, Australia",
    "country": "Australia",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [151.2093, -33.8688]
    }
  },
  {
    "title": "Trendy Loft in London",
    "description": "A trendy loft located in the heart of London.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-872523111703152808/original/6b9c08f0-c0ae-49a3-b530-f647030c9d21.jpeg?im_w=720",
      "filename": "listing20"
    },
    "price": 4200,
    "location": "London, UK",
    "country": "UK",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-0.1278, 51.5074]
    }
  },
  {
    "title": "Serene Retreat in the Mountains",
    "description": "Find peace and tranquility in this serene mountain retreat.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-48404094/original/b796ba6d-1856-4cf0-b559-3d37a4821d41.jpeg?im_w=720",
      "filename": "listing21"
    },
    "price": 2800,
    "location": "Vail, Colorado",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.3742, 39.6063]
    }
  },
  {
    "title": "Luxury Apartment in Singapore",
    "description": "A luxury apartment with stunning skyline views in Singapore.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-878168896277411832/original/19575051-70a0-4500-bd78-c2abc50a2f7c.jpeg?im_w=720",
      "filename": "listing22"
    },
    "price": 4000,
    "location": "Singapore",
    "country": "Singapore",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [103.8198, 1.3521]
    }
  },
  {
    "title": "Gorgeous Villa in Santorini",
    "description": "A gorgeous villa overlooking the beautiful Santorini coastline.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-872507784089751973/original/9fe6b9e8-9479-4426-81df-d8111fcc53f9.jpeg?im_w=720",
      "filename": "listing23"
    },
    "price": 6000,
    "location": "Santorini, Greece",
    "country": "Greece",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [25.4322, 36.3932]
    }
  },
  {
    "title": "Private Island Getaway",
    "description": "Experience luxury on your own private island.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-852918482922249722/original/654156e3-f609-4e81-afc0-59ba12dd1ec2.png?im_w=720",
      "filename": "listing24"
    },
    "price": 10000,
    "location": "Maldives",
    "country": "Maldives",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [73.2207, 3.2028]
    }
  },
  {
    "title": "Stunning Cabin in the Woods",
    "description": "A stunning cabin perfect for a nature escape.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/4e3d6567-1fb7-4119-ad61-80971492b8dc.jpg?im_w=720",
      "filename": "listing25"
    },
    "price": 1500,
    "location": "Lake Tahoe, California",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-120.0134, 39.0968]
    }
  },
  {
    "title": "Elegant Mansion in Beverly Hills",
    "description": "An elegant mansion located in the prestigious Beverly Hills.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-989225924012535287/original/aa2962a9-e51c-44c9-8a20-79e9a8d36b02.jpeg?im_w=720",
      "filename": "listing26"
    },
    "price": 8000,
    "location": "Beverly Hills, California",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.4053, 34.0696]
    }
  },
  {
    "title": "Serene Lakeside Cabin",
    "description": "A serene cabin by the lake, perfect for relaxation.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39327758/original/7425d87d-7cf4-458e-9483-3f86c08bba7f.jpeg?im_w=720",
      "filename": "listing27"
    },
    "price": 2200,
    "location": "Finger Lakes, New York",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-76.8425, 42.8656]
    }
  },
  {
    "title": "Vibrant Art Studio in Berlin",
    "description": "A vibrant art studio in the creative heart of Berlin.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-873069117835483193/original/64e68a05-f5e9-46ca-a3ef-7952bb4fa3de.jpeg?im_w=720",
      "filename": "listing28"
    },
    "price": 1600,
    "location": "Berlin, Germany",
    "country": "Germany",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [13.4050, 52.5200]
    }
  },
  {
    "title": "Stylish Townhouse in Amsterdam",
    "description": "A stylish townhouse located near the canals of Amsterdam.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-50203356/original/af2555bc-8cc1-4e70-bd80-c3e33662b078.jpeg?ml=true&im_w=720",
      "filename": "listing29"
    },
    "price": 3000,
    "location": "Amsterdam, Netherlands",
    "country": "Netherlands",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [4.9041, 52.3676]
    }
  },
  {
    "title": "Quaint Fishing Lodge",
    "description": "A quaint lodge ideal for fishing enthusiasts.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/bc95da4d-13a9-4d30-bbaa-923e9bc93490.jpg?im_w=720",
      "filename": "listing30"
    },
    "price": 1300,
    "location": "Montauk, New York",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.9544, 41.0673]
    }
  },
  {
    "title": "Luxe Apartment in Hong Kong",
    "description": "A luxe apartment in the vibrant city of Hong Kong.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53158805/original/9267237d-6034-4269-b717-ea7dfad3c39b.jpeg?im_w=720",
      "filename": "listing31"
    },
    "price": 3700,
    "location": "Hong Kong",
    "country": "China",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [114.1694, 22.3193]
    }
  },
  {
    "title": "Charming Villa in Tuscany",
    "description": "A charming villa set in the picturesque Tuscan countryside.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/1d9c40a4-385c-4682-8f98-03a5c8cdd5bd.jpg?im_w=720",
      "filename": "listing32"
    },
    "price": 4200,
    "location": "Tuscany, Italy",
    "country": "Italy",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2550, 43.3180]
    }
  },
  {
    "title": "Stunning Beach House in the Bahamas",
    "description": "A stunning beach house with direct access to the ocean.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/ebf853c5-7c39-472e-a09f-354c99be2fce.jpg?im_w=720",
      "filename": "listing33"
    },
    "price": 5000,
    "location": "Nassau, Bahamas",
    "country": "Bahamas",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.3556, 25.0343]
    }
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Stay in a historic castle with rich heritage.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-47086741/original/89035847-1f96-4269-af1e-120a19e1cfd7.jpeg?im_w=720",
      "filename": "listing34"
    },
    "price": 8000,
    "location": "Edinburgh, Scotland",
    "country": "UK",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-3.1883, 55.9533]
    }
  },
  {
    "title": "Sleek Studio in Tokyo",
    "description": "A sleek studio in the bustling city of Tokyo.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-961191619456593141/original/15c342a0-47cd-4b32-b4ed-1b6698a3cd63.jpeg?im_w=1200",
      "filename": "listing35"
    },
    "price": 3000,
    "location": "Tokyo, Japan",
    "country": "Japan",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [139.6917, 35.6895]
    }
  },
  {
    "title": "Cozy Studio in Seoul",
    "description": "A cozy studio in the heart of Seoul.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1141724715717588719/original/a1e91186-449a-4167-913d-7a99e732bb05.jpeg?ml=true&im_w=1200",
      "filename": "listing36"
    },
    "price": 2200,
    "location": "Seoul, South Korea",
    "country": "South Korea",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [126.9779, 37.5665]
    }
  },
  {
    "title": "Tranquil Cabin Retreat",
    "description": "A tranquil cabin retreat surrounded by nature.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-45958529/original/fda3d4be-6210-4a6e-a367-0cae1ebcc4bd.jpeg?ml=true&im_w=1200",
      "filename": "listing37"
    },
    "price": 1300,
    "location": "Jackson Hole, Wyoming",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-110.7632, 43.4799]
    }
  },
  {
    "title": "Modern Bungalow in Los Angeles",
    "description": "A modern bungalow located in the vibrant city of Los Angeles.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/2d9f4e4c-6cbb-43a6-a229-9e5d9d340980.jpg?ml=true&im_w=1200",
      "filename": "listing38"
    },
    "price": 3500,
    "location": "Los Angeles, California",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.2437, 34.0522]
    }
  },
  {
    "title": "Stylish Flat in Vienna",
    "description": "A stylish flat located in the cultural heart of Vienna.",
    "image": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-773283231888504246/original/6aea2545-d1ae-4dce-b0c2-a31e904600e2.jpeg?im_w=1200",
      "filename": "listing39"
    },
    "price": 2900,
    "location": "Vienna, Austria",
    "country": "Austria",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [16.3738, 48.2082]
    }
  },
  {
    "title": "Scenic Beachfront Resort",
    "description": "A scenic resort with stunning views of the ocean.",
    "image": {
      "url": "https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg",
      "filename": "listing40"
    },
    "price": 4800,
    "location": "Kauai, Hawaii",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-159.5732, 22.0964]
    }
  },
  {
    "title": "Charming City Apartment",
    "description": "A charming apartment located in the city center.",
    "image": {
      "url": "https://livinator.com/wp-content/uploads/2015/12/zsazsabellagio-blogspot.jpg",
      "filename": "listing41"
    },
    "price": 2500,
    "location": "Lisbon, Portugal",
    "country": "Portugal",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-9.1393, 38.7223]
    }
  },
  {
    "title": "Chic Apartment in Paris",
    "description": "A chic apartment in the romantic city of Paris.",
    "image": {
      "url": "https://cdn.lecollectionist.com/__lecollectionist__/production/lp-destinations/25/1KZrQaNKRZyx7pxjReVu_729341d0-26e6-40b0-9015-b120da7c34f0.jpg?width=2880&q=65",
      "filename": "listing42"
    },
    "price": 3500,
    "location": "Paris, France",
    "country": "France",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    }
  },
  {
    "title": "Mountain Cabin Escape",
    "description": "Escape to a mountain cabin surrounded by breathtaking views.",
    "image": {
      "url": "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694094.jpg?t=st=1726948938~exp=1726952538~hmac=572bdac64a3bdb84b40c251eb51ceb559fdad8590d7493cbe7b399845d212bc9&w=826",
      "filename": "listing43"
    },
    "price": 1700,
    "location": "Aspen, Colorado",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8175, 39.1911]
    }
  },
  {
    "title": "Rustic Cabin in the Woods",
    "description": "A rustic cabin ideal for a peaceful retreat.",
    "image": {
      "url": "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302711.jpg?t=st=1726948874~exp=1726952474~hmac=263cdc6403aca77a2b783b9e006b63b252eb72800f9257a25d3dd0d74f14e32f&w=1800",
      "filename": "listing44"
    },
    "price": 1600,
    "location": "Flagstaff, Arizona",
    "country": "USA",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-111.6513, 35.1983]
    }
  },
  {
    "title": "Charming Cottage in the Countryside",
    "description": "A charming cottage nestled in the beautiful countryside.",
    "image": {
      "url": "https://img.freepik.com/premium-photo/charming-english-cottage-countryside_604472-89772.jpg?w=1800",
      "filename": "listing45"
    },
    "price": 2200,
    "location": "Cotswolds, England",
    "country": "UK",
    "reviews": [],
    "owner": "66eee3e93172f88a855c160c",
    "geometry": {
      "type": "Point",
      "coordinates": [-1.7824, 51.7889]
    }
  }
]


module.exports = { data: sampleListings };