console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    const dogBreedsUl = document.getElementById("dog-breeds");

    fetch(imgUrl) .then(function(response) {
        return response.json();
    }) .then(function(json) {
        json.message.forEach(element => {
            dogImageContainer.innerHTML += `
                <img src="${element}">
            `;
        })
    });

    fetch(breedUrl) .then(function(response) {
        return response.json();
    }) .then(function(json) {
        for (const key in json.message) {
            dogBreedsUl.innerHTML += `
                <li class="${key[0]}">${key}</li>
            `;
        };
        dogBreedsUl.addEventListener("click", function(event) {
            event.target.style.color = "blue";
        });
        document.getElementById("breed-dropdown").addEventListener("change", function(event) {
            const selectedIndex = event.target.options.selectedIndex;
            const breeds = document.querySelectorAll("li");
            switch (selectedIndex) {
                case 0: // a
                    toggleDisplay("a");
                    break;
                case 1: // b
                    toggleDisplay("b");
                    break;
                case 2: // c
                    toggleDisplay("c");
                    break;
                case 3: // d
                    toggleDisplay("d");
                    break;
            }
            function toggleDisplay(letter) {
                for (breed in breeds) {
                    if (breeds[breed].className !== letter) {
                        breeds[breed].style.display = "none";
                    } else {
                        breeds[breed].style.removeProperty("display");
                    };
                };
            };
        })
    });
});
