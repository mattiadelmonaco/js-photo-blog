// FUNCTIONS 

/**
 * function to generate 6 photocard (images by JSON placeholder)
 */
const photoCard = () => {
    for (let i = 0; i < 6; i++) {
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
        .then(response => {
            const imageTitle = response.data[i].title
            const imageUrl = response.data[i].url
            
            colPhotoElm.innerHTML += `
            <div id="col-photo" class="col">
                <img class="col--pin" src="img/pin.svg" alt="Photo's pin">
                    <div id="container-image" class="col--image">
                        <img class="loading col--image__fit" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif" alt="loading">
                        <img class="col--image__fit" src="${imageUrl}" alt="${imageTitle}">
                    </div>
                <p id="title-image" class="col--image--title">${imageTitle}</p>
            </div>
            `

        }).finally(() => {
            const loadingElms = document.querySelectorAll(".loading")
            loadingElms.forEach(loadingElm => loadingElm.classList.add("hidden"))
        })
}
}

// DOM ELEMENTS 

const colPhotoElm = document.getElementById("col-photo")
const containerImageElm = document.getElementById("container-image")
const titleImageElm = document.getElementById("title-image")

// EVENTS

// On page load

photoCard()