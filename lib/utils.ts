export const handleCvDownload = async (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Prevent default behavior if the function is triggered by an event
    if (e) e.preventDefault();
  
    try {
      const response = await fetch('./cvnew.pdf'); // Update the path to your PDF file
      if (!response.ok) throw new Error('Network response was not ok');
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cvnew.pdf'; // The name of the file to be downloaded
      document.body.appendChild(link);
      link.click();
  
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };


  export const inDevEnvironment = !!process && process.env.NODE_ENV === 'development';
