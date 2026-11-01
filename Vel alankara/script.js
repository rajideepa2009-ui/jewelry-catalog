/* =================================
   WHATSAPP NUMBER
================================= */

const whatsappNumber = "919382099922";


/* =================================
   PRODUCTS

   You can edit these later.

   image:
   Put your image inside the images folder.

   Example:
   image: "images/jhumuka1.jpg"

   If you don't have an image yet,
   leave image as "".
================================= */

const products = [

    {
        name: "Elegant Jhumuka",
        category: "jhumuka",
        price: "₹ 550",
        image: "images/elegant-jhumuka.jpg",
        badge: "TRENDING"
    },

    {
        name: "White pearl Haaram with Jhumuka",
        category: "haaram",
        price: "₹ 599 ",
        image: "images/White-pearl-haaram.jpg",
        badge: "New Arrival"
    },

    {
        name: "The Golden Vaikunta Haaram",
        category: "haaram",
        price: "₹ 899 ",
        image: "images/The-Golden-Vaikunta-Haaram.jpg",
        badge: "New Arrival"
    },

    {
        name: "Ganesha Pearl Haaram with Jhumuka",
        category: "haaram",
        price: "₹ 699 ",
        image: "images/Ganesha-Pearl-Haaram-with-Jhumuka.jpg",
        badge: "New Arrival"
    },

    {
        name: "Designer Ruby Necklace",
        category: "necklace",
        price: "₹ 750",
        image: "images/designer-ruby-necklace.jpg",
        badge: "HOT SELLING"
    },
    
    {
        name: "Double layer pearl necklace with jhumuka",
        category: "necklace",
        price: "₹ 600",
        offerPrice: "₹ 540",
        image: "images/double-layer-pearl-jhumuka-green.jpg",
        images: [
        "images/double-layer-pearl-jhumuka-green.jpg",
        "images/double-layer-pearl-jhumuka-blue.jpg",
        "images/double-layer-pearl-jhumuka-violet.jpg",
        "images/double-layer-pearl-jhumuka-pink.jpg",
        "images/double-layer-pearl-jhumuka-red.jpg"
    ],

    colors: [
        "Green",
        "Blue",
        "Violet",
        "Pink",
        "Red"
    ],
        badge: "HOT SELLING"
    },

    {
        name: "Traditional Bangles",
        category: "bangles",
        price: "₹ 500",
        offerPrice: "₹ 450",    
        image: "images/traditional-bangles.jpg",
        badge: "FIRST ORDER • 10% OFF"
    },

    {
        name: "Mugappu Chain",
        category: "mugappu-chain",
        price: "₹ 450",
        image: "images/mugappu-chain.jpg",
        badge: "TRENDING"
    },

    {
        name: "Elegant Bracelet",
        category: "bracelets",
        price: "₹ ____",
        image: "",
        badge: "TRENDING"
    },

    {
        name: "2 Piece Jewellery Set",
        category: "2-piece",
        price: "₹ ____",
        image: "",
        badge: ""
    },

    {
        name: "3 Piece Jewellery Set",
        category: "3-piece",
        price: "₹ 750",
        image: "images/3-piece-jewellery-set.jpg",
        badge: "NEW"
    },

    {
    
    name: "Ear Cuff with Jhumuka",
    category: "jhumuka-cuff",
    price: "₹950",
    offerPrice: "₹855",
    image: "images/ear-cuff-jhumuka.jpg",
    badge: "FIRST ORDER • 10% OFF"

    },

    {
        name: "Bridal Jewellery Set",
        category: "bridal",
        price: "₹",
        image: "",
        badge: "BRIDAL FAVOURITE"
    }

];


/* =================================
   PRODUCT DISPLAY
================================= */

const productsGrid = document.getElementById("productsGrid");


function displayProducts(category = "all") {

    productsGrid.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);


    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        let imageHTML = "";

        if (product.image !== "") {

            imageHTML = `
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >
            `;

        } else {

            imageHTML = `
                <div class="image-placeholder">

                    <span>
                        PRODUCT IMAGE
                    </span>

                    <small>
                        Add your jewellery photo here
                    </small>

                </div>
            `;
        }


        const badgeHTML = product.badge
            ? `<div class="product-badge">${product.badge}</div>`
            : "";


        const message = encodeURIComponent(
            `Hi, I'm interested in ${product.name}. Please share the availability and details.`
        );


        card.innerHTML = `

            ${badgeHTML}

            <div class="product-image">
                ${imageHTML}
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${formatCategory(product.category)}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">

    ${
        product.offerPrice
        ? `
            <span class="original-price">
                ${product.price}
            </span>

            <span class="offer-price">
                ${product.offerPrice}
            </span>
        `
        : product.price
    }

</div>

                <a
                    href="https://wa.me/${whatsappNumber}?text=${message}"
                    target="_blank"
                    class="order-button"
                >
                    ENQUIRE ON WHATSAPP
                </a>

            </div>
        `;


        productsGrid.appendChild(card);

    });

}


/* =================================
   CATEGORY NAME
================================= */

function formatCategory(category) {

    const names = {

        "jhumuka": "Jhumuka",
        "haaram": "Haaram",
        "necklace": "Necklace",
        "bangles": "Bangles",
        "mugappu-chain": "Mugappu Chain",
        "bracelets": "Bracelets",
        "2-piece": "2 Piece Set",
        "3-piece": "3 Piece Set",
        "jhumuka-cuff": "Jhumuka with Cuff",
        "bridal": "Bridal Set"

    };

    return names[category] || category;

}


/* =================================
   CATEGORY BUTTONS
================================= */

const categoryButtons =
    document.querySelectorAll(".category-button");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.getAttribute("data-category");

        displayProducts(category);

    });

});


/* =================================
   INITIAL DISPLAY
================================= */

displayProducts();