/* --- INFINITE GALLERIA FUNCTIONS (STABLE MOBILE) --- */

function openSidebar(id) {
    const originalImg = document.querySelector(`[onclick="openSidebar('${id}')"] img`).src;
    const dataContent = document.getElementById(id + '-data').innerHTML;
    
    const modal = document.getElementById('gallery-modal');
    document.getElementById('main-modal-img').src = originalImg;
    document.getElementById('modal-info-content').innerHTML = dataContent;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 

    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; 

    setTimeout(() => {
        modal.style.display = 'none';
    }, 400); 
}

function closeSidebar() {
    document.getElementById('sidebar-panel').classList.remove('active');
}

// --- YENİ LEMON SQUEEZY CHECKOUT YÖNLENDİRİCİSİ (12 ESER TAM LİSTE) ---
function goToCheckout(event, artId) {
    event.preventDefault(); 
    
    const selectedTier = event.target.querySelector('input[name="tier"]:checked').value;

    const checkoutLinks = {
        'art1': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link1',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link2',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link3'
        },
        'art2': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link4',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link5',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link6'
        },
        'art3': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link7',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link8',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link9'
        },
        'art4': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link10',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link11',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link12'
        },
        'art5': {
            'standard': 'https://infinite-galleria.lemonsqueezy.com/checkout/buy/d23a29de-e684-48e8-8993-749089bdc644?desc=0&discount=0',
            'extended': 'https://infinite-galleria.lemonsqueezy.com/checkout/buy/d23a29de-e684-48e8-8993-749089bdc644?desc=0&discount=0',
            'exclusive': 'https://infinite-galleria.lemonsqueezy.com/checkout/buy/d23a29de-e684-48e8-8993-749089bdc644?desc=0&discount=0'
        },
        'art6': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link16',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link17',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link18'
        },
        'art7': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link19',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link20',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link21'
        },
        'art8': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link22',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link23',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link24'
        },
        'art9': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link25',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link26',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link27'
        },
        'art10': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link28',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link29',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link30'
        },
        'art11': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link31',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link32',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link33'
        },
        'art12': {
            'standard': 'https://siten.lemonsqueezy.com/checkout/buy/link34',
            'extended': 'https://siten.lemonsqueezy.com/checkout/buy/link35',
            'exclusive': 'https://siten.lemonsqueezy.com/checkout/buy/link36'
        }
    };

    if (checkoutLinks[artId] && checkoutLinks[artId][selectedTier]) {
        window.open(checkoutLinks[artId][selectedTier], '_blank'); 
    } else {
        alert("Bu eser ve paket için ödeme linki henüz sisteme girilmedi kanka! Kodu kontrol et.");
    }
}
