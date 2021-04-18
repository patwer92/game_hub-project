const url = "https://patsflowerpower.eu/wp-json/wc/store/products";
const specificUrl = "https://patsflowerpower.eu/wp-json/wc/store/products/272";
const gamesContainer = document.querySelector(".games-container");
const highlightedGames = document.querySelector(".highlighted_games-section");


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);


        gamesContainer.innerHTML = "";

        data.forEach((products) => {

            gamesContainer.innerHTML += `<div class="rec-box">
                                        <a href="details.html?id=${products.id}">
                                            <img src="${products.images[0].src}" alt="${products.images[0].alt}">
                                        </a>
                                        <div class="small-overlay">
                                            <div class="small-text">
                                                <h5>${products.name}</h5>

                                                <p>Standard Edition</p>
                                                <p><strong>PC</strong></p>
                                            </div>
                                            <div class="small-price">
                                                <p class="small_price-text">
                                                    <span class="small_prev-price">£${products.prices.regular_price}</span>
                                                    <span class="small_current-price">£${products.prices.price}</span>
                                                </p>
                                                <div class="small-discount">
                                                    <p>-13%</p>
                                                </div>
                                            </div>
                                            <div class="small_call-to-action">
                                                <a href="checkout.html" class="small_cart-btn">
                                                    <img
                                                        id="small_cart-icon"
                                                        src="/images/icons/cart-icon.png"
                                                        alt="Shopping Cart Icon"/> 
                                                    add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div> `;
            
        });

    } catch (error) {
        console.log(error);
        gamesContainer.innerHTML = displayError();
    }
}

makeApiCall();

async function singleApiCall() {
    try {
        const response = await fetch(specificUrl);
        const json = await response.json();
        console.log(json.images[0].src);
        highlightedGames.innerHTML = "";
        highlightedGames.innerHTML +=`
                                        <div class="highlighted">
                                        <div class="game-nav highlighted_nav-width">
                                            <div class="previousgame">
                                                <p><</p>
                                            </div>
                                            <div class="nextgame">
                                                <p>></p>
                                            </div>
                                        </div>
                                        <div class="highlighted-games">
                                            <a href="details.html?id=${json.id}">
                                                <img src="${json.images[0].src}" alt="${json.images[0].alt}"> 
                                            </a>
                                            <div class="overlay">
                                                <div class="overlay-text">
                                                    <h4>${json.name}</h4>
                                                    <p>Standard Edition</p>
                                                    <p><strong>PC</strong></p>
                                                </div>
                                                <div class="overlay-price">
                                                    <p class="price-text">
                                                        <span class="previous-price">£${json.prices.regular_price}</span>
                                                        <span class="current-price">£${json.prices.price}</span>
                                                    </p>
                                                    <div class="discount">
                                                        <p>-13%</p>
                                                    </div>
                                                </div>
                                                <div class="overlay_call-to-action">
                                                    <a href="checkout.html" class="overlay_cart-btn">
                                                            <img
                                                                id="overlay_cart-icon"
                                                                src="/images/icons/cart-icon.png"
                                                                alt="Shopping Cart Icon"/>
                                                        add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="nav-dots" id="games">
                                            <div class="nav-circle circle1"></div>
                                            <div class="nav-circle circle2"></div>
                                            <div class="nav-circle circle3"></div>
                                            <div class="nav-circle circle4"></div>
                                            <div class="nav-circle circle5"></div>
                                        </div>
                                        `;
    } catch (error) {
        console.log(error);
        highlightedGames.innerHTML = `<div class="error-container">${displayError()}</div>`
    }
}

singleApiCall();