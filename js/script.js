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
                        <img class="col--image__fit" src="${imageUrl}" alt="${imageTitle}">
                    </div>
                <p class="col--image--title">${imageTitle}</p>
            </div>
            `
            }

        }).finally(() => {
            const loadingElms = document.querySelectorAll(".loading")
            loadingElms.forEach(loadingElm => loadingElm.classList.add("hidden"))
        })
}


// DOM ELEMENTS 

const colPhotoElm = document.getElementById("col-photo")
const containerImageElm = document.querySelectorAll(".col--image")
const titleImageElm = document.querySelectorAll(".col--image--title")

// EVENTS

// On page load

photoCard()