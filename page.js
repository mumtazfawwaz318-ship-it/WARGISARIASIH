const outlets=[
 {name:'Benhil',area:'Jakarta Pusat',hours:'10.00 – 00.00 WIB',maps:'#',wa:'#'},
 {name:'Cikini',area:'Jakarta Pusat',hours:'12.00 – 22.00 WIB',maps:'#',wa:'#'},
 {name:'Kemang',area:'Jakarta Selatan',hours:'12.00 – 05.00 WIB',maps:'#',wa:'#'},
]
const Icon=({children})=><span className="icon">{children}</span>
export default function Home(){return <main>
  <section className="hero">
    <nav><div className="brand"><img src="/logo.png"/><span>SATE MARANGGI<br/>WARGI SARI ASIH</span></div><span className="navtag">WARGI HUB</span></nav>
    <div className="heroShade"/>
    <div className="heroContent"><p className="eyebrow">FROM WARGI, FOR WARGA.</p><h1>Rasa yang familiar,<br/><em>lebih dekat.</em></h1><p className="lead">Sate Maranggi, lebih dekat dengan keseharian warga Jakarta.</p><div className="actions"><a className="btn primary" href="#order">Pesan Sekarang <span>↗</span></a><a className="btn ghost" href="#outlets">Temukan Wargi <span>↓</span></a></div></div>
  </section>

  <section className="quick section cream"><p className="eyebrow red">WARGI HUB</p><h2>Lagi mau apa?</h2><div className="quickGrid">
    <a href="#menu"><Icon>☰</Icon><b>Lihat Menu</b><small>Lihat pilihan menu Wargi</small></a>
    <a href="#order"><Icon>↗</Icon><b>Pesan Online</b><small>Wargi sampai ke rumah</small></a>
    <a href="#outlets"><Icon>⌖</Icon><b>Cari Lokasi</b><small>Temukan Wargi terdekat</small></a>
    <a href="#feedback"><Icon>♡</Icon><b>Cerita ke Wargi</b><small>Kami dengar warga</small></a>
  </div></section>

  <section className="statement section"><div><p className="eyebrow">TENTANG WARGI</p><h2>Brand baru.<br/>Rasa yang <span>familiar.</span></h2></div><p>Wargi hadir membawa pengalaman menikmati Sate Maranggi lebih dekat dengan keseharian warga Jakarta — untuk keluarga, teman, rekan kerja, pasangan, dan setiap Wargi di satu meja.</p></section>

  <section id="outlets" className="section cream"><p className="eyebrow red">OUTLET KAMI</p><h2>Temukan Wargi-mu.</h2><p className="sub">Tiga lokasi di Jakarta. Pilih yang paling dekat dari kamu.</p><div className="outlets">{outlets.map((o,i)=><article className="outlet" key={o.name}><div className="number">0{i+1}</div><div><h3>{o.name}</h3><p>{o.area}</p><small>{o.hours}</small></div><div className="outletActions"><a href={o.maps}>Maps ↗</a><a href={o.wa}>WhatsApp ↗</a></div></article>)}</div></section>

  <section id="menu" className="food section"><p className="eyebrow">WARGI CRAVINGS</p><h2>Yang bikin<br/>ingin balik lagi.</h2><p>Api, asap, dan Sate Maranggi yang datang hangat ke meja.</p><a className="textLink" href="#">Lihat Menu Lengkap →</a></section>

  <section id="order" className="section cream order"><div><p className="eyebrow red">PESAN ONLINE</p><h2>Wargi juga bisa<br/>di rumah.</h2><p>Pilih platform favoritmu dan nikmati Wargi di mana pun kamu berada.</p></div><div className="delivery"><a href="#">GoFood ↗</a><a href="#">GrabFood ↗</a><a href="#">ShopeeFood ↗</a></div></section>

  <section id="feedback" className="feedback section"><p className="eyebrow">WARGI DENGAR WARGA</p><h2>Ceritain pengalamanmu.</h2><p>Yang enak kami syukuri. Yang belum enak, kami perbaiki. Setiap cerita membantu Wargi jadi lebih baik.</p><div className="actions"><a className="btn primary" href="#">Kasih Feedback →</a><a className="btn ghost" href="#">Tulis Ulasan di Google ↗</a></div></section>

  <section className="closing section cream"><p className="eyebrow red">EVERYONE HAS THEIR WARGI.</p><h2>Good food brings<br/>people together.</h2><p>Datang sebagai warga. Duduk satu meja sebagai Wargi.</p><div className="socials"><a href="#">Instagram ↗</a><a href="#">TikTok ↗</a></div></section>

  <footer><div className="brand"><img src="/logo.png"/><span>SATE MARANGGI<br/>WARGI SARI ASIH</span></div><p>From Wargi, For Warga.</p><small>© 2026 Sate Maranggi Wargi Sari Asih.</small></footer>
</main>}
