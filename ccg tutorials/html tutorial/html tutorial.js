function compileHTMLAndCSS() {
  const htmlCode = document.getElementById('htmlCode').value;
  const cssCode = document.getElementById('cssCode').value;
  const iframe = document.getElementById('outputFrame');
  
  // Combine HTML and CSS into one document
  const combinedCode = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;
  
  iframe.srcdoc = combinedCode;
}