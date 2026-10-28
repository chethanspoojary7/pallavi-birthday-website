import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, MailOpen, Star, Music2, Cake, ArrowDown, PartyPopper, X, HandHeart, ChevronLeft, ChevronRight } from 'lucide-react';

const floaties = Array.from({ length: 18 }, (_, i) => ({
  id: i, left: `${(i * 37 + 7) % 100}%`, delay: (i % 7) * 0.65,
  duration: 8 + (i % 6), size: 10 + (i % 4) * 5,
  symbol: ['♡', '✦', '♥', '✿'][i % 4]
}));

const moments = [
  { number: '01', title: 'The institute days', text: 'We first crossed paths at the institute… and little did I know that life was introducing me to someone who would become family.', icon: <Sparkles /> },
  { number: '02', title: '9 to 6, together', text: 'Then came our internship days — almost 9 AM to 6 PM together. Ordinary workdays became memories I’ll always keep close.', icon: <Star /> },
  { number: '03', title: 'You stayed', text: 'When I was at my lowest and it felt like nobody was there, you listened. You helped. You cared. You made me feel less alone.', icon: <HandHeart /> },
];

const reasons = [
  ['You listen', 'You let me speak, even when I don’t know how to explain what I feel.'],
  ['You care', 'You notice the little things and make people feel they matter.'],
  ['You show up', 'You were there in a chapter of my life when I really needed someone.'],
  ['You feel like home', 'You gave me the happiness of having the sister I always wished for.'],
];

