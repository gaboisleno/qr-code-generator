var button = document.getElementById('submit');
var download = null;
var canvas = null;

button.addEventListener('click', onSubmit);

// Hide the result
document.getElementById('page_2').style.display = 'none';

function onSubmit() {
    // Get input url
    const text = document.getElementById('qrtext').value;
    
    // Hide page 1 and show page 2
    document.getElementById('page_1').style.display = 'none';
    document.getElementById('page_2').style.display = 'grid';
    
    // Using https://cdnjs.com/libraries/qrcodejs
    new QRCode(document.getElementById("qrcode"), text);
    
    // Show result
    canvas = document.getElementsByTagName('canvas')[0];
    download = document.getElementById('download');
    download.addEventListener('click', downloadQr);

}

function downloadQr() {
    // Download qr result from canvas tag
    const downloadLink = document.createElement('a');
    const dataURL = canvas.toDataURL('image/png');
    downloadLink.href = dataURL;
    downloadLink.download = 'canvas_image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function shareQr() {
    // ToDo
}