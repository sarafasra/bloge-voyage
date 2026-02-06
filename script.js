let trips = [
    {
        id: 1,
        title: "Yellow River",
        Destination: "Joan Garcia",
        image: "/tele.jpg",
        Date: "River"
    }
];

let container = document.getElementById("posts-container");
let hid = document.getElementById("hidden-form");

function afficherCards(tripsArray) {
    container.innerHTML = "";
    tripsArray.forEach(trip => {
        container.innerHTML += `
        
        <div class="mx-5 w-[350px] h-[150px] md:w-[250px] mt-16 mb-14">
        <div class="relative">
                <button onclick="leMenu(this)"
                    class="absolute top-2 right-2 text-white text-xl bg-black/40 rounded-full px-2">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <div class="hidden absolute top-10 right-2 bg-white shadow rounded w-32">
                    <button class="block w-full text-left px-3 py-2 hover:bg-gray-100">Modifier</button>
                    <button onclick="deletetrips(${trip.id})" class="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100">Supprimer</button>
                </div>
            </div>
            <div class="bg-cover bg-center rounded-xl shadow-xl w-full h-full"
                 style="background-image:url('${trip.image}')"></div>
            <h6 class="font-semibold mt-1">${trip.title}</h6>
            <p class="text-sm">by ${trip.Destination}</p>
            
        </div>
        `;

    });
}
afficherCards(trips);

document.getElementById("btnAdd").addEventListener("click", () => {
    hid.classList.remove("hidden");
});

document.getElementById("trip-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const newTrip = {
        id: trips.length + 1,
        title: e.target.title.value,
        Destination: e.target.Destination.value,
        image: e.target.image.value,
        Date: e.target.Date.value
    };

    trips.push(newTrip);
    afficherCards(trips);
    e.target.reset();
    hid.classList.add("hidden");
});

function leMenu(button) {
    const menu = button.nextElementSibling;
    menu.classList.toggle("hidden");
}
function deletetrips(id){
    trips = trips.filter(trip=>trip.id !== id );
    afficherCards(trips);
}