function Confetti() {
  return <div className="confetti" aria-hidden="true">{Array.from({ length: 70 }, (_, i) =>
    <i key={i} style={{ left: `${(i * 29) % 100}%`, animationDelay: `${(i % 15) * .13}s`, animationDuration: `${3 + (i % 7) * .35}s`, background: ['#ff7b9c','#f6c85f','#a58bff','#7bcbb5','#ffad8a'][i % 5] }} />
  )}</div>;
}

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const [musicNote, setMusicNote] = useState(false);
  const [checked, setChecked] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const pages = ['Birthday', 'Our story', 'Why you', 'Your letter', 'A promise', 'Birthday wish'];
  const scrollTo = (id) => {
    setActivePage(id === 'letter' ? 3 : id === 'story' ? 1 : 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const changePage = (page) => {
    setActivePage(Math.max(0, Math.min(pages.length - 1, page)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    document.querySelector('.page.is-active')?.scrollTo({ top: 0 });
  }, [activePage]);
  const toggleReason = (i) => setChecked(prev => prev.includes(i) ? prev.filter(n => n !== i) : [...prev, i]);

  return (
    <main>
      <div className="float-layer" aria-hidden="true">
        {floaties.map(f => <motion.span key={f.id} initial={{ y: '110vh', opacity: 0 }} animate={{ y: '-12vh', opacity: [0, .7, .7, 0], rotate: [0, 20, -20, 0] }} transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: 'linear' }} style={{ left: f.left, fontSize: f.size }}>{f.symbol}</motion.span>)}
      </div>

      <nav className="nav">
        <a className="brand" href="#top" onClick={event => { event.preventDefault(); scrollTo('top'); }}><span className="brand-icon"><Heart size={15} fill="currentColor" /></span> a little love note</a>
        <button className="nav-pill" onClick={() => scrollTo('letter')}>Your letter <MailOpen size={15} /></button>
      </nav>

      <div className={`page hero-page ${activePage === 0 ? 'is-active' : ''}`} hidden={activePage !== 0}>
      <section className="hero section" id="top">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="eyebrow"><span className="eyebrow-dot" /> MADE WITH SO MUCH LOVE <Heart size={13} fill="currentColor" /></div>
          <h1>Happy birthday,<br /><em>Pallavi Akka.</em></h1>
          <p className="hero-lede">For the sister life surprised me with,<br className="desktop-break" /> and the beautiful soul I’ll always be grateful for.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollTo('story')}>Open your surprise <Sparkles size={17} /></button>
            <button className="text-btn" onClick={() => scrollTo('letter')}>A letter for you <ArrowDown size={15} /></button>
          </div>
          <div className="tiny-note"><Heart size={14} fill="currentColor" /> Your little brother, always.</div>
        </motion.div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .2 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <motion.div className="sunburst" animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}>✳</motion.div>
          <motion.div className="heart-sticker" animate={{ y: [0, -9, 0], rotate: [-7, 4, -7] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}>
            <svg className="heart-photo" viewBox="0 0 200 200" role="img" aria-label="Pallavi smiling in a pink sari">
              <defs><clipPath id="portrait-heart-clip"><path d="M100 178 C89 168 20 123 20 70 C20 36 45 18 70 18 C84 18 94 26 100 39 C106 26 116 18 130 18 C155 18 180 36 180 70 C180 123 111 168 100 178 Z" /></clipPath></defs>
              <image href="/pallavi-portrait.jpg" x="0" y="0" width="200" height="200" preserveAspectRatio="xMidYMin slice" clipPath="url(#portrait-heart-clip)" />
              <path className="heart-photo-outline" d="M100 178 C89 168 20 123 20 70 C20 36 45 18 70 18 C84 18 94 26 100 39 C106 26 116 18 130 18 C155 18 180 36 180 70 C180 123 111 168 100 178 Z" />
            </svg>
          </motion.div>
          <div className="mini-card card-top"><Sparkles size={15} /> my favourite human</div>
          <div className="mini-card card-bottom"><span className="tiny-heart">♥</span> chosen family</div>
          <div className="flower flower-one">✿</div><div className="flower flower-two">✿</div><div className="flower flower-three">✽</div>
          <div className="art-caption">a little reminder<br /><b>you are so loved.</b></div>
        </motion.div>
        <div className="scroll-cue" onClick={() => scrollTo('story')}><span /> TURN THE PAGE FOR YOUR SURPRISE</div>
      </section>
      </div>

      <div className={`page story-page ${activePage === 1 ? 'is-active' : ''}`} hidden={activePage !== 1}>
      <section className="intro-band">
        <div className="band-inner"><span className="band-spark">✳</span><p>Some people enter your life quietly and somehow become <em>your people.</em></p><span className="band-spark">✳</span></div>
      </section>

      <section className="section story-section" id="story">
        <div className="section-heading">
          <div className="eyebrow centered">OUR LITTLE STORY</div>
          <h2>From institute strangers<br />to <em>my own AKKA.</em></h2>
          <p>Some of my favourite memories don’t look extraordinary from the outside.<br className="desktop-break" /> They’re precious because you were there.</p>
        </div>
        <div className="timeline">
          {moments.map((m, i) => <motion.article className={`moment moment-${i + 1}`} key={m.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55, delay: i * .12 }}>
            <div className="moment-icon">{m.icon}</div><div className="moment-number">{m.number}</div><h3>{m.title}</h3><p>{m.text}</p>
          </motion.article>)}
        </div>
        <div className="memory-footnote"><span>♡</span> If I could revisit one ordinary day, I’d choose one of those 9-to-6 days with you.</div>
      </section>
      </div>

      <div className={`page reasons-page ${activePage === 2 ? 'is-active' : ''}`} hidden={activePage !== 2}>
      <section className="reasons-section section">
        <div className="reasons-layout">
          <div className="reasons-title"><div className="eyebrow">A FEW THINGS I HOPE YOU KNOW</div><h2>Why you’ll<br />always be <em>special.</em></h2><p>Tap each little card. These are only a few reasons — the full list would need a whole website of its own.</p><div className="doodle-heart">♡</div></div>
          <div className="reason-grid">
            {reasons.map(([title, desc], i) => <motion.button key={title} className={`reason-card ${checked.includes(i) ? 'selected' : ''}`} onClick={() => toggleReason(i)} whileHover={{ y: -4 }} whileTap={{ scale: .98 }}>
              <span className="reason-top"><span>0{i + 1}</span><Heart size={17} fill={checked.includes(i) ? 'currentColor' : 'none'} /></span>
              <h3>{title}</h3><p>{checked.includes(i) ? desc : 'Tap to open this little reminder…'}</p><span className="tap-hint">{checked.includes(i) ? 'opened with love ♥' : 'tap to reveal ↗'}</span>
            </motion.button>)}
          </div>
        </div>
      </section>
      </div>

      <div className={`page letter-page ${activePage === 3 ? 'is-active' : ''}`} hidden={activePage !== 3} tabIndex={0} aria-label="Birthday letter page">
      <section className="letter-section section" id="letter">
        <div className="letter-decoration deco-left">✿</div><div className="letter-decoration deco-right">✳</div>
        <div className="letter-wrap">
          <div className="eyebrow centered">JUST BETWEEN US</div>
          <h2>One thing I need<br />you to <em>hear from me.</em></h2>
          <p className="letter-subtitle">A little letter for my favourite AKKA.</p>
          <motion.div className={`envelope ${letterOpen ? 'opened' : ''}`} whileHover={{ y: -4 }} onClick={() => setLetterOpen(v => !v)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setLetterOpen(v => !v)} aria-label={letterOpen ? 'Close birthday letter' : 'Open birthday letter'}>
            <div className="envelope-back" /><div className="letter-paper"><div className="paper-heart">♡</div><h3>Dear Pallavi Akka,</h3><p>There’s something I’ve wanted you to know…</p><span className="paper-sign">with love, always</span></div><div className="envelope-flap" /><div className="envelope-front" /><div className="wax-seal"><Heart size={22} fill="currentColor" /></div>
          </motion.div>
          <button className="primary-btn letter-button" onClick={() => setLetterOpen(v => !v)}>{letterOpen ? 'Fold the letter back' : 'Open your letter'} <MailOpen size={17} /></button>
          <AnimatePresence>{letterOpen && <motion.article className="full-letter" initial={{ opacity: 0, height: 0, y: 18 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: 10 }} transition={{ duration: .55 }}>
            <p className="letter-greeting">My dearest Pallavi Akka,</p>
            <p>First of all, <strong>HAPPIEST BIRTHDAY, AKKA!</strong> 💗 I hope this new year of your life gives you all the happiness, peace, love, and beautiful things your heart deserves.</p>
            <p>Before I met you, whenever I watched other siblings together, a small part of me felt sad. I used to wish that I had a sister too — someone I could talk to, someone who would care for me, someone who would make me feel that I wasn’t alone. I never knew that life was already preparing such a beautiful answer to that wish.</p>
            <p>We met at the institute, but somehow our internship brought us close. Those everyday <strong>9-to-6 hours</strong> with you became so much more than just time spent together. They became memories I’ll carry with me long after those days are over.</p>
            <p>You were there for me when I was at my lowest, when it felt like nobody was there. You listened to me, helped me, cared for me, and made space for me without making me feel like a burden. You may not even realise how much that meant to me. You made a difficult chapter feel less lonely just by being you.</p>
            <p>And today, when I see you in my life, I feel genuinely happy and lucky. Because I don’t have to keep wishing for a sister anymore. <strong>I found one in you.</strong> You care for me in ways that sometimes feel even more than my own sister does, and I’ll always be grateful for the love you’ve shown me.</p>
            <p>You’re not just my FRIEND. You’re my AKKA, my comfort person, my support, and one of the most beautiful souls life has gifted me. You’ve become a first priority in my heart, and no matter how busy life gets or where our paths take us, I will never forget you — not for as long as I live.</p>
            <p>Thank you for listening. Thank you for helping. Thank you for caring. Thank you for being beside me when I needed someone. And most of all, <strong>thank you for fulfilling my little dream of having a sister.</strong> You might think these are small things, but to me, they mean the world.</p>
            <p>On your birthday, I wish you the kind of love you so freely give to others. I hope life is gentle with you, that your dreams find their way to you, that you always have reasons to smile, and that you never forget how deeply appreciated you are.</p>
            <p className="letter-emphasis">I got lucky in life — not because everything was perfect, but because life gave me an AKKA like you. ♡</p>
            <p>Happy birthday once again, Pallavi Akka. I’m always cheering for you. Today, tomorrow, and for all the days to come.</p>
            <p className="letter-signoff">With all my love,<br /><span>Your little brother, always. ♡</span></p>
          </motion.article>}</AnimatePresence>
        </div>
      </section>
      </div>

      <div className={`page promise-page ${activePage === 4 ? 'is-active' : ''}`} hidden={activePage !== 4}>
      <section className="promise-section section">
        <div className="promise-card">
          <div className="promise-stamp"><Heart fill="currentColor" size={28} /></div>
          <div className="eyebrow centered">A LITTLE PROMISE</div>
          <h2>Different families,<br /><em>one heart-bond.</em></h2>
          <p>Thank you for being the sister I always wished for.<br />You’ll always have a little brother in me.</p>
          <div className="promise-signature">Forever your little brother <span>♡</span></div>
        </div>
      </section>
      </div>

      <div className={`page finale-page ${activePage === 5 ? 'is-active' : ''}`} hidden={activePage !== 5}>
      <section className="finale section">
        <div className="finale-stars">✦　✧　✦</div>
        <div className="eyebrow centered">AND NOW… THE FUN PART</div>
        <h2>Make a wish,<br /><em>birthday girl!</em></h2>
        <p>One last little surprise, made especially for you.</p>
        <button className="primary-btn finale-btn" onClick={() => setSurprise(true)}><Gift size={18} /> Reveal your birthday magic <Sparkles size={16} /></button>
        <div className="cake-doodle"><span>✧</span><Cake size={62} strokeWidth={1.2} /><span>✧</span></div>
        <AnimatePresence>{surprise && <motion.div className="surprise-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Confetti />
          <motion.div className="surprise-modal" initial={{ scale: .7, y: 30, rotate: -2 }} animate={{ scale: 1, y: 0, rotate: 0 }} exit={{ scale: .8 }} transition={{ type: 'spring', damping: 18 }}>
            <button className="close-modal" onClick={() => setSurprise(false)} aria-label="Close surprise"><X size={20} /></button>
            <div className="modal-icon">🎂</div><div className="eyebrow centered">HAPPY BIRTHDAY, AKKA!</div>
            <h2>Keep shining,<br /><em>Pallavi.</em></h2>
            <p>May every bit of kindness you give the world find its way back to you, a hundred times over.</p>
            <div className="wish-list"><span>♡ more laughter</span><span>✦ dreams coming true</span><span>♡ peaceful days</span><span>✦ endless love</span></div>
            <div className="modal-footer">You are loved more than words can say. <Heart size={15} fill="currentColor" /></div>
            <button className="primary-btn" onClick={() => { setSurprise(false); scrollTo('top'); }}>One more hug from your little brother <Heart size={16} /></button>
          </motion.div>
        </motion.div>}</AnimatePresence>
      </section>

      <footer><div className="footer-heart"><Heart size={17} fill="currentColor" /></div><p>Made with love, for Pallavi Akka.</p><span>Some people become family by heart. ♡</span><small>THIS LITTLE CORNER OF THE INTERNET IS YOURS.</small></footer>
      </div>

      <nav className="page-controls" aria-label="Page navigation">
        <button className="page-step" onClick={() => changePage(activePage - 1)} disabled={activePage === 0} aria-label="Previous page"><ChevronLeft size={17} /><span>Back</span></button>
        <div className="page-status">
          <div className="page-dots">
            {pages.map((label, index) => <button key={label} className={index === activePage ? 'current' : ''} onClick={() => changePage(index)} aria-label={`Go to ${label}`} aria-current={index === activePage ? 'page' : undefined} />)}
          </div>
          <span>{activePage + 1} <i>/</i> {pages.length}</span>
        </div>
        <button className="page-step" onClick={() => changePage(activePage + 1)} disabled={activePage === pages.length - 1} aria-label="Next page"><span>Next</span><ChevronRight size={17} /></button>
      </nav>
    </main>
  );
}
