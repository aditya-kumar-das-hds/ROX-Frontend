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
    "Automating Everything",
    "Change Domains? Automate pipelines? Can do Everything",
    "Orchestrating production environments",
    "Deploying global edge functions",
    "Syncing remote backend dependencies",
    "Injecting secure environment variables",
    "Optimizing static asset delivery",
    "Establishing high-speed CI/CD tunnels",
    "Provisioning cloud-native resources",
    "Scaling serverless architecture",
    "Routing traffic through global CDN",
    "Hardening API security protocols",
    "Bridging frontend and backend logic",
    "Executing zero-downtime deployments",
    "Parsing GitHub repository structures",
    "Configuring automated SSL certificates",
    "Initializing containerized workflows",
    "Mapping remote API endpoints",
    "Watching for real-time repository changes",
    "Triggering webhooks for instant updates",
    "Minifying production-ready bundles",
    "Compiling source code for the edge",
    "Verifying deployment integrity",
    "Linking domain names to IP clusters",
    "Streaming live deployment telemetry",
    "Generating dynamic preview URLs",
    "Cleaning up legacy build artifacts",
    "Caching build layers for speed",
    "Resolving package dependency trees",
    "Standardizing cross-platform builds",
    "Scaling instances in milliseconds",
    "Migrating databases to production",
    "Securing sensitive API gateways",
    "Monitoring system health and status",
    "Analyzing bundle size optimization",
    "Automating multi-cloud sync",
    "Deploying React apps with one click",
    "Wiring up Python backend logic",
    "Connecting Next.js to FastAPI",
    "Configuring Vercel orchestration",
    "Managing environment secret keys",
    "Validating project configurations",
    "Polling for successful build status",
    "Rewriting URL routing rules",
    "Handling complex monorepo builds",
    "Optimizing server-side rendering",
    "Deploying static sites to the cloud",
    "Scanning for vulnerabilities",
    "Upgrading outdated build scripts",
    "Building your vision in seconds",
    "Shipping code while you sleep",
    "Your deployment simplified",
    "Seamless API integration active",
    "Global scale infrastructure ready"
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

