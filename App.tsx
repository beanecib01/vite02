import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState<string>('https://newselogerfr.pythonanywhere.com/');

  useEffect(() => {
    // This effect runs once when the component mounts.
    // It reads the 'phone' parameter from the current window's URL
    // and constructs the appropriate URL for the iframe.
    const urlParams = new URLSearchParams(window.location.search);
    const phone = urlParams.get('phone');

    let finalUrl = 'https://newselogerfr.pythonanywhere.com/';

    if (phone) {
      // If a phone number is found, append it to the base URL as a query parameter.
      // encodeURIComponent is used to ensure the URL is valid.
      finalUrl += `?phone=${encodeURIComponent(phone)}`;
    }

    setIframeSrc(finalUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <iframe
        src={iframeSrc}
        title="Embedded Content"
        className="w-full h-full border-none"
        // Sandbox properties can be added for extra security if needed,
        // but are omitted here to ensure full functionality of the embedded site.
        // sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
};

export default App;
