const items = [
  {
    name: "Bonnie Bucket Hat",
    image: "items/Item1.jpg",
    price: "1,395.00",
    rating: 4.5,
    category: "hat",
    description: "This is a stylish and trendy bucket hat made from high-quality materials.",
  },
  {
    name: "Air Jordan Duffle Bag",
    image: "items/Item2.jpg",
    price: "850.00",
    rating: 4.2,
    category: "bag",
    description: "A durable duffle bag with the iconic Air Jordan branding, perfect for carrying your gear in style.",
  },
  {
    name: "Air Jordan Retro 1 R&B",
    image: "items/Item3.jpg",
    price: "24,015.00",
    rating: 5.0,
    category: "shoe",
    description: "The classic Air Jordan Retro 1 shoes in a stylish and unique R&B colorway.",
  },
  {
    name: "Just Do It. T's Manga",
    image: "items/Item4.jpg",
    price: "109.99",
    rating: 5.0,
    category: "clothes",
    description: "Express your love for manga with this 'Just Do It.' T-shirt featuring captivating illustrations.",
  },
  {
    name: "Jordan Crew-Neck",
    image: "items/Item5.jpg",
    price: "3,295.00",
    rating: 4.0,
    category: "clothes",
    description: "Stay comfortable and stylish with this Jordan Crew-Neck sweatshirt, perfect for everyday wear.",
  },
  {
    name: "Jordan Basketball",
    image: "items/Item6.jpg",
    price: "1,658.00",
    rating: 4.2,
    category: "gears",
    description: "Take your game to the next level with this high-quality Jordan basketball designed for optimal performance.",
  },
  {
    name: "Jordan Golf Bag",
    image: "items/Item7.jpg",
    price: "13,817.99",
    rating: 4.9,
    category: "bag",
    description: "Carry your golf clubs and accessories in style with this premium Jordan golf bag.",
    
  },
  {
    name: "Jordan Pro Jumpman",
    image: "items/Item8.jpg",
    price: "1,390.00",
    rating: 4.4,
    category: "hat",
    description: "Sport the iconic Jordan Jumpman logo with this stylish and comfortable pro hat.",
  },
  {
    name: "Women's Slide",
    image: "items/Item9.jpg",
    price: "1,255.50",
    rating: 4.6,
    category: "shoe",
    description: "Step out in comfort and style with these women's slides featuring a sleek design and cushioned footbed.",
  },
  {
    name: "Phoenix Fleece",
    image: "items/Item10.jpg",
    price: "3,500.00",
    rating: 4.7,
    category: "clothes",
    description: "Stay warm and cozy with this Phoenix fleece hoodie, perfect for chilly days and outdoor activities.",
  },
  {
    name: "Tech fleece sling bag",
    image: "items/Item11.jpg",
    price: "1200.00",
    rating: 4.1,
    category: "bag",
    description: "Carry your essentials in style with this tech fleece sling bag, designed for convenience and durability.",
  },
  {
    name: "Hoops elite pro",
    image: "items/Item12.jpg",
    price: "3,695.00",
    rating: 4.3,
    category: "bag",
    description: "Get comfortable with the new hoops elite pro, cotton made for comforting feeling",
  },
  {
    name: "Air tech fleece GX jacket",
    image: "items/Item13.jpg",
    price: "7461.99",
    rating: 4.1,
    category: "clothes",
    description: "The 'Air Tech Fleece GX Jacket' is a high-quality and stylish jacket designed for both fashion and functionality.",
  },
  {
    name: "Pro Dri-Fit Long-Sleeve",
    image: "items/Item14.jpg",
    price: "1,395.00",
    rating: 4.9,
    category: "clothes",
    description: "The 'Pro Dri-Fit Long-Sleeve' is a high-performance long-sleeve shirt designed for athletes and active individuals",
  },
  {
    name: "Dri-Fit Basketball",
    image: "items/Item15.jpg",
    price: "1,999.99",
    rating: 4.2,
    category: "clothes",
    description: "The 'Dri-Fit Basketball' is a premium basketball designed with moisture-wicking technology, providing exceptional grip and control on the court.",
  },
  {
    name: "Dri-fit challenger",
    image: "items/Item16.jpg",
    price: "2,199.99",
    rating: 4.1,
    category: "clothes",
    description: "The 'Dri-Fit Challenger' is a high-performance athletic shirt crafted with moisture-wicking fabric, ensuring comfort and dryness during workouts, while its sleek design and durability make it a perfect choice for active individuals.",
  },
  {
    name: "Soccer ShinGuards",
    image: "items/Item17.jpg",
    price: "1,200.75",
    rating: 4.3,
    category: "gears",
    description: "The 'Soccer Shin Guards' are essential protective gears for soccer players, providing reliable and comfortable protection.",
  },
  {
    name: "Olimpic Track Spikes",
    image: "items/Item18.jpg",
    price: "3,250.50",
    rating: 4.2,
    category: "shoe",
    description: "The 'Olympic Track Spikes' are high-performance shoes designed for track and field athletes, offering exceptional speed, grip, and support.",
  },
  {
    name: "Volleyball Pads",
    image: "items/Item19.jpg",
    price: "2,500.00",
    rating: 4.4,
    category: "gears",
    description: "The 'Volleyball Pads' provide essential protection and comfort for volleyball players, ensuring safety and support during intense games.",
  },
  {
    name: "Fitness Gloves",
    image: "items/Item20.jpg",
    price: "1,250.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Fitness Gloves' offer excellent grip and protection for your hands during workouts, providing comfort and preventing blisters.", 
  },
  {
    name: "Everyday Plus Cushioned",
    image: "items/Item21.jpg",
    price: "759.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Everyday Plus Cushioned' offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Dri-FIT Everyday",
    image: "items/Item22.jpg",
    price: "839.00",
    rating: 4.9,
    category: "gears",
    description: "The 'DRI-Fit' sport socks offers ultimate comfort for everyday activities, including sports.",
  },
  {
    name: "Jordan",
    image: "items/Item23.jpg",
    price: "995.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Jordan socks' offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Everyday Plus",
    image: "items/Item24.jpg",
    price: "1,119.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Everyday Plus' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Everyday Plus",
    image: "items/Item25.jpg",
    price: "845.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Everyday Plus' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "ACG",
    image: "items/Item26.jpg",
    price: "629.00",
    rating: 4.9,
    category: "gears",
    description: "The 'ACG' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Dri-FIT",
    image: "items/Item27.jpg",
    price: "1395.00",
    rating: 4.9,
    category: "gears",
    description: "The 'Dri-Fit' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Everyday Plus",
    image: "items/Item28.jpg",
    price: "799.00",
    rating: 4.9,
    category: "gears",
    description:"The 'Everyday Plus' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Everyday Lightweight",
    image: "items/Item29.jpg",
    price: "845.00",
    rating: 4.9,
    category: "gears",
    description:"The 'Everyday Lightweight' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Everyday Essentials",
    image: "items/Item30.jpg",
    price: "945.00",
    rating: 4.9,
    category: "gears",
    description:"The 'Everyday Essentials' sport socks offers ultimate comfort and support for everyday activities, making it an essential gear for your daily routines.",
  },
  {
    name: "Air Jordan 1 Mid",
    image: "items/Item31.jpg",
    price: "7,095.00",
    rating: 4.7,
    category: "shoe",
    description: "The 'Air Jordan 1 Mid' is a classic and iconic shoe known for its timeless style and superior performance, making it a must-have for sneaker enthusiasts.",
  },
  {
    name: "Jordan Max Aura",
    image: "items/Item32.jpg",
    price: "6,575.00",
    rating: 4.8,
    category: "shoe",
    description: "The 'Jordan Max Aura' is a stylish and high-performance shoe that combines modern design with classic Jordan heritage, delivering exceptional style and comfort.",
  },
  {
    name: "Air Jordan 1 RTHOG",
    image: "items/Item33.jpg",
    price: "8,550.00",
    rating: 4.9,
    category: "shoe",
    description: "The 'Air Jordan 1 RTHOG' is a coveted shoe with a distinctive design, showcasing a perfect blend of style and performance for sneaker enthusiasts.",
  },
  {
    name: "Sb Bruin High skate",
    image: "items/Item34.jpg",
    price: "6,570.00",
    rating: 4.7,
    category: "shoe",
    description: "The 'SB Bruin High Skate' is a high-quality skate shoe that combines style and functionality, providing excellent performance on and off the skateboard.",
  },
  {
    name: "Air Huarache Premium",
    image: "items/Item35.jpg",
    price: "4,905.99",
    rating: 4.6,
    category: "shoe",
    description: "The 'Air Huarache Premium' is a premium shoe known for its sleek design, superior comfort, and exceptional style, making it a top choice for sneaker enthusiasts.", 
  },
  {
    name: "Metcon 8",
    image: "items/Item36.jpg",
    price: "109.99",
    rating: 4.9,
    category: "shoe",
    description: "The 'Metcon 8' is a versatile and high-performance shoe designed for athletes and fitness enthusiasts, offering durability, stability, and comfort for all types of workouts.",
  },
  {
    name: "Air Max 95",
    image: "items/Item37.jpg",
    price: "5,999.99",
    rating: 4.8,
    category: "shoe",
    description: "The 'Air Max 95' is an iconic shoe known for its distinctive design, exceptional cushioning, and timeless style, making it a favorite among sneaker enthusiasts.",
  },
  {
    name: "Air Max Plus",
    image: "items/Item38.jpg",
    price: "8,105.00",
    rating: 4.8,
    category: "shoe",
    description: "The 'Air Max Plus' is a highly sought-after shoe recognized for its unique design, exceptional comfort, and unmatched style, making it a true statement piece for sneaker enthusiasts.",
  },
  {
    name: "GT Jump",
    image: "items/Item39.jpg",
    price: "7,679.00",
    rating: 4.7,
    category: "shoe",
    description: "The 'GT Jump' is a high-performance shoe designed for athletes, offering superior traction, stability, and cushioning for optimal performance in various sports and activities.",
  },
  {
    name: "Impact 4",
    image: "items/Item40.jpg",
    price: "4,799.00",
    rating: 4.7,
    category: "shoe",
    description: "The 'Impact 4' is a versatile and durable shoe built for intense activities, providing exceptional support, comfort, and traction for all-day performance.",
  },
  {
    name: "Hayward 2.0",
    image: "items/Item41.jpg",
    price: "4,800.00",
    rating: 4.8,
    category: "bag",
    description: "The 'Hayward 2.0' is a stylish and functional bag designed for everyday use, offering ample storage space and durability for your essentials.",
  },
  {
    name: "ACG Asysen",
    image: "items/Item42.jpg",
    price: "9,600.00",
    rating: 4.7,
    category: "bag",
    description: "The 'ACG Asysen' is a versatile and rugged bag built for outdoor adventures, providing durability, functionality, and ample storage for all your gear.",
  },
  {
      name: "Killshot 2 Leather",
      image: "items/Item43.jpg",
      price: "5,101.00",
      rating: 4.7,
      category: "shoe",
      description: "The 'Killshot 2 Leather' is a classic and stylish shoe known for its timeless design, premium leather construction, and versatile appeal.",
  },
  {
      name: "Air Max SYSTM",
      image: "items/Item44.jpg",
      price: "4,995.00",
      rating: 4.7,
      category: "shoe",
      description: "The 'Air Max SYSTM' is a sleek and high-performance shoe featuring advanced cushioning technology and a modern design, delivering comfort and style in every step.",
  },
  {
      name: "Pegasus Turbo",
      image: "items/Item45.jpg",
      price: "7,465.00",
      rating: 4.7,
      category: "shoe",
  },
  {
      name: "Air VaporMax",
      image: "items/Item46.jpg",
      price: "8,799.00",
      rating: 4.7,
      category: "shoe",
      description:"The 'Air VaporMax' is a revolutionary shoe known for its lightweight construction, superior cushioning, and futuristic design, providing an unparalleled running experience.",
  },
  {
      name: "Zegama",
      image: "items/Item47.jpg",
      price: "8,105.00",
      rating: 4.7,
      category: "shoe",
      description: "The 'Zegama' is a high-performance shoe designed for trail running, offering excellent traction, stability, and comfort on rugged terrains.",
  },
  {
      name: "Football Shinguards",
      image: "items/Item48.jpg",
      price: "815.00",
      rating: 4.7,
      category: "gears",
      description: "The 'Football Shinguards' provide essential protection and comfort for football players, ensuring safety during intense matches and training sessions.",
  },
  {
      name: "Pro Therma Hood",
      image: "items/Item49.jpg",
      price: "1,795.00",
      rating: 4.7,
      category: "gears",
      description: "The 'Pro Therma Hood' is a high-quality gear designed to provide warmth and comfort during cold weather activities, keeping you protected and focused on your performance.",
  },
  {
      name: "Hardplate Football",
      image: "items/Item50.jpg",
      price: "2,415.00",
      rating: 4.7,
      category: "gears",
      description: "The 'Hardplate Football' is a durable and high-performance gear designed for football players, featuring reinforced panels for enhanced durability and exceptional performance on the field.",
  },
  {
      name: "Combat Elbow Sleeve",
      image: "items/Item51.jpg",
      price: "1,799.00",
      rating: 4.7,
      category: "gears",
      description: "The 'Combat Elbow Sleeve' is a protective gear designed to provide support and protection for the elbow during combat sports and intense training sessions.",
  },
  {
      name: "Statement Jacket",
      image: "items/Item52.jpg",
      price: "5,750.00",
      rating: 4.5,
      category: "clothes",
      description: "The 'Statement Jacket' is a fashionable and eye-catching jacket that adds a touch of style and sophistication to any outfit, making it a must-have wardrobe staple.",
  },
  {
      name: "Bucket Hat",
      image: "items/Item53.jpg",
      price: "1,400.00",
      rating: 4.3,
      category: "hat",
      description: "The 'Bucket Hat' is a trendy and versatile hat that combines style and sun protection, making it a fashionable accessory for any casual or outdoor outfit."
  },
  {
      name: "Air Classic99",
      image: "items/Item54.jpg",
      price: "893.00",
      rating: 4.3,
      category: "hat",
      description: "The 'Air Classic99' is a stylish and comfortable hat featuring a classic design and iconic branding, making it a go-to accessory for a sporty and casual look.",
  },
  {
      name: "AeroBill Visor",
      image: "items/Item55.jpg",
      price: "750.00",
      rating: 4.1,
      category: "hat",
      description: "The 'AeroBill Visor' is a sleek and lightweight hat that offers sun protection and breathability, perfect for outdoor activities and sports.",
  },
  {
      name: "Cuffed Pom Beanie",
      image: "items/Item56.jpg",
      price: "1,200.00",
      rating: 4.3,
      category: "hat",
      description: "The 'Cuffed Pom Beanie' is a cozy and stylish hat featuring a cuffed design and a playful pom-pom, perfect for adding warmth and style to your winter outfits.",
  }
];
const clothesItems = [];
const bagItems = [];
const shoeItems = [];
const hatItems = [];
const gearsItems = [];

