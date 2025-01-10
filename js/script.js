// FUNCTIONS 

/**
 * function to generate 6 photocard (images by JSON placeholder)
 */
const photoCard = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
        .then(response => {
            const photosData = response.data

            for (let i = 0; i < photosData.length; i++) {
                const imageTitle = photosData[i].title;
                const imageUrl = photosData[i].url;
            
            cardPhotoElm.innerHTML += `
            <div class="card">
                <img class="card--pin" src="img/pin.svg" alt="Photo's pin">
                    <div class="card--image">
                        <img class="loading card--image__fit" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif" alt="loading">
                        <img class="card--image__fit photo" src="${imageUrl}" alt="${imageTitle}">
                    </div>
                <p class="card--image--title">${imageTitle}</p>
            </div>
            `
            }

        const cards = document.querySelectorAll(".card")
        const overlayImage = overlayElm.querySelector("img")
        
        cards.forEach((card) => {
            card.addEventListener("click", () => {
        
                const img = card.querySelector(".photo")
                overlayImage.src = img.src
                overlayImage.alt = img.alt

                overlayElm.classList.remove("hidden")
            })
        })

        overlayBtn.addEventListener("click", () => overlayElm.classList.add("hidden"))

        
        // to close overlay also with click on background

        // overlayEmpty.addEventListener("click", () => {
        //     overlayElm.classList.add("hidden")
        // })


        }).finally(() => {
            const loadingElms = document.querySelectorAll(".loading")
            loadingElms.forEach(loadingElm => loadingElm.classList.add("hidden"))
        })
}




// DOM ELEMENTS 

const cardPhotoElm = document.getElementById("card-photo")
const containerImageElm = document.querySelectorAll(".card--image")
const titleImageElm = document.querySelectorAll(".card--image--title")
const overlayElm = document.getElementById("overlay")
const overlayBtn = document.getElementById("overlay-btn")
const overlayEmpty = document.getElementById("overlay-empty")

// EVENTS

// On page load

photoCard()