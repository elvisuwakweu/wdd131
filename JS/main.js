// One-line function to calculate wind chill in °C
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

document.addEventListener('DOMContentLoaded', function () {
    // Footer: year + last modified
    const yearEl = document.getElementById('year');
    const lastEl = document.getElementById('lastModified');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastEl) lastEl.textContent = document.lastModified;

    const tempEl = document.getElementById('temp');
    const windEl = document.getElementById('wind');
    const windchillEl = document.getElementById('windchill');

    const temp = tempEl ? parseFloat(tempEl.textContent) : NaN;
    const wind = windEl ? parseFloat(windEl.textContent) : NaN;

    if (!isNaN(temp) && !isNaN(wind) && temp <= 10 && wind > 4.8) {
        const wc = Math.round(calculateWindChill(temp, wind) * 10) / 10;
        if (windchillEl) windchillEl.textContent = `${wc} °C`;
    } else {
        if (windchillEl) windchillEl.textContent = 'N/A';
    }
});
