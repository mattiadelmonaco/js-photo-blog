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
            
            colPhotoElm.innerHTML += `
            <div class="col">
                <img class="col--pin" src="img/pin.svg" alt="Photo's pin">
                    <div class="col--image">
                        <img class="loading col--image__fit" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif" alt="loading">
                        <img class="col--image__fit photo" src="${imageUrl}" alt="${imageTitle}">
                    </div>
                <p class="col--image--title">${imageTitle}</p>
            </div>
            `
            }

        const cards = document.querySelectorAll(".col")
        const overlayImage = overlayElm.querySelector("img")
        
        cards.forEach((card) => {
            card.addEventListener("click", () => {
        
                const imgSrc = card.querySelector(".photo")
                overlayImage.src = imgSrc.src

                overlayElm.classList.remove("hidden")
            })
        })

        overlayBtn.addEventListener("click", () => {
            overlayElm.classList.add("hidden")
        })

        
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

const colPhotoElm = document.getElementById("col-photo")
const containerImageElm = document.querySelectorAll(".col--image")
const titleImageElm = document.querySelectorAll(".col--image--title")
const overlayElm = document.getElementById("overlay")
const overlayBtn = document.getElementById("overlay-btn")
const overlayEmpty = document.getElementById("overlay-empty")

// EVENTS

// On page load

photoCard()