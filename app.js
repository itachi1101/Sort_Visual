const arraySpace = document.querySelector(".array_space");

function arrayGenerator() {
    const number = 20;

    for (let i = 0; i < number; i+=1){
        const height = Math.floor(Math.random() * 100) + 4;

        const verticalBar = document.createElement("div");
        verticalBar.classList.add("bar");

        verticalBar.style.height = `${height * 3.5}px`;

        verticalBar.style.transform = `translateX(${i * 31}px)`;

        const BarMarkings = document.createElement("label");
        BarMarkings.classList.add("markings");
        BarMarkings.innerHTML = height;


        verticalBar.appendChild(BarMarkings);
        arraySpace.appendChild(verticalBar);


    }
    
}
arrayGenerator();
