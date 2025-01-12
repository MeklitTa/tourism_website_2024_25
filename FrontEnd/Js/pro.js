document.getElementById("searchBtn").addEventListener("click", async () => {
    const selectedCity = document.getElementById("citySelect").value;
    const messageArea = document.getElementById("hotelResults");

    try {
        const response = await fetch(`http://localhost:3000/Hotels?city=${encodeURIComponent(selectedCity)}`);

        if (!response.ok) {
            throw new Error("Failed to fetch hotels");
        }

        const hotels = await response.json();
        console.log(hotels);
        displayHotels(hotels);
    } catch (error) {
        messageArea.innerHTML = `<div class="alert alert-danger" role="alert">${error.message}</div>`;
    }
});

function displayHotels(hotels) {
    const hotelSection = document.getElementById("hotelResults");
    hotelSection.innerHTML = ""; // Clear previous results

    if (hotels.length === 0) {
        hotelSection.innerHTML = `<div class="alert alert-warning" role="alert">No hotels found in this location.</div>`;
        return;
    }

    hotels.forEach(hotel => {
        const stars = Array(hotel.rating).fill('<span class="text-warning"><i class="fa fa-star"></i></span>').join('');
        const hotelCard = document.createElement("div");
        hotelCard.className = "card mb-3 h-100"; // Card styling with fixed height

        hotelCard.innerHTML = `
            <div class="card-body d-flex flex-column h-100">
                <div class="row g-0 flex-grow-1">
                    <div class="col-md-4 d-flex align-items-stretch">
                        <img src="${hotel.image}" class="img-fluid rounded-start" alt="Hotel Image" style="height: 200px; object-fit: cover;">
                    </div>
                    <div class="col-md-8 d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">${hotel.name}</h5>
                            <p class="mb-2">${stars}</p>
                            <p class="card-text">Enjoy a cozy stay with spacious rooms, free Wi-Fi, and complimentary breakfast.</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-end px-3">
                            <div>
                                <button class="btn btn-warning btn-sm me-2" onclick="openUpdateModal('${hotel._id}', '${hotel.name}', ${hotel.price})">Update</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteHotel('${hotel._id}')">Delete</button>
                            </div>
                            <p class="mb-3 float-end text-primary fw-bold">Price: ${hotel.price}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        hotelSection.appendChild(hotelCard);
    });
}
function openUpdateModal(hotelId, hotelName, hotelPrice, hotelCity, hotelRating) {
    document.getElementById("updateHotelId").value = hotelId;
    document.getElementById("updateHotelName").value = hotelName;
    document.getElementById("updateHotelCity").value = hotelCity; // Set city value
    document.getElementById("updateHotelPrice").value = hotelPrice;
    document.getElementById("updateHotelRating").value = hotelRating; // Set rating value

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('updateHotelModal'));
    modal.show();
}

async function deleteHotel(hotelId) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        try {
            const response = await fetch(`http://localhost:3000/Hotels/${hotelId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error("Failed to delete hotel");
            }

            // Optionally refresh the hotel list
            const selectedCity = document.getElementById("citySelect").value;
            const newResponse = await fetch(`http://localhost:3000/Hotels?city=${encodeURIComponent(selectedCity)}`);
            const hotels = await newResponse.json();
            displayHotels(hotels);
        } catch (error) {
            console.error(error);
        }
    }
}
document.getElementById("saveChangesBtn").addEventListener("click", async () => {
    const hotelId = document.getElementById("updateHotelId").value;
    const updatedName = document.getElementById("updateHotelName").value;
    const updatedPrice = parseFloat(document.getElementById("updateHotelPrice").value);
    const updatedCity = document.getElementById("updateHotelCity").value; // Assuming you have a city input
    const updatedRating = parseInt(document.getElementById("updateHotelRating").value); // Assuming you have a rating input

    // Basic validation
    if (!updatedName || !updatedCity || isNaN(updatedPrice) || isNaN(updatedRating)) {
        console.error("Hotel name, city, price, and rating are required.");
        return; // Prevent the request from being sent
    }

    try {
        const response = await fetch(`http://localhost:3000/Hotels/${hotelId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: updatedName,
                price: updatedPrice,
                city: updatedCity,
                rating: updatedRating
            }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Get the response body
            console.error("Failed to update hotel:", errorMessage);
            throw new Error("Failed to update hotel");
        }

        // Refresh the hotel list
        const selectedCity = document.getElementById("citySelect").value;
        const newResponse = await fetch(`http://localhost:3000/Hotels?city=${encodeURIComponent(selectedCity)}`);
        const hotels = await newResponse.json();
        displayHotels(hotels);

        // Hide the modal after updating
        const modal = bootstrap.Modal.getInstance(document.getElementById('updateHotelModal'));
        modal.hide();
    } catch (error) {
        console.error(error.message);
    }
});


// Open Create Hotel Modal
document.getElementById("createHotelBtn").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById('createHotelModal'));
    modal.show();
});

// Handle the submission of the new hotel
document.getElementById("saveNewHotelBtn").addEventListener("click", async () => {
    const newName = document.getElementById("newHotelName").value;
    const newImage = document.getElementById("newHotelImage").value;
    const newCity = document.getElementById("newHotelCity").value;
    const newPrice = parseFloat(document.getElementById("newHotelPrice").value);
    const newRating = parseInt(document.getElementById("newHotelRating").value);

    // Basic validation
    if (!newName || !newImage || !newCity || isNaN(newPrice) || isNaN(newRating)) {
        console.error("Hotel name, city, price, and rating are required.");
        return; // Prevent the request from being sent
    }

    try {
        const response = await fetch(`http://localhost:3000/Hotels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newName,
                image: newImage,
                city: newCity,
                price: newPrice,
                rating: newRating,
            }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Get the response body
            console.error("Failed to create hotel:", errorMessage);
            throw new Error("Failed to create hotel");
        }

        // Refresh the hotel list
        const selectedCity = document.getElementById("citySelect").value;
        const newResponse = await fetch(`http://localhost:3000/Hotels?city=${encodeURIComponent(selectedCity)}`);
        const hotels = await newResponse.json();
        displayHotels(hotels);

        // Hide the modal after creating
        const modal = bootstrap.Modal.getInstance(document.getElementById('createHotelModal'));
        modal.hide();

        // Clear the input fields
        document.getElementById("newHotelName").value = '';
        document.getElementById("newHotelImage").value = '';
        document.getElementById("newHotelCity").value = '';
        document.getElementById("newHotelPrice").value = '';
        document.getElementById("newHotelRating").value = '';
    } catch (error) {
        console.error(error.message);
    }
});








