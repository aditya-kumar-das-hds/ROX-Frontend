document.addEventListener('DOMContentLoaded', async () => {
    const textContainer = document.getElementById('rotating-text');
    let strings = [];

    try {
        // Fetch from backend using relative path
        const response = await fetch('/api/strings');
        const data = await response.json();
        strings = data.strings;
    } catch (error) {
        console.error("Failed to fetch from backend:", error);
        strings = ["Error connecting to orchestration API.", "Retrying connection..."];
    }

    // Animation Logic
    if (strings.length > 0) {
        let currentIndex = 0;
        textContainer.textContent = strings[currentIndex];

        setInterval(() => {
            // 1. Trigger the CSS fade-out transition
            textContainer.classList.add('fade-out');
            
            // 2. Wait for the fade-out to finish (600ms as defined in CSS)
            setTimeout(() => {
                // Change the text while it's invisible
                currentIndex = (currentIndex + 1) % strings.length;
                textContainer.textContent = strings[currentIndex];
                
                // 3. Remove the fade-out class to trigger the fade-in
                textContainer.classList.remove('fade-out');
            }, 600); 
            
        }, 3500); // Rotate to the next string every 3.5 seconds
    }
});