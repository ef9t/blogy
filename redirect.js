// Define URL mappings - friendly URL to actual HTML file
const urlMappings = {
  'blogy1': 'blog1.html',
  'getting-started': 'blog1.html',
  'github-pages-tutorial': 'blog1.html',
  'blogy2': 'blog2.html',
  'markdown-guide': 'blog2.html',
  'markdown-for-blogging': 'blog2.html'
};

function handleRedirect() {
  // Get the current path
  const path = window.location.pathname;
  
  // Extract the last part of the URL (after the last slash)
  const parts = path.split('/');
  const lastPart = parts[parts.length - 1];
  
  // Check if this is a keyword we need to redirect
  if (urlMappings[lastPart]) {
    // Construct the correct URL
    // Replace the current path's last segment with the mapped HTML file
    parts[parts.length - 1] = urlMappings[lastPart];
    const newPath = parts.join('/');
    
    // Redirect to the actual HTML file
    window.location.href = newPath;
  }
}

// Run the redirect function when the page loads
document.addEventListener('DOMContentLoaded', handleRedirect);
// Also run it immediately in case the page has already loaded
handleRedirect();
