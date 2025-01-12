function toggleDetails(button) {
    // Find the card-details element that is a sibling of the button's parent
    const details = button.nextElementSibling;

    // Toggle the visibility of the details
    if (details.classList.contains('d-none')) {
        details.classList.remove('d-none');
        button.textContent = 'View Less'; // Change button text to 'View Less'
    } else {
        details.classList.add('d-none');
        button.textContent = 'View Details'; // Change button text back to 'View Details'
    }
}