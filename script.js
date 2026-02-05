let trips = [
    {
        id: 1,
        title: "Yellow River",
        author: "Joan Garcia",
        image: "/tele.jpg",
        category: "River"
    }
];

let container = document.getElementById("posts-container");
let hid = document.getElementById("hidden-form");

function afficherCards(tripsArray) {
    container.innerHTML = "";
    tripsArray.forEach(trip => {
        container.innerHTML += `
        
        <div class="mx-5 w-[350px] h-[150px] md:w-[250px] mt-16 mb-14">
            <div class="bg-cover bg-center rounded-xl shadow-xl w-full h-full"
                 style="background-image:url('${trip.image}')"></div>
            <h6 class="font-semibold mt-1">${trip.title}</h6>
            <p class="text-sm">by ${trip.author}</p>
            
        </div>
        `;

    });
}
afficherCards(trips);

document.getElementById("btnAdd").addEventListener("click", () => {
    hid.classList.remove("hidden");
});
