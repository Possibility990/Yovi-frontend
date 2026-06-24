class Dashboard {
  constructor() {

    // ── img helper must be defined BEFORE it is used in the data arrays ──
    const img = (q) => `https://images.unsplash.com/${q}?w=400&q=80&auto=format&fit=crop`;

    // ── mobile menu ──
    this.burger = document.querySelector('.burger');

    this.featured = [
      { name: 'iPhone 13 Pro Max 256GB',   price: '₦700,000', img: img('photo-1592750475338-74b7b21085ab') },
      { name: 'HP Pavilion Laptop 15.6',   price: '₦420,000', img: img('photo-1496181133206-80ce9b88a853') },
      { name: 'Nike Air Force 1 White',    price: '₦45,000',  img: img('photo-1542291026-7eec264c27ff') },
      { name: 'Gucci Handbag Black',       price: '₦790,000', img: img('photo-1584917865442-de89df76afd3') },
      { name: 'Apple Watch Series 7 45mm', price: '₦390,000', img: img('photo-1546868871-7041f2a55e12') },
      { name: 'Canon EOS Camera',          price: '₦750,000', img: img('photo-1502920917128-1aa500764cbd') },
    ];

    this.pills = [
      'Mechanics · 1,820 nearby',
      'Plumbers · 950 available',
      'Tailors · 1,180 nearby',
      'Electricians · 760 nearby',
      'Hairdressers · 2,150 nearby',
      'Home Cleaners · 540 nearby',
    ];

    this.flash = [
      { tag: 'NEW',  name: 'Vantage Pro Watch',    now: '₦129K', was: '₦170K', img: img('photo-1523275335684-37898b6baf30') },
      { tag: 'NEW',  name: 'Lumina Shades',        now: '₦45K',  was: '₦65K',  img: img('photo-1572635196237-14b3f281503f') },
      { tag: 'SALE', name: 'Nitro Runners',        now: '₦110K', was: '₦150K', img: img('photo-1542291026-7eec264c27ff') },
      { tag: 'SALE', name: 'Sonic Pro HD',         now: '₦89K',  was: '₦120K', img: img('photo-1505740420928-5e560c06d30e') },
      { tag: null,   name: 'Modern Slim Tablet',   now: '₦349K', was: '₦450K', img: img('photo-1561154464-82e9adf32764') },
    ];

    this.top = [
      { name: 'Infinix Note 40 Pro',            now: '₦310,000', img: img('photo-1511707171634-5f897ff02aa9') },
      { name: 'LP 32" Digital TV',              now: '₦210,000', img: img('photo-1593359677879-a4bb92f829d1') },
      { name: 'Yamaha 7.2 Channel Wireless',    now: '₦85,000',  img: img('photo-1545454675-3531b543be5d') },
      { name: 'Rechargeable Fan',               now: '₦50,000',  img: img('photo-1565843708714-52ecf69ab81f') },
      { name: 'YOVI Backpack',                  now: '₦35,000',  img: img('photo-1553062407-98eeb64c6a62') },
    ];

    this.pros = [
      { name: 'Marcus Chen',  role: 'Licensed Master Plumber',      rating: 4.9, avatar: img('photo-1507003211169-0a1dd7228f2d') },
      { name: 'Sarah Miller', role: 'Interior Design Consultant',   rating: 5.0, avatar: img('photo-1494790108377-be9c29b29330') },
      { name: 'David Wilson', role: 'Electrical Specialist',        rating: 4.8, avatar: img('photo-1500648767791-00dcc994a43e') },
    ];

    this.reco = [
      { tag: '-15%', name: 'Premium Smartphone Cleaning Service', price: 'From ₦45.00', img: img('photo-1556761175-b413da4baf72') },
      { tag: '',     name: 'Aviator Gold Edition Shades',         price: '₦100.00',     img: img('photo-1577803645773-f96470509666') },
      { tag: '',     name: 'Cosmic Jetwing Pros',                 price: '₦65.99',      img: img('photo-1542291026-7eec264c27ff') },
      { tag: 'SALE', name: 'Aerolite XR Runners',                 price: '₦45.50',      img: img('photo-1595950653106-6c9ebd614d3a') },
      { tag: 'SALE', name: 'Wireless ProBeats',                   price: '₦129.99',     img: img('photo-1583394838336-acd977736f90') },
      { tag: 'SALE', name: 'StarCircle Watch',                    price: '₦99.00',      img: img('photo-1524592094714-0f0654e20314') },
    ];

    // ── store timer handles so stacked intervals can't build up on re-render ──
    this._timers = {};

    this.render();
    this.countdown('timer1', 3 * 3600 + 45 * 60 + 12);
    this.countdown('timer2', 6 * 3600 + 45 * 60 + 12);
    this.addEventListeners();
  }

  render() {
    const $ = (s) => document.querySelector(s);

    $('#featured').innerHTML = this.featured.map(p => `
      <article class="p-card">
        <button class="heart" aria-label="Favorite">♡</button>
        <div class="img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
        <div class="name">${p.name}</div>
        <div class="price">${p.price}</div>
      </article>`).join('');

    $('#pills').innerHTML = this.pills.map(p =>
      `<div class="pill"><span class="dot"></span>${p}</div>`
    ).join('');

    $('#flash').innerHTML = this.flash.map(d => `
      <article class="deal">
        ${d.tag ? `<span class="ribbon">${d.tag}</span>` : ''}
        <div class="img"><img src="${d.img}" alt="${d.name}" loading="lazy"></div>
        <div class="body">
          <div class="name">${d.name}</div>
          <div class="price"><span class="now">${d.now}</span><span class="was">${d.was}</span></div>
          <button class="add">Add to Cart</button>
        </div>
      </article>`).join('');

    $('#topsell').innerHTML = this.top.map(d => `
      <article class="deal">
        <div class="img"><img src="${d.img}" alt="${d.name}" loading="lazy"></div>
        <div class="body">
          <div class="name">${d.name}</div>
          <div class="price"><span class="now" style="color:var(--green)">${d.now}</span></div>
          <button class="add">Add to Cart</button>
        </div>
      </article>`).join('');

    $('#pros').innerHTML = this.pros.map(p => `
      <div class="pro-card">
        <div class="pro-top">
          <div class="avatar"><img src="${p.avatar}" alt="${p.name}"></div>
          <div class="info">
            <div class="row">
              <div class="name">${p.name}</div>
              <div class="rating">★ ${p.rating.toFixed(1)}</div>
            </div>
            <div class="role">${p.role}</div>
            <div class="pro-verified">✓ Verified Pro</div>
          </div>
        </div>
        <button class="btn btn-primary btn-sm btn-block">Book Now</button>
      </div>`).join('');

    $('#reco').innerHTML = this.reco.map(r => `
      <article class="p-card">
        ${r.tag ? `<span class="ribbon" style="position:absolute;top:8px;left:8px;background:var(--orange);color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:4px">${r.tag}</span>` : ''}
        <div class="img"><img src="${r.img}" alt="${r.name}" loading="lazy"></div>
        <div class="name">${r.name}</div>
        <div class="price" style="color:var(--green)">${r.price}</div>
        <button class="add" style="margin-top:8px;width:100%;border:1px solid var(--line);background:#fff;padding:7px;font-size:12px;font-weight:600;border-radius:8px">Book</button>
      </article>`).join('');
  }

  countdown(elId, secs) {
    // ── clear any previous interval for this element to prevent stacking ──
    if (this._timers[elId]) clearInterval(this._timers[elId]);

    const el = document.getElementById(elId);
    if (!el) return; // guard: element must exist in DOM

    let s = secs;
    const fmt = (n) => String(n).padStart(2, '0');

    const tick = () => {
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const x = s % 60;
      el.textContent = `⏱ ${fmt(h)}:${fmt(m)}:${fmt(x)}`;
      s = s > 0 ? s - 1 : secs; // reset when it reaches zero
    };

    tick();
    this._timers[elId] = setInterval(tick, 1000);
  }

  addEventListeners() {
    if (!this.burger) return;

    this.burger.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (!links) return;

      const open = links.style.display === 'flex';
      links.style.display       = open ? '' : 'flex';
      links.style.position      = 'absolute';
      links.style.top           = '64px';
      links.style.left          = '20px';
      links.style.right         = '20px';
      links.style.flexDirection = 'column';
      links.style.borderRadius  = '12px';
      links.style.padding       = '12px';
      links.style.background    = '#fff';
      links.style.boxShadow     = 'var(--shadow)';
    });
  }
}

export default Dashboard;