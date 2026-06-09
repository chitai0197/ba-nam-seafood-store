// ================================================================
// 🌊 MẺ LƯỚI HÔM NAY — CẬP NHẬT HẰNG NGÀY
// Trạng thái: "available" = Còn hàng | "limited" = Sắp hết | "soldout" = Hết hôm nay
// ================================================================
const catchDate = "08/06/2026"; // ← ĐỔI NGÀY MỖI NGÀY

const dailyCatch = [
    { name: "Mực Ống", price: "360.000đ", unit: "kg", status: "available", image: "assets/Mực ống_360.jpg" },
    { name: "Cá Bóp Nguyên Con", price: "250.000đ", unit: "kg", status: "available", image: "assets/Cá bóp nguyên con_250.jpg" },
    { name: "Cá Bóp Cắt Lát", price: "350.000đ", unit: "kg", status: "available", image: "assets/Cá bóp cắt lát_350.jpg" },
    { name: "Tôm Thẻ", price: "220.000đ", unit: "kg", status: "available", image: "assets/Tôm thẻ_220_2.jpg" },
    { name: "Ghẹ Xanh Nhàn", price: "400.000đ", unit: "kg", status: "available", image: "assets/Ghẹ nhàn_400.jpg" }
];
// ================================================================

const i18n = {
    vi: {
        logo_text: "Bà Năm",
        nav_home: "Trang chủ",
        nav_about: "Cam kết",
        nav_products: "Sản phẩm",
        nav_process: "Quy trình",
        nav_combo: "Combo",
        nav_reviews: "Đánh giá",
        
        hero_title_html: "Hải Sản Tươi Sống<br><span>Chuẩn Vị Phan Thiết</span>",
        hero_desc: "Tuyển chọn những mẻ lưới mới nhất trong ngày, mang hương vị đại dương xanh đến tận gian bếp nhà bạn.",
        btn_shop_now: "Hải Sản Hôm Nay",
        btn_contact: "Liên Hệ",
        hero_note_pre: "⚓ Khuyến khích Pre-order trước 2 ngày để đảm bảo sản lượng. Cần hàng gấp? ",
        hero_note_link: "Nhắn Zalo ngay",
        hero_note_post: "để check mẻ lưới hôm nay!",
        
        about_title: "Cam Kết Từ Trái Tim Người Làm Biển",
        about_desc: "Khởi nguồn từ một sạp hải sản nhỏ tại cảng cá Phan Thiết, Hải Sản Bà Năm hiểu rằng sự tươi ngon chính là điều quan trọng nhất. Chúng tôi chọn lọc kỹ càng từng con cá, con mực để mang đến bữa ăn trọn vẹn cho gia đình bạn.",
        feat_1: "100% Tươi sống, chuẩn hải sản tự nhiên",
        feat_2: "Miễn phí làm sạch, sơ chế theo yêu cầu",
        feat_3: "Giao hàng nhanh 2H tại khu vực",
        feat_4: "Bao ăn, 1 đổi 1 tận nhà nếu không đạt chuẩn",
        
        prod_title: "Sản Phẩm Hôm Nay",
        badge_bestseller: "Best Seller",
        
        squid_title: "Mực Lá Phan Thiết",
        squid_desc: "Mực lá đánh bắt trong ngày, thịt dày, giòn ngọt tự nhiên.",
        crab_title: "Ghẹ Xanh Sống",
        crab_desc: "Ghẹ loại 1, bao chắc thịt, gạch béo ngậy. Giao sống tận nơi.",
        cobia_title: "Cá Bóp Cắt Lát",
        cobia_desc: "Cá bóp biển tự nhiên, nấu ngót hay nhúng mẻ đều tuyệt hảo.",
        
        per_kg: "/kg",
        btn_buy: "Đặt Mua",
        
        harbor_note_title: "Ghi chú từ bến cảng",
        harbor_note_p1_html: "Vì cam kết chỉ bán hải sản thiên nhiên cập bến trong ngày, số lượng mỗi loại hoàn toàn phụ thuộc vào mẻ lưới. Để đảm bảo trọn vẹn danh sách món ngon, quý khách <strong>ưu tiên đặt trước 48 giờ</strong>.",
        harbor_note_p2_pre: "Trường hợp bạn cần <strong>giao ngay hôm nay</strong>? Đừng ngần ngại ",
        harbor_note_p2_link: "<strong>chat với chúng tôi</strong>",
        harbor_note_p2_post: " để kiểm tra ngay những mẻ lưới mới nhất vừa lên bờ!",
        
        proc_title: "Quy Trình Chuẩn Điểm 10",
        proc_desc: "Để giữ nguyên độ tươi ngon như khi vừa đánh bắt, chúng tôi tuân thủ nghiêm ngặt quy trình 4 bước.",
        p1_title: "Đánh Bắt Tự Nhiên",
        p1_desc: "Hải sản được chọn lọc trực tiếp từ các mẻ lưới của ngư dân địa phương.",
        p2_title: "Sơ Chế Sạch Sẽ",
        p2_desc: "Làm sạch bằng nước biển lạnh, loại bỏ tạp chất, đảm bảo vệ sinh an toàn thực phẩm.",
        p3_title: "Bảo Quản Kín Lạnh",
        p3_desc: "Đóng thùng xốp chuyên dụng phủ kín đá lạnh, niêm phong kỹ càng.",
        p4_title: "Giao Hàng Siêu Tốc",
        p4_desc: "Vận chuyển hỏa tốc tận nhà trong vòng 2 tiếng, đảm bảo hải sản vẫn tươi rói.",
        
        combo_sec_title: "Combo Tối Ưu, Trọn Vị Yêu Thương",
        combo_sec_desc: "Tiết kiệm thời gian và chi phí với các mâm hải sản được thiết kế riêng cho bữa tiệc của gia đình bạn.",
        combo_badge: "TIẾT KIỆM 15%",
        combo_title: "Combo Lẩu Hải Sản Thập Cẩm (Dành cho 4-6 người)",
        combo_desc: "Tất cả những gì bạn cần cho một nồi lẩu hải sản ngọt lịm, đậm đà hương vị biển cả. Đã được sơ chế hoàn toàn sạch sẽ, chỉ việc bỏ vào nồi đun sôi.",
        citem_1: "500g Mực lá nang (làm sạch, xắt miếng)",
        citem_2: "500g Tôm sú sống nguyên con",
        citem_3: "500g Cá bóp cắt lát phi lê",
        citem_4: "500g Ghẹ xanh sống",
        per_combo: "/Combo",
        btn_buy_combo: "Đặt Mua Combo Ngay",
        
        pb_title: "Lên thực đơn hoàn hảo - Không lo thiếu món",
        pb_desc_html: "Hải sản ngon nhất là hải sản không chờ đợi trong tủ đông. Khách hàng thân thiết của <strong>Hải Sản Bà Năm</strong> thường <strong>lên đơn trước 2 ngày</strong> để chúng tôi tuyển chọn những cá thể khỏe nhất từ cảng cá.",
        pb_hl_html: "Bạn đang cần mở tiệc gấp tối nay? Nhấn nút <a href='https://zalo.me/0823559496' target='_blank' style='text-decoration: underline; color: inherit;'><strong>gọi Hotline</strong></a>, luôn có sẵn một vài mẻ lưới dự phòng tươi rói dành riêng cho bạn.",
        
        rev_title: "Khách Hàng Đánh Giá",
        rev_desc: "Hàng ngàn bữa ăn gia đình đã thêm phần trọn vẹn cùng Hải Sản Bà Năm.",
        rev_1_text: "\"Hải sản tươi rói, làm sạch sẽ, ăn ngọt thịt. Bữa sau sẽ mua tiếp.\"",
        rev_1_name: "Chị Lan Phương",
        rev_1_loc: "Phường Phú Thủy, Phan Thiết",
        rev_2_text: "\"Ghẹ giao tới còn búng, chắc nịch, gạch nhiều. Giá này quá ổn.\"",
        rev_2_name: "Anh Quốc Bảo",
        rev_2_loc: "Phường Thanh Hải, Phan Thiết",
        rev_3_text: "\"Mực lá giòn, tươi. Bà chủ nhiệt tình, giao hàng cũng lẹ.\"",
        rev_3_name: "Cô Thu Tâm",
        rev_3_loc: "Phường Đức Nghĩa, Phan Thiết",
        
        footer_brand: "Bà Năm",
        footer_desc: "Mang hương vị đại dương đến bàn ăn. Uy tín, chất lượng, tươi sống mỗi ngày.",
        footer_hotline_text: "📞 Zalo / Hotline Đặt Hàng:",
        footer_nav_title: "Khám Phá",
        footer_contact_title: "Thông Tin Liên Hệ",
        footer_address: "📍 Địa chỉ: 20/15 Lê Văn Phấn, Phường Phú Thủy, TP. Phan Thiết",
        footer_hours: "🕐 Giờ nhận đơn: 7:00 – 21:00 hàng ngày",
        footer_copy: "© 2026 Hải Sản Bà Năm. All rights reserved.",
        rev_more: "Xem thêm đánh giá thực tế từ khách hàng — nhắn <a href='https://zalo.me/0823559496' target='_blank'>Zalo: 082 355 9496</a>",
        
        modal_title: "Đặt Mua Sản Phẩm",
        modal_desc: "Vui lòng liên hệ trực tiếp để chúng tôi chốt đơn và phục vụ bạn tốt nhất.",
        modal_prep_title: "Chọn cách sơ chế:",
        prep_raw: "Giao sống nguyên con",
        prep_clean: "Làm sạch & cắt khúc",
        prep_steam: "Hấp chín sẵn",
        prep_img_text: "Hình minh họa",
        modal_btn_call: "📞 Gọi 082 355 9496",
        modal_btn_zalo: "💬 Nhắn Zalo"
    },
    en: {
        logo_text: "Mrs Nam",
        nav_home: "Home",
        nav_about: "Commitment",
        nav_products: "Products",
        nav_process: "Process",
        nav_combo: "Combos",
        nav_reviews: "Reviews",
        
        hero_title_html: "Fresh Seafood<br><span>Authentic Phan Thiet</span>",
        hero_desc: "Selecting the freshest daily catch, bringing the taste of the blue ocean straight to your kitchen.",
        btn_shop_now: "Today's Catch",
        btn_contact: "Contact Us",
        hero_note_pre: "⚓ Pre-order 2 days in advance is recommended. Need it urgently? ",
        hero_note_link: "Message us on Zalo",
        hero_note_post: "to check today's catch!",
        
        about_title: "Commitment from the Heart",
        about_desc: "Starting as a small stall at Phan Thiet fishing port, Mrs Nam Seafood understands that freshness is key. We carefully select every fish and squid to bring your family the perfect meal.",
        feat_1: "100% Fresh, wild-caught seafood",
        feat_2: "Free cleaning and preparation",
        feat_3: "Fast 2-hour local delivery",
        feat_4: "1-to-1 exchange if not up to standard",
        
        prod_title: "Today's Catch",
        badge_bestseller: "Best Seller",
        
        squid_title: "Phan Thiet Bigfin Reef Squid",
        squid_desc: "Daily caught squid, thick meat, naturally sweet and crunchy.",
        crab_title: "Live Blue Crab",
        crab_desc: "Premium grade 1 crabs, meaty and rich. Delivered alive.",
        cobia_title: "Sliced Cobia Fish",
        cobia_desc: "Wild cobia, perfect for sour soup or hotpot.",
        
        per_kg: "/kg",
        btn_buy: "Order Now",
        
        harbor_note_title: "Notes from the Harbor",
        harbor_note_p1_html: "Because we only sell wild seafood caught on the same day, quantities depend entirely on the fishing nets. To ensure your full menu, please <strong>pre-order 48 hours in advance</strong>.",
        harbor_note_p2_pre: "Need it <strong>delivered today</strong>? Don't hesitate to ",
        harbor_note_p2_link: "<strong>chat with us</strong>",
        harbor_note_p2_post: " to check the latest catch just brought ashore!",
        
        proc_title: "The Perfect 10 Process",
        proc_desc: "To maintain freshness straight from the sea, we strictly follow a 4-step process.",
        p1_title: "Wild Catch",
        p1_desc: "Seafood is hand-picked directly from local fishermen's nets.",
        p2_title: "Clean Preparation",
        p2_desc: "Cleaned with cold seawater, removing impurities to ensure food safety.",
        p3_title: "Cold Seal Packaging",
        p3_desc: "Packed in specialized styrofoam boxes covered in ice, sealed tightly.",
        p4_title: "Express Delivery",
        p4_desc: "Lightning-fast delivery to your door within 2 hours, guaranteeing freshness.",
        
        combo_sec_title: "Optimized Combos, Full of Love",
        combo_sec_desc: "Save time and money with seafood platters specially designed for your family parties.",
        combo_badge: "SAVE 15%",
        combo_title: "Mixed Seafood Hotpot Combo (For 4-6 people)",
        combo_desc: "Everything you need for a sweet, ocean-flavored seafood hotpot. Fully cleaned and prepped, ready to boil.",
        citem_1: "500g Bigfin reef squid (cleaned, sliced)",
        citem_2: "500g Live black tiger shrimp",
        citem_3: "500g Sliced cobia fillet",
        citem_4: "500g Live blue crab",
        per_combo: "/Combo",
        btn_buy_combo: "Order Combo Now",
        
        pb_title: "Plan the Perfect Menu - Never Run Out",
        pb_desc_html: "The best seafood is seafood that doesn't wait in a freezer. Loyal customers of <strong>Mrs Nam Seafood</strong> usually <strong>order 2 days in advance</strong> so we can select the healthiest catch from the port.",
        pb_hl_html: "Hosting an urgent party tonight? Click to <a href='https://zalo.me/0823559496' target='_blank' style='text-decoration: underline; color: inherit;'><strong>call our Hotline</strong></a>, we always keep a fresh reserve catch just for you.",
        
        rev_title: "Customer Reviews",
        rev_desc: "Thousands of family meals have been made perfect with Mrs Nam Seafood.",
        rev_1_text: "\"I ordered a hotpot combo for a weekend party. Opening the box, the seafood was still fresh and clean, no need to prep again. Will support the shop for a long time.\"",
        rev_1_name: "Ms. Lan Phuong",
        rev_1_loc: "HCMC",
        rev_2_text: "\"The blue crabs are meaty with lots of roe. The hotline consultation was enthusiastic, and delivery was fast within 2 hours. Mrs Nam is very reputable.\"",
        rev_2_name: "Mr. Quoc Bao",
        rev_2_loc: "HCMC",
        rev_3_text: "\"The styrofoam packaging is very professional, making it a great premium gift for my boss. Very satisfied with the squid quality here.\"",
        rev_3_name: "Mrs. Thu Tam",
        rev_3_loc: "Dong Nai",
        
        footer_brand: "Mrs Nam",
        footer_desc: "Bringing the taste of the ocean to your table. Reputable, high quality, fresh daily.",
        footer_hotline_text: "📞 Zalo / Order Hotline:",
        footer_nav_title: "Explore",
        footer_contact_title: "Contact Info",
        footer_address: "📍 Address: 20/15 Le Van Phan, Phu Thuy Ward, Phan Thiet City",
        footer_hours: "🕐 Order hours: 7:00 AM – 9:00 PM daily",
        footer_copy: "© 2026 Mrs Nam Seafood. All rights reserved.",
        rev_more: "See more real reviews from customers — message <a href='https://zalo.me/0823559496' target='_blank'>Zalo: 082 355 9496</a>",
        
        modal_title: "Order Product",
        modal_desc: "Please contact us directly to confirm your order so we can serve you best.",
        modal_prep_title: "Select preparation method:",
        prep_raw: "Deliver alive/whole",
        prep_clean: "Clean & slice",
        prep_steam: "Pre-steamed",
        prep_img_text: "Illustration",
        modal_btn_call: "📞 Call 082 355 9496",
        modal_btn_zalo: "💬 Message Zalo"
    }
};

