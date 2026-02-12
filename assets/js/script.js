/* --- INFINITE GALLERIA FUNCTIONS (STABLE MOBILE) --- */

function openSidebar(id) {
    // 1. Resmi ve Veriyi Al
    const originalImg = document.querySelector(`[onclick="openSidebar('${id}')"] img`).src;
    const dataContent = document.getElementById(id + '-data').innerHTML;
    
    // 2. Modalı Doldur
    const modal = document.getElementById('gallery-modal');
    document.getElementById('main-modal-img').src = originalImg;
    document.getElementById('modal-info-content').innerHTML = dataContent;
    
    // 3. Modalı Önce Görünür Yap (Display Block)
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Arka planı kilitle

    // 4. Ufak bir gecikmeyle "open" sınıfını ekle (Animasyonun tetiklenmesi için şart)
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    
    // 1. Önce şeffaflaştır (Sınıfı sil)
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; // Scrollu aç

    // 2. Animasyon bitince (0.4s sonra) tamamen gizle
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400); // CSS'teki transition süresiyle aynı olmalı
}

// Sidebar Kapatma (Yedek)
function closeSidebar() {
    document.getElementById('sidebar-panel').classList.remove('active');
}

// Checkout Yönlendirme
function goToCheckout(event, productId) {
    event.preventDefault(); 
    const form = event.target; 
    const selectedTier = form.querySelector('input[name="tier"]:checked').value;
    window.location.href = `checkout.html?product=${productId}&tier=${selectedTier}`;
}
