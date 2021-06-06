// Main details container
const detailsContainer = document.querySelector(".details");

// API handling
const url = "https://patsflowerpower.eu/wp-json/wc/store/products/";
const errorContainer = document.querySelector(".error-container");

// Query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Fetch API
async function makeApiCall() {
    try {
        const response = await fetch(url + id);

        const json = await response.json();

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
                <img id="mainModal" src="${json.images[0].src}" alt="${json.images[0].alt}">
            </div>
            <div class="media-gallery">
                <div class="gallery">
                    <img id="galleryModal1" src="${json.images[1].src}" alt="${json.images[1].alt}">
                </div>
                <div class="gallery">
                    <img id="galleryModal2" src="${json.images[2].src}" alt="${json.images[2].alt}">
                </div>
                <div class="gallery">
                    <img id="galleryModal3" src="${json.images[3].src}" alt="${json.images[3].alt}">
                </div>
                <div class="gallery">
                    <img id="galleryModal4" src="${json.images[4].src}" alt="${json.images[4].alt}">
                </div>
            </div>
        </div>
        <div id="modal1" class="modal1">
            <div class="modal-content">
                <span class="closeBtn exitMainModal">&times;</span>
                <img src="${json.images[0].src}" alt="">
            </div>
        </div>
        <div id="modal2" class="modal2">
            <div class="modal-content">
                <span class="closeBtn exitGalleryModal1">&times;</span>
                <img src="${json.images[1].src}" alt="">
            </div>
        </div>
        <div id="modal3" class="modal3">
            <div class="modal-content">
                <span class="closeBtn exitGalleryModal2">&times;</span>
                <img src="${json.images[2].src}" alt="">
            </div>
        </div>
        <div id="modal4" class="modal4">
            <div class="modal-content">
                <span class="closeBtn exitGalleryModal3">&times;</span>
                <img src="${json.images[3].src}" alt="">
            </div>
        </div>
        <div id="modal5" class="modal5">
            <div class="modal-content">
                <span class="closeBtn exitGalleryModal4">&times;</span>
                <img src="${json.images[4].src}" alt="">
            </div>
        </div>
        `;

        // Get open modal images
        const mainModal = document.querySelector('#mainModal');
        const GalleryModal1 = document.querySelector('#galleryModal1');
        const GalleryModal2 = document.querySelector('#galleryModal2');
        const GalleryModal3 = document.querySelector('#galleryModal3');
        const GalleryModal4 = document.querySelector('#galleryModal4');

        // Get close buttons
        const exitMainModal = document.querySelector('.exitMainModal');
        const exitGalleryModal1 = document.querySelector('.exitGalleryModal1');
        const exitGalleryModal2 = document.querySelector('.exitGalleryModal2');
        const exitGalleryModal3 = document.querySelector('.exitGalleryModal3');
        const exitGalleryModal4 = document.querySelector('.exitGalleryModal4');
        

        // Listen for open click
        mainModal.addEventListener('click', openMainModal);
        GalleryModal1.addEventListener('click', openGalleryModal1);
        GalleryModal2.addEventListener('click', openGalleryModal2);
        GalleryModal3.addEventListener('click', openGalleryModal3);
        GalleryModal4.addEventListener('click', openGalleryModal4);

        // Listen for close click
        exitMainModal.addEventListener('click', closeMainModal);
        exitGalleryModal1.addEventListener('click', closeGalleryModal1);
        exitGalleryModal2.addEventListener('click', closeGalleryModal2);
        exitGalleryModal3.addEventListener('click', closeGalleryModal3);
        exitGalleryModal4.addEventListener('click', closeGalleryModal4);

        // Listen for outside click 
        window.addEventListener('click', outsideClick);

        // Function to open main modal
        function openMainModal(){
            modal1.style.display = 'block';
        }
        // Function to open gallery modal 1
        function openGalleryModal1(){
            modal2.style.display = 'block';
        }
        // Function to open gallery modal 2
        function openGalleryModal2(){
            modal3.style.display = 'block';
        }
        // Function to open gallery modal 3
        function openGalleryModal3(){
            modal4.style.display = 'block';
        }
        // Function to open gallery modal 4
        function openGalleryModal4(){
            modal5.style.display = 'block';
        }

        // Function to close main modal
        function closeMainModal(){
            modal1.style.display = 'none';
        }
        // Function to close gallery modal 1
        function closeGalleryModal1(){
            modal2.style.display = 'none';
        }
        // Function to close gallery modal 2
        function closeGalleryModal2(){
            modal3.style.display = 'none';
        }
        // Function to close gallery modal 3
        function closeGalleryModal3(){
            modal4.style.display = 'none';
        }
        // Function to close gallery modal 4
        function closeGalleryModal4(){
            modal5.style.display = 'none';
        }

        // Function to close on outside click
        function outsideClick(e){
            if(e.target == modal1) {
                modal1.style.display = 'none'; 
            }
            if(e.target == modal2) {
                modal2.style.display = 'none'; 
            }
            if(e.target == modal3) {
                modal3.style.display = 'none'; 
            }
            if(e.target == modal4) {
                modal4.style.display = 'none'; 
            }
            if(e.target == modal5) {
                modal5.style.display = 'none'; 
            }
        }  
    } catch (error) {
        console.log(error);
        errorContainer.innerHTML = displayError();
    }
}

makeApiCall();