let currentLang = 'vi';

function switchLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    
    // Update active button
    document.getElementById('lang-vi').classList.toggle('active', lang === 'vi');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Translate text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            // Use innerHTML because some translations contain HTML tags (like <br>, <span>, <strong>)
            el.innerHTML = i18n[lang][key];
        }
    });

    // Translate modal dynamically if it's currently open
    // It's mostly handled by the static HTML translation, but the title changes dynamically.
    // In our simplified JS, openOrderModal re-writes the title. We need to store the translation keys for dynamic items.
}

document.getElementById('lang-vi').addEventListener('click', () => switchLanguage('vi'));
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

// Header scroll effect: hide info bar, keep nav sticky
const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
}, { passive: true });

// Mobile info bar: rotate messages every 4s
const infoMessages = [
    '🕐 Nhận đơn: <strong>7:00 – 21:00</strong> hàng ngày',
    '🛵 Giao <strong>miễn phí nội ô</strong> Phan Thiết',
    '🏪 Hoặc <strong>đến lấy trực tiếp</strong> tại cửa hàng',
    '📦 Ngoại ô? <a href="https://zalo.me/0823559496" target="_blank" style="color:#ffd700;font-weight:600;">Nhắn Zalo báo giá ship</a>'
];

const mobileInfoBar = document.getElementById('infoBarMobile');
if (mobileInfoBar) {
    let currentMsg = 0;
    const msgEl = document.createElement('span');
    msgEl.className = 'info-rotate-msg visible';
    msgEl.innerHTML = infoMessages[0];
    mobileInfoBar.appendChild(msgEl);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
        setInterval(() => {
            msgEl.style.opacity = '0';
            setTimeout(() => {
                currentMsg = (currentMsg + 1) % infoMessages.length;
                msgEl.innerHTML = infoMessages[currentMsg];
                msgEl.style.opacity = '1';
            }, 450);
        }, 4000);
    }
}

