const libraryData = {
    react: {
        performance: "High performance with Virtual DOM",
        security: "Frequent updates and strong community support",
        maintainability: "Component-based architecture makes it easy to maintain",
        developmentSpeed: "Fast development with reusable components"
    },
    vue: {
        performance: "High performance with reactive data binding",
        security: "Smaller community but good security practices",
        maintainability: "Easy to maintain with a clear structure",
        developmentSpeed: "Quick to develop with intuitive API"
    },
    angular: {
        performance: "Good performance with Ahead-of-Time compilation",
        security: "Built-in security features",
        maintainability: "Complex but maintainable with TypeScript",
        developmentSpeed: "Steeper learning curve but productive in the long run"
    },
    bootstrap: {
        performance: "Lightweight and fast",
        security: "Mature library with regular updates",
        maintainability: "Easy to maintain with consistent class names",
        developmentSpeed: "Rapid development with pre-built components"
    },
    jquery: {
        performance: "Good for simple tasks but can be slow for complex UIs",
        security: "Less secure due to legacy issues",
        maintainability: "Can be messy for large projects",
        developmentSpeed: "Fast for simple DOM manipulation"
    }
};

function evaluateLibrary() {
    const librarySelect = document.getElementById('librarySelect');
    const selectedLibrary = librarySelect.value;
    const resultsDiv = document.getElementById('results');

    const data = libraryData[selectedLibrary];
    resultsDiv.innerHTML = `
        <p><strong>Performance:</strong> ${data.performance}</p>
        <p><strong>Security:</strong> ${data.security}</p>
        <p><strong>Maintainability:</strong> ${data.maintainability}</p>
        <p><strong>Development Speed:</strong> ${data.developmentSpeed}</p>
    `;
}
