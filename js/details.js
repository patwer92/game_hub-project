const detailsContainer = document.querySelector(".details");
const url = "https://patsflowerpower.eu/wp-json/wc/store/products/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function makeApiCall() {
    try {
        const response = await fetch(url + id);

        const json = await response.json();

        console.log(json.images[0].alt);

        detailsContainer.innerHTML = "";

        detailsContainer.innerHTML = `
        <div class="details-info">
        <div class="game-details-header">
            <h1>Game Details</h1>
        </div>
        <div class="game-details-content">

            <h2 class="game-title product-info">${json.name}</h2>
            <div class="short-description product-info">
                ${json.short_description}
            </div>
            <div class="shipping">
                <p class="product-info">Shipping: <strong>Download Only</strong></p>
            </div>  

            <div class="call-to-action">
                <div class="price-container">
                    <p class="price-text ">
                        <span class="previous-price">£${json.prices.regular_price}</span>
                        <span class="current-price">£${json.prices.price}</span>
                    </p>
                </div> 
                <div class="btn-container">
                    <a href="checkout.html" class="cart-btn">
                        <img
                            id="shoppingcart-icon"
                            src="/images/icons/cart-icon.png"
                            alt="Shopping Cart Icon"/> 
                        add to cart   
                    </a>
                </div>
            </div>
        </div>
    </div>  
    <div class="details-media">
        <div class="media-cover">
            <img src="${json.images[0].src}" alt="${json.images[0].alt}">
        </div>
        <div class="media-gallery">
            <div class="gallery">
                <img src="${json.images[1].src}" alt="${json.images[1].alt}">
            </div>
            <div class="gallery">
                <img src="${json.images[2].src}" alt="${json.images[2].alt}">
            </div>
            <div class="gallery">
                <img src="${json.images[3].src}" alt="${json.images[3].alt}">
            </div>
            <div class="gallery">
                <img src="${json.images[4].src}" alt="${json.images[4].alt}">
            </div>
        </div>
    </div>
        
        `;

    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = `<p class="error">An error has occured</p>`;
    }
}

makeApiCall();