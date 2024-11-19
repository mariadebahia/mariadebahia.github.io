function MariaClicked() {
    // Array of colors to cycle through
    const colors = ["pink", "red", "green", "blue", "white", "grey"];
    
    // Find the current background color's index
    const currentColorIndex = colors.findIndex(
        color => document.body.style.backgroundColor === color
    );
    
    // Calculate the next color index, wrapping around to the start if needed
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    
    // Set the background to the next color
    document.body.style.backgroundColor = colors[nextColorIndex];
}