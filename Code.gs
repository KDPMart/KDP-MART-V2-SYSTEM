// ============================================================
// Code.gs - KDP MART V2
// Web App siap dipasang di iframe GitHub Pages
// ============================================================

// Catatan:
// - Login tetap di Auth.gs.
// - Jangan membuat prosesLogin() kedua di file ini.
// - File ini hanya menangani Web App + include HTML.
// - ALLOWALL diperlukan agar Web App dapat ditampilkan di iframe.

function doGet(e) {
  return HtmlService
    .createTemplateFromFile("index")
    .evaluate()
    .setTitle("KDP Mart V2")
    .addMetaTag("viewport", "width=device-width, initial-scale=1, viewport-fit=cover")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}