items.forEach((item) => {
  if (item.category === "clothes") {
    clothesItems.push(item);
  } else if (item.category === "bag") {
    bagItems.push(item);
  } else if (item.category === "shoe") {
    shoeItems.push(item);
  } else if (item.category === "hat") {
    hatItems.push(item);
  } else if (item.category === "gears") {
    gearsItems.push(item);
  }
});

let clothesIndex = 0;
let bagIndex = 0;
let shoeIndex = 0;
let hatIndex = 0;
let gearsIndex = 0;

function showModal(item) {
  const modalTitle = document.getElementById("itemModalLabel");
  modalTitle.textContent = item.name;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="img-fluid">
    <p><strong>Price:</strong> $${item.price}</p>
    <p><strong>Rating:</strong> ${item.rating}</p>
    <p><strong>Description:</strong> ${item.description}</p>
    <button class="btn btn-primary">Buy Now</button>
    <button class="btn btn-secondary">Add to Cart</button>
  `;

  const myModal = new bootstrap.Modal(document.getElementById("itemModal"));
  myModal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  const itemElements = document.getElementsByClassName("item-holder");
  const modals = document.getElementsByClassName("modal");

  for (let i = 0; i < itemElements.length; i++) {
    const itemElement = itemElements[i];
    const modal = modals[i];

    itemElement.addEventListener("click", () => {
      const item = items[i];
      showModal(item, modal);
    });
  }

  const clothesSection = document.getElementById("clothes-section");
  clothesSection.addEventListener("click", () => {
    if (clothesItems.length > 0) {
      showModal(clothesItems[clothesIndex]);
      clothesIndex = (clothesIndex + 1) % clothesItems.length;
    }
  });

  const bagSection = document.getElementById("bag-section");
  bagSection.addEventListener("click", () => {
    if (bagItems.length > 0) {
      showModal(bagItems[bagIndex]);
      bagIndex = (bagIndex + 1) % bagItems.length;
    }
  });

  const shoeSection = document.getElementById("shoe-section");
  shoeSection.addEventListener("click", () => {
    if (shoeItems.length > 0) {
      showModal(shoeItems[shoeIndex]);
      shoeIndex = (shoeIndex + 1) % shoeItems.length;
    }
  });

  const hatSection = document.getElementById("hat-section");
  hatSection.addEventListener("click", () => {
    if (hatItems.length > 0) {
      showModal(hatItems[hatIndex]);
      hatIndex = (hatIndex + 1) % hatItems.length;
    }
  });

  const gearsSection = document.getElementById("gears-section");
  gearsSection.addEventListener("click", () => {
    if (gearsItems.length > 0) {
      showModal(gearsItems[gearsIndex]);
      gearsIndex = (gearsIndex + 1) % gearsItems.length;
    }
  });
});

function generateItemHTML(item) {
  let ratingHTML = "";
  if (item.rating !== undefined) {
    ratingHTML = `
      <span style="font-size: 0.7em; margin-top: 5px">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        ${item.rating}
      </span>
    `;
  }

  return `
    <div class="col-lg-2 col-md-4 col-sm-6 col-6">
      <div class="item-holder">
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <h4 class="item-name d-flex justify-content-between">
          <span>${item.name}</span>
          ${ratingHTML}
        </h4>
        <div class="item-price text-start">₱${item.price}</div>
      </div>
    </div>
  `;
}

function renderItems(items, containerId, sectionTitle) {
  const container = document.getElementById(containerId);
  let itemsHTML = "";
  for (const item of items) {
    if (sectionTitle === "PRODUCTS" || item.category === sectionTitle) {
      itemsHTML += generateItemHTML(item);
    }
  }
  
  if (sectionTitle !== "PRODUCTS") {
    container.innerHTML = `
      <h3 style="text-transform: uppercase; margin-top: 100px; font-weight: bold;">${sectionTitle}</h3>
      <div class="row">
        ${itemsHTML}
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="row">
        ${itemsHTML}
      </div>
    `;
  }
}

renderItems(items, "item-container", "PRODUCTS");
renderItems(clothesItems, "clothes-section", "CLOTHES");
renderItems(bagItems, "bag-section", "BAGS");
renderItems(shoeItems, "shoe-section", "SHOES");
renderItems(hatItems, "hat-section", "HATS");
renderItems(gearsItems, "gears-section", "GEARS");

const itemContainer = document.getElementById("item-container");
const clothesSection = document.getElementById("clothes-section");
const bagSection = document.getElementById("bag-section");
const shoeSection = document.getElementById("shoe-section");
const hatSection = document.getElementById("hat-section");
const gearsSection = document.getElementById("gears-section");

clothesItems.forEach((item) => {
  const clothesItemHTML = generateItemHTML(item);
  clothesSection.insertAdjacentHTML("beforeend", clothesItemHTML);
});

bagItems.forEach((item) => {
  const bagItemHTML = generateItemHTML(item);
  bagSection.insertAdjacentHTML("beforeend", bagItemHTML);
});

shoeItems.forEach((item) => {
  const shoeItemHTML = generateItemHTML(item);
  shoeSection.insertAdjacentHTML("beforeend", shoeItemHTML);
});

hatItems.forEach((item) => {
  const hatItemHTML = generateItemHTML(item);
  hatSection.insertAdjacentHTML("beforeend", hatItemHTML);
});

gearsItems.forEach((item) => {
  const gearsItemHTML = generateItemHTML(item);
  gearsSection.insertAdjacentHTML("beforeend", gearsItemHTML);
});
