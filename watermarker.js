(function() {
    // Prompt user for input
    const text = prompt("Enter the watermark text:");
    if (!text) return; // Exit if no text is provided

    const color = prompt("Enter the watermark color (e.g., 'red', '#ff0000'):");
    if (!color) return; // Exit if no color is provided

    const x = prompt("Enter the x position (in pixels):");
    if (isNaN(x)) return; // Exit if x is not a number

    const y = prompt("Enter the y position (in pixels):");
    if (isNaN(y)) return; // Exit if y is not a number

    const rotation = prompt("Enter the rotation (in degrees, negative for left, positive for right):");
    if (isNaN(rotation)) return; // Exit if rotation is not a number

    const isBold = confirm("Do you want the text to be bold?"); // Confirm for bold
    const size = prompt("Enter the font size (in pixels, e.g., '24' for 24px):");
    if (isNaN(size)) return; // Exit if size is not a number

    // Create a watermark element
    const watermark = document.createElement('div');
    watermark.innerText = text;
    watermark.style.position = 'fixed';
    watermark.style.color = color;
    watermark.style.left = `${x}px`;
    watermark.style.top = `${y}px`;
    watermark.style.transform = `rotate(${rotation}deg)`;
    watermark.style.fontSize = `${size}px`; // Set font size
    watermark.style.fontWeight = isBold ? 'bold' : 'normal'; // Set boldness
    watermark.style.opacity = '0.5'; // Adjust opacity for visibility
    watermark.style.pointerEvents = 'none'; // Prevent interaction with the watermark
    watermark.style.whiteSpace = 'nowrap'; // Prevent text wrapping
    watermark.style.zIndex = '9999'; // Keeps watermark above all content

    // Append the watermark to the body
    document.body.appendChild(watermark);
})();
