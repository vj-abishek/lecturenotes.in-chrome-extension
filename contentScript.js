window.onload = () => {
    const script1 = document.createElement('script');
    script1.src = chrome.runtime.getURL('injectScript.js')
    document.head.appendChild(script1);
    const script2 = document.createElement('script');

    // https://raw.githubusercontent.com/MrRio/jsPDF/v2.1.1/dist/jspdf.umd.js
    script2.src = chrome.runtime.getURL('lib/2.1.1/jspdf.umd.js');
    document.head.appendChild(script2);
}
