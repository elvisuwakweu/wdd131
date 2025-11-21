// one-line wind chill calculation function (requirement)
function calculateWindChill(t, w) { return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16); }

document.addEventListener('DOMContentLoaded', function () {
    // Footer: year + last modified
    const yearEl = document.getElementById('year');
    const lastEl = document.getElementById('lastModified');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastEl) lastEl.textContent = document.lastModified;

    // Wind chill logic: only run when temp <= 10C and wind > 4.8 km/h
    const tempEl = document.getElementById('temp');
    const windEl = document.getElementById('wind');
    const windchillEl = document.getElementById('windchill');

    // parse values safely, fallback if not numbers
    const t = tempEl ? parseFloat(tempEl.textContent) : NaN;
    const w = windEl ? parseFloat(windEl.textContent) : NaN;

    if (!isNaN(t) && !isNaN(w) && t <= 10 && w > 4.8) {
        // call the one-line function only when conditions are met
        const wc = Math.round(calculateWindChill(t, w) * 10) / 10;
        if (windchillEl) windchillEl.textContent = `${wc} °C`;
    } else {
        if (windchillEl) windchillEl.textContent = 'N/A';
    }
});
