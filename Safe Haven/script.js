// Property Data (30+ properties)
const properties = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Lagos",
        price: 85000000,
        bedrooms: 5,
        bathrooms: 4,
        size: "450 sqm",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
        description: "Stunning luxury villa with modern amenities, swimming pool, and beautiful garden. Located in a prime area with 24/7 security."
    },
    {
        id: 2,
        title: "Modern Apartment",
        location: "Abuja",
        price: 25000000,
        bedrooms: 3,
        bathrooms: 2,
        size: "180 sqm",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
        description: "Beautiful modern apartment with great city views. Features include parking space, gym access, and security."
    },
    {
        id: 3,
        title: "Beachfront Property",
        location: "Lagos",
        price: 95000000,
        bedrooms: 6,
        bathrooms: 5,
        size: "550 sqm",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
        description: "Exclusive beachfront property with private beach access. Perfect for luxury living with breathtaking ocean views."
    },
    {
        id: 4,
        title: "Family Duplex",
        location: "Port Harcourt",
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "320 sqm",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600",
        description: "Spacious family duplex in a serene environment. Features a large compound and modern fittings."
    },
    {
        id: 5,
        title: "Penthouse Suite",
        location: "Lagos",
        price: 78000000,
        bedrooms: 4,
        bathrooms: 4,
        size: "400 sqm",
        image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600",
        description: "Luxurious penthouse with panoramic city views. Includes rooftop terrace and premium finishes."
    },
    {
        id: 6,
        title: "Cozy Bungalow",
        location: "Ibadan",
        price: 18000000,
        bedrooms: 3,
        bathrooms: 2,
        size: "200 sqm",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
        description: "Charming bungalow perfect for small families. Well-maintained with a beautiful garden."
    },
    {
        id: 7,
        title: "Executive Mansion",
        location: "Abuja",
        price: 98000000,
        bedrooms: 7,
        bathrooms: 6,
        size: "650 sqm",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
        description: "Grand executive mansion with state-of-the-art facilities. Perfect for prestigious living."
    },
    {
        id: 8,
        title: "Smart Home",
        location: "Lagos",
        price: 55000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "350 sqm",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
        description: "Fully automated smart home with cutting-edge technology and modern design."
    },
    {
        id: 9,
        title: "Garden Estate Villa",
        location: "Enugu",
        price: 42000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "300 sqm",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        description: "Beautiful villa in a gated estate with lush gardens and recreational facilities."
    },
    {
        id: 10,
        title: "Studio Apartment",
        location: "Lagos",
        price: 8000000,
        bedrooms: 1,
        bathrooms: 1,
        size: "65 sqm",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
        description: "Compact and efficient studio apartment perfect for young professionals."
    },
    {
        id: 11,
        title: "Terrace House",
        location: "Abuja",
        price: 35000000,
        bedrooms: 3,
        bathrooms: 3,
        size: "220 sqm",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
        description: "Modern terrace house in a well-planned estate with excellent amenities."
    },
    {
        id: 12,
        title: "Country Home",
        location: "Ibadan",
        price: 32000000,
        bedrooms: 5,
        bathrooms: 3,
        size: "400 sqm",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600",
        description: "Peaceful country home with large land space, perfect for farming or relaxation."
    },
    {
        id: 13,
        title: "Minimalist House",
        location: "Lagos",
        price: 48000000,
        bedrooms: 3,
        bathrooms: 2,
        size: "280 sqm",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600",
        description: "Sleek minimalist design with open floor plan and natural lighting."
    },
    {
        id: 14,
        title: "Waterfront Duplex",
        location: "Port Harcourt",
        price: 62000000,
        bedrooms: 5,
        bathrooms: 4,
        size: "420 sqm",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600",
        description: "Stunning waterfront duplex with boat dock and spectacular water views."
    },
    {
        id: 15,
        title: "Urban Loft",
        location: "Lagos",
        price: 38000000,
        bedrooms: 2,
        bathrooms: 2,
        size: "150 sqm",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
        description: "Trendy urban loft with industrial design elements and city center location."
    },
    {
        id: 16,
        title: "Colonial House",
        location: "Enugu",
        price: 28000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "350 sqm",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600",
        description: "Classic colonial-style house with vintage charm and modern updates."
    },
    {
        id: 17,
        title: "Eco-Friendly Home",
        location: "Abuja",
        price: 52000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "380 sqm",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600",
        description: "Sustainable eco-friendly home with solar panels and rainwater harvesting."
    },
    {
        id: 18,
        title: "Gated Estate House",
        location: "Lagos",
        price: 67000000,
        bedrooms: 5,
        bathrooms: 4,
        size: "450 sqm",
        image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600",
        description: "Premium house in exclusive gated estate with clubhouse and sports facilities."
    },
    {
        id: 19,
        title: "Serviced Apartment",
        location: "Abuja",
        price: 22000000,
        bedrooms: 2,
        bathrooms: 2,
        size: "120 sqm",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
        description: "Fully serviced apartment with hotel-like amenities and management."
    },
    {
        id: 20,
        title: "Mediterranean Villa",
        location: "Lagos",
        price: 89000000,
        bedrooms: 6,
        bathrooms: 5,
        size: "520 sqm",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600",
        description: "Exquisite Mediterranean-style villa with pool, fountain, and luxury interiors."
    },
    {
        id: 21,
        title: "Compact Family Home",
        location: "Port Harcourt",
        price: 26000000,
        bedrooms: 3,
        bathrooms: 2,
        size: "210 sqm",
        image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198w=600",
        description: "Well-designed compact home perfect for growing families on a budget."
    },
    {
        id: 22,
        title: "Highrise Condo",
        location: "Lagos",
        price: 44000000,
        bedrooms: 3,
        bathrooms: 3,
        size: "200 sqm",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
        description: "Modern condo on high floor with elevator, gym, and concierge service."
    },
    {
        id: 23,
        title: "Ranch Style Home",
        location: "Ibadan",
        price: 31000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "380 sqm",
        image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600",
        description: "Spacious ranch-style home with large open spaces and rustic appeal."
    },
    {
        id: 24,
        title: "Contemporary Duplex",
        location: "Abuja",
        price: 58000000,
        bedrooms: 5,
        bathrooms: 4,
        size: "410 sqm",
        image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600",
        description: "Ultra-modern duplex with clean lines, smart features, and premium location."
    },
    {
        id: 25,
        title: "Townhouse",
        location: "Lagos",
        price: 41000000,
        bedrooms: 4,
        bathrooms: 3,
        size: "280 sqm",
        image: "https://images.unsplash.com/photo-1600573472556-e636c2acbddf?w=600",
        description: "Stylish townhouse in vibrant neighborhood with shops and restaurants nearby."
    },
    {
        id: 26,
        title: "Hilltop Mansion",
        location: "Enugu",
        price: 72000000,
        bedrooms: 6,
        bathrooms: 5,
        size: "580 sqm",
        image: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=600",
        description: "Majestic hilltop mansion with panoramic views and expansive grounds."
    },
    {
        id: 27,
        title: "Starter Home",
        location: "Ibadan",
        price: 12000000,
        bedrooms: 2,
        bathrooms: 2,
        size: "140 sqm",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600",
        description: "Affordable starter home perfect for first-time buyers or investors."
    },
    {
        id: 28,
        title: "Lakeside Retreat",
        location: "Port Harcourt",
        price: 68000000,
        bedrooms: 5,
        bathrooms: 4,
        size: "480 sqm",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
        description: "Serene lakeside property with private dock and stunning sunset views."
    },
    {
        id: 29,
        title: "Luxury Penthouse",
        location: "Abuja",
        price: 92000000,
        bedrooms: 5,
        bathrooms: 5,
        size: "500 sqm",
        image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600",
        description: "Top-floor penthouse with private elevator, terrace, and unmatched luxury."
    },
    {
        id: 30,
        title: "Investment Property",
        location: "Lagos",
        price: 34000000,
        bedrooms: 3,
        bathrooms: 3,
        size: "240 sqm",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600",
        description: "Great investment opportunity in developing area with high rental potential."
    }
];