// Modal & Preparation Logic
const modal = document.getElementById('orderModal');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.querySelector('.close-modal');
const prepPreviewImg = document.getElementById('prepPreviewImg');
const prepSection = document.getElementById('prepSection');

let currentProductOriginalImage = '';

function openOrderModal(productNameVI, originalImage, showPrep = true) {
    // Basic translation mapping for dynamic modal title
    const titleMap = {
        'Mực Lá Phan Thiết': i18n[currentLang].squid_title,
        'Ghẹ Xanh Sống': i18n[currentLang].crab_title,
        'Cá Bóp Cắt Lát': i18n[currentLang].cobia_title,
        'Combo Lẩu Hải Sản Thập Cẩm': i18n[currentLang].combo_title
    };

    modalTitle.innerHTML = titleMap[productNameVI] || productNameVI;
    currentProductOriginalImage = originalImage;
    
    if(showPrep) {
        prepSection.style.display = 'block';
        document.querySelector('input[value="raw"]').checked = true;
        updatePrepPreview();
    } else {
        prepSection.style.display = 'none';
    }
    
    modal.style.display = 'flex';
}

function updatePrepPreview() {
    const selectedPrep = document.querySelector('input[name="prepType"]:checked').value;
    if (selectedPrep === 'raw') {
        prepPreviewImg.src = currentProductOriginalImage;
    } else if (selectedPrep === 'cleaned') {
        prepPreviewImg.src = 'assets/process_clean_vietnam_1779953229005.png';
    } else if (selectedPrep === 'steamed') {
        prepPreviewImg.src = 'assets/prep_steamed_1779929618781.png';
    }
    // Show img only when src is set, hide broken icon
    prepPreviewImg.style.display = prepPreviewImg.src ? 'block' : 'none';
}

closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksEl = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinksEl.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinksEl.classList.remove('open')));

// ===== Render Daily Catch =====
(function renderDailyCatch() {
    const grid = document.getElementById('catchGrid');
    const dateEl = document.getElementById('catchDateDisplay');
    if (!grid) return;

    if (dateEl) dateEl.textContent = catchDate;

    const statusLabel = { available: 'Còn hàng', limited: 'Sắp hết', soldout: 'Hết hôm nay' };
    const statusClass = { available: 'status-available', limited: 'status-limited', soldout: 'status-soldout' };

    grid.innerHTML = dailyCatch.map(item => `
        <div class="catch-card${item.status === 'soldout' ? ' soldout' : ''}">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="catch-img">` : ''}
            <div class="catch-name">${item.name}</div>
            <div class="catch-price">${item.price}<span>/${item.unit}</span></div>
            <span class="catch-status ${statusClass[item.status]}">${statusLabel[item.status]}</span>
            ${item.status !== 'soldout'
                ? `<a href="https://zalo.me/0823559496" target="_blank" class="catch-btn">💬 Đặt qua Zalo</a>`
                : `<span class="catch-btn" style="background:#ccc;cursor:not-allowed;color:#666;">Hết hôm nay</span>`
            }
        </div>
    `).join('');
})();

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all others first
        document.querySelectorAll('.faq-question').forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            b.nextElementSibling.classList.remove('open');
        });

        // Toggle clicked item
        if (!isOpen) {
            btn.setAttribute('aria-expanded', 'true');
            answer.classList.add('open');
        }
    });
});
