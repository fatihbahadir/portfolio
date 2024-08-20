export const handleCvDownload = async (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (e) e.preventDefault();
  
    try {
      const response = await fetch('./cvnew.pdf'); 
      if (!response.ok) throw new Error('Network response was not ok');
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cvnew.pdf'; 
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };


  export const inDevEnvironment = !!process && process.env.NODE_ENV === 'development';