// DOM Elements
const propertiesGrid = document.getElementById('propertiesGrid');
const locationFilter = document.getElementById('location');
const bedroomsFilter = document.getElementById('bedrooms');
const minPriceRange = document.getElementById('minPrice');
const maxPriceRange = document.getElementById('maxPrice');
const priceValue = document.getElementById('priceValue');
const propertyCount = document.getElementById('propertyCount');
const resetBtn = document.getElementById('resetBtn');
const propertyModal = document.getElementById('propertyModal');
const contactModal = document.getElementById('contactModal');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// Initialize
let currentProperty = null;
let filteredProperties = [...properties];

// Render Properties
function renderProperties(propertiesToRender) {
    propertiesGrid.innerHTML = '';
    
    propertiesToRender.forEach((property, index) => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card glass';
        propertyCard.style.animationDelay = `${index * 0.1}s`;
        
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">For Sale</span>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </p>
                <p class="property-price">₦${formatPrice(property.price)}</p>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} Beds</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Baths</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.size}</span>
                    </div>
                </div>
                <button class="btn-view-details" onclick="openPropertyModal(${property.id})">
                    View Details
                </button>
            </div>
        `;
        
        propertiesGrid.appendChild(propertyCard);
    });
    
    propertyCount.textContent = propertiesToRender.length;
}

// Format Price
function formatPrice(price) {
    if (price >= 1000000) {
        return (price / 1000000).toFixed(1) + 'M';
    }
    return price.toLocaleString();
}

// Filter Properties
function filterProperties() {
    const location = locationFilter.value;
    const bedrooms = bedroomsFilter.value;
    const minPrice = parseInt(minPriceRange.value) * 1000000;
    const maxPrice = parseInt(maxPriceRange.value) * 1000000;
    
    filteredProperties = properties.filter(property => {
        const matchLocation = location === 'all' || property.location === location;
        const matchBedrooms = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);
        const matchPrice = property.price >= minPrice && property.price <= maxPrice;
        
        return matchLocation && matchBedrooms && matchPrice;
    });
    
    renderProperties(filteredProperties);
}

// Update Price Range Display
function updatePriceDisplay() {
    const min = minPriceRange.value;
    const max = maxPriceRange.value;
    
    if (parseInt(min) > parseInt(max)) {
        minPriceRange.value = max;
    }
    
    priceValue.textContent = `₦${minPriceRange.value}M - ₦${maxPriceRange.value}M`;
    filterProperties();
}

// Open Property Modal
function openPropertyModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    currentProperty = property;
    
    document.getElementById('modalImage').src = property.image;
    document.getElementById('modalTitle').textContent = property.title;
    document.getElementById('modalLocation').textContent = property.location;
    document.getElementById('modalPrice').textContent = `₦${formatPrice(property.price)}`;
    document.getElementById('modalBeds').textContent = `${property.bedrooms} Bedrooms`;
    document.getElementById('modalBaths').textContent = `${property.bathrooms} Bathrooms`;
    document.getElementById('modalSize').textContent = property.size;
    document.getElementById('modalDescription').textContent = property.description;
    
    propertyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modals
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open Contact Modal
document.getElementById('contactAgentBtn').addEventListener('click', () => {
    propertyModal.classList.remove('active');
    contactModal.classList.add('active');
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you, ${name}! We'll contact you soon about ${currentProperty.title}`);
    
    contactForm.reset();
    closeModal(contactModal);
});

// Event Listeners
locationFilter.addEventListener('change', filterProperties);
bedroomsFilter.addEventListener('change', filterProperties);
minPriceRange.addEventListener('input', updatePriceDisplay);
maxPriceRange.addEventListener('input', updatePriceDisplay);

resetBtn.addEventListener('click', () => {
    locationFilter.value = 'all';
    bedroomsFilter.value = 'all';
    minPriceRange.value = 1;
    maxPriceRange.value = 100;
    updatePriceDisplay();
});

// Modal Close Buttons
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        closeModal(modal);
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Hamburger Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initial Render
renderProperties(properties);