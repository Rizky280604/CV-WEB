// Konfigurasi Tema (Light/Dark Mode)
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

// Cek tema yang tersimpan
const savedTheme = localStorage.getItem('theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if(theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Fungsi Navigasi Utama (CV vs Portofolio)
function switchMainTab(tabId) {
    // Update menu buttons
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Update content sections
    document.querySelectorAll('.main-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId + '-section').classList.add('active');
}

// Fungsi Navigasi Sub Tab (Pendidikan, Kerja, Skill)
function switchSubTab(tabId) {
    // Hentikan fungsi klik ini jika sedang mode print (di-handle CSS media print)
    if (window.matchMedia('print').matches) return;

    // Update menu buttons
    document.querySelectorAll('.sub-link').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Update content sections
    document.querySelectorAll('.sub-tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Fungsi Cetak / Simpan PDF
document.getElementById('printBtn').addEventListener('click', () => {
    // Notifikasi opsional (bisa dihapus)
    // alert("Tips: Pastikan opsi 'Background graphics' dicentang pada dialog print agar desain terlihat sempurna.");
    window.print();
});
