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
        strings = [
    "Your deployment simplified",
    "Ship code while you sleep",
    "Building your vision in seconds",
    "Zero config orchestration",
    "Seamless API integration",
    "Global scale infrastructure ready",
    "One click to production",
    "Automate your workflow instantly",
    "The bridge between ideas and reality",
    "No more manual deployments",
    "Effortless frontend scaling",
    "Backend connectivity made easy",
    "The future of rapid shipping",
    "Production ready in a heartbeat",
    "Your dev cycle on autopilot",
    "Deploy without the headache",
    "Infinite scalability unlocked",
    "Connecting backends effortlessly",
    "The ultimate shipping machine",
    "Modern devops for everyone",
    "Fastest path to live",
    "Launch globally with ease",
    "Smart infrastructure at your fingertips",
    "Stop configuring and start building",
    "Orchestration with zero friction",
    "High performance cloud architecture",
    "Revolutionizing your deployment pipeline",
    "Precision engineering for your apps",
    "Unleash your projects instantly",
    "Automate pipelines with one command",
    "Optimized for speed and security",
    "The smartest way to ship",
    "Reliability by default",
    "Global distribution simplified",
    "Powering next gen deployments",
    "Your project live in seconds",
    "Scale without limits",
    "Mastering the art of automation",
    "Infrastructure that moves with you",
    "Simple fast and secure",
    "Better code faster delivery",
    "Your bridge to the cloud",
    "Eliminate deployment anxiety",
    "Focus on code let us handle the rest",
    "The new standard for shipping",
    "Deployment magic for modern devs",
    "Rapid scaling on demand",
    "Connected backend ecosystems",
    "Fueling your digital growth",
    "Automate the boring stuff",
    "Your global site starts here",
    "Unmatched deployment speed",
    "The most powerful link in your stack",
    "Where ideas meet production"
]
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


