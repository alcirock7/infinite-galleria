/* --- INFINITE GALLERIA FUNCTIONS --- */

// 1. Sidebar/Modal Açma Fonksiyonu
function openSidebar(id) {
    // Tıklanan resmin kaynağını bul
    const originalImg = document.querySelector(`[onclick="openSidebar('${id}')"] img`).src;
    
    // O resme ait gizli detay verisini (fiyatlar vb.) al
    const dataContent = document.getElementById(id + '-data').innerHTML;
    
    // Modalı doldur
    document.getElementById('main-modal-img').src = originalImg;
    document.getElementById('modal-info-content').innerHTML = dataContent;
    
    // Modalı göster ve arkadaki scroll'u kilitle
    document.getElementById('gallery-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 2. Modalı Kapatma Fonksiyonu
function closeModal() {
    document.getElementById('gallery-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Scroll geri gelsin
}

// 3. Sidebar Kapatma (Yedek)
function closeSidebar() {
    const sidebar = document.getElementById('sidebar-panel');
    if(sidebar) sidebar.classList.remove('active');
}

// 4. Checkout Sayfasına Yönlendirme
function goToCheckout(event, productId) {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    const form = event.target; 
    
    // Seçili radyo butonunun değerini al (standard, extended, exclusive)
    const selectedTier = form.querySelector('input[name="tier"]:checked').value;
    
    // Parametrelerle checkout sayfasına git
    window.location.href = `checkout.html?product=${productId}&tier=${selectedTier}`;
}
