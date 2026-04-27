import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Star, Users, Clock } from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// ─── Nav ──────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => { window.history.pushState({}, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>Dr. <span>Manju</span></div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          {/* Left – Text */}
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="hero-eyebrow">
              General & Restorative Dentistry
            </motion.p>
            <motion.h1 variants={fadeUp} className="hero-name">
              Dr. Manju<br />
              <em>Sharma</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-title">
              BDS · Private Dentist
            </motion.p>
            <motion.p variants={fadeUp} className="hero-desc">
              With over 25 years of dedicated practice, Dr. Manju Sharma has
              transformed thousands of smiles by combining clinical precision
              with a gentle, patient-first approach that puts every person at ease.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <button
                id="hero-gallery-btn"
                className="btn-primary"
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              >
                View Transformations
              </button>
              <button
                id="hero-about-btn"
                className="btn-ghost"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                About Dr. Manju
              </button>
            </motion.div>


          </motion.div>

          {/* Right – Photo */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="hero-accent" />
            <div className="hero-photo-card">
              <img src="/assets/Manju_Front.jpeg" alt="Dr. Manju Sharma – Dental Surgeon" />
              <div className="hero-photo-badge">
                <div className="badge-name">Dr. Manju Sharma</div>
                <div className="badge-role">Dentist</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────
function About() {
  const services = [
    'Restorative Dentistry', 'Aligners',
    'Periodontal Care', 'Root Canal', 'Teeth Whitening',
    'Porcelain Veneers', 'Composite Veneers', 'Smile fast Veneers', 'Crowns & Bridges',
    'Dentures', 'Composite Bonding'
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <motion.div
            className="about-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">About</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              A Lifetime Devoted to<br /><em>Healthy Smiles</em>
            </motion.h2>
            <div className="divider" />

            <motion.div variants={fadeUp} className="about-body">
              <p>
                Dr. Manju Sharma graduated from the prestigious DAV Centenary Dental College, Yamunanagar.
                Her philosophy is simple: dentistry should be a partnership between
                doctor and patient. She takes time to listen, to educate, and to
                craft personalised treatment plans, never rushing a consultation.
                This approach has earned her the loyalty of multi-generational families
                who have trusted her with their oral health for decades.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="services-row">
              {services.map(s => (
                <span key={s} className="service-tag">{s}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Timeline */}
          <motion.div
            className="about-right"
            id="journey"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">Journey</motion.span>
            <motion.h3 variants={fadeUp} className="section-title" style={{ fontSize: '2rem', marginBottom: 40 }}>
              Her <em>Story</em>
            </motion.h3>

            <div className="timeline">
              {[
                {
                  year: '1994-1999',
                  heading: 'BDS · DAV Dental College, Yamunanagar',
                  body: 'Graduated at the top of her class with a Bachelor of Dental Surgery, winning the college gold medal for clinical excellence.',
                },
                {
                  year: '2001-2021',
                  heading: 'General Dentist, India',
                  body: 'Opened Balaji Dental Center in Delhi. A boutique practice built around patient comfort and uncompromising care.',
                },
                {
                  year: '2021-Present',
                  heading: 'Private Dentist, UK',
                  body: 'Still practising with the same passion as day one.',
                },
              ].map((item, i) => (
                <motion.div key={item.year} className="timeline-item" variants={fadeUp}>
                  <div className="timeline-dot" />
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-heading">{item.heading}</div>
                  <div className="timeline-body">{item.body}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────
const cases = [
  {
    id: '01',
    tag: 'Composite Bonding-Midline Diastema Closure',
    before: '/assets/patA-1.jpeg',
    after:  '/assets/patA-2.jpeg',
  },
  {
    id: '02',
    tag: 'Composite/Edge Bonding',
    before: '/assets/patB-2.jpeg',
    after:  '/assets/patB-1.jpeg',
  },
  {
    id: '03',
    tag: 'Composite Veneers/Freehand Veneers',
    before: '/assets/patC-1.jpeg',
    after:  '/assets/patC-2.jpeg',
  },
  {
    id: '04',
    tag: 'Porcelain Veneers',
    before: '/assets/patD-1.jpeg',
    after:  '/assets/patD-2.jpeg',
  },
  {
    id: '05',
    tag: 'Post & Core Buildup-Crown',
    before: '/assets/patE-1.jpeg',
    after:  '/assets/patE-2.jpeg',
  },
  {
    id: '06',
    tag: 'Composite Restoration',
    before: '/assets/patF-1.jpeg',
    after:  '/assets/patF-2.jpeg',
  },
  {
    id: '07',
    tag: 'Composite Restoration',
    before: '/assets/patG-1.jpeg',
    after:  '/assets/patG-2.jpeg',
  },
  {
    id: '08',
    tag: 'Porcelain Bridge',
    before: '/assets/patH-1.jpeg',
    after:  '/assets/patH-2.jpeg',
  },
  {
    id: '09',
    tag: 'Composite Veneers',
    before: '/assets/patI-1.jpeg',
    after:  '/assets/patI-2.jpeg',
  },
];

function CaseCard({ caseItem, index }) {
  return (
    <motion.div
      className="case-card"
      id={`case-${caseItem.id}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <div className="case-header">
        <span className="case-tag">{caseItem.tag}</span>
        <span className="case-num">Case {caseItem.id}</span>
      </div>

      <div className="case-images">
        <div className="case-img-wrap">
          <img src={caseItem.before} alt={`Before – Case ${caseItem.id}`} loading="lazy" />
          <span className="case-img-label label-before">Before</span>
        </div>
        <div className="case-img-wrap">
          <img src={caseItem.after} alt={`After – Case ${caseItem.id}`} loading="lazy" />
          <span className="case-img-label label-after">After</span>
        </div>
      </div>
    </motion.div>
  );
}

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <motion.div
          className="gallery-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">Patient Transformations</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Real Results,<br /><em>Real Confidence</em>
          </motion.h2>
          <motion.p variants={fadeUp}>
            Each case below represents a unique journey, with patients who trusted
            Dr. Manju with something profoundly personal. Every before-and-after
            pair is shared with full informed consent, reflecting the meaningful
            difference that expert dental care can make.
          </motion.p>
        </motion.div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <CaseCard key={c.id} caseItem={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">Dr. <span>Manju</span> Sharma</div>
            <p className="footer-tagline">
              Transforming smiles with compassion, precision, and 25 years of
              dedicated dental expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <div className="footer-col-title">Navigate</div>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col" id="contact-info">
            <div className="footer-col-title">Get in Touch</div>
            <div className="footer-contact-item">
              <Phone size={15} style={{ color: 'var(--clr-teal)', flexShrink: 0, marginTop: 2 }} />
              <span>+44 7880569525</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} style={{ color: 'var(--clr-teal)', flexShrink: 0, marginTop: 2 }} />
              <span>drmanju1973@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Dr. Manju Sharma. All rights reserved.</span>
          <span className="footer-credits">Crafted with <span>♥</span> by Divyansh</span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}
