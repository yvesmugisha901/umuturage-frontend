import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/home.css";

const heroImages = [
  "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920", // Rwanda hills
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920", // Rwanda community
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920"  // Rwanda landscape
];

const stats = [
  { value: "15,000+", label: "Registered Residents", icon: "👥", kiny: "Abaturage Banditse" },
  { value: "250+", label: "Connected Villages", icon: "🏘️", kiny: "Imidugudu Ihujwe" },
  { value: "100%", label: "Data Security", icon: "🔒", kiny: "Umutekano w'Amakuru" },
  { value: "24/7", label: "Support Available", icon: "📞", kiny: "Ubufasha Buhoraho" }
];

const features = [
  {
    icon: "🏘️",
    title: "Household Management",
    titleKiny: "Gucunga Ingo",
    description: "Register and track all households from Umudugudu to Akagari, with detailed information on each resident.",
    color: "#667eea",
    stats: "5000+ active households"
  },
  {
    icon: "📊",
    title: "Real-Time Reports",
    titleKiny: "Raporo zikora ako kanya",
    description: "Generate instant reports on population, security, and community well-being for better decision making.",
    color: "#764ba2",
    stats: "Live updates"
  },
  {
    icon: "🔐",
    title: "Enhanced Security",
    titleKiny: "Umutekano Ukomeye",
    description: "Track population movements, identify security risks and quickly alert authorities when needed.",
    color: "#f093fb",
    stats: "Alerts in 2 minutes"
  },
  {
    icon: "🏥",
    title: "Well-being Tracking",
    titleKiny: "Gukurikirana Imibereho",
    description: "Monitor health, education and social needs of each household for better service delivery.",
    color: "#4facfe",
    stats: "15 indicators tracked"
  },
  {
    icon: "📱",
    title: "Mobile & Offline",
    titleKiny: "Kanda na Offline",
    description: "Work anywhere, even without internet. Automatically sync when you're connected.",
    color: "#43e97b",
    stats: "Works everywhere"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Administrative Hierarchy",
    titleKiny: "Urwego rw'Ubuyobozi",
    description: "Complete structure: Umudugudu → Akagari → Umurenge → Akarere → Intara, with validation at each level.",
    color: "#fa709a",
    stats: "5 levels integrated"
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Household Registration",
    titleKiny: "Kwandikisha Ingo",
    description: "Abakuru b'Imidugudu (Isibo) register information for each household: head of family, number of members, location.",
    icon: "✍️"
  },
  {
    step: "02",
    title: "Village Validation",
    titleKiny: "Kwemeza ku Mudugudu",
    description: "Umukuru w'Umudugudu reviews and approves data submitted by the Isibo leaders.",
    icon: "✅"
  },
  {
    step: "03",
    title: "Cell Consolidation",
    titleKiny: "Guhuza ku Kagari",
    description: "Validated data moves up to the cell (Akagari) for consolidation and analysis.",
    icon: "📈"
  },
  {
    step: "04",
    title: "Reports & Action",
    titleKiny: "Raporo n'Ibikorwa",
    description: "Generate reports for security, health, education and make informed decisions for your community.",
    icon: "🎯"
  }
];

const benefits = [
  {
    title: "For Community Leaders",
    titleKiny: "Ku Bakuru b'Abaturage",
    points: [
      "Instant access to all household data (Amakuru yose y'ingo)",
      "Quick identification of vulnerable households (Kumenya ingo zikeneye ubufasha)",
      "Track population movements (Gukurikirana imyimuka y'abaturage)",
      "Automatic reports for higher authorities (Raporo zikorerwa ubuyobozi bukuru)"
    ],
    icon: "👔"
  },
  {
    title: "For Security",
    titleKiny: "Ku Mutekano",
    points: [
      "Detect unregistered residents (Kumenya abaturage batanditse)",
      "Alerts on suspicious movements (Kumenyeshwa ibikorwa bikekwaho)",
      "Complete history of changes (Amateka yuzuye y'impinduka)",
      "Coordination with Rwanda National Police (Gukorana n'Abapolisi b'u Rwanda)"
    ],
    icon: "🛡️"
  },
  {
    title: "For Social Development",
    titleKiny: "Ku Iterambere ry'Abaturage",
    points: [
      "Identify education needs (Kumenya ibikenewe mu burezi)",
      "Track health coverage (Gukurikirana ubwuzuzanye bw'ubuvuzi)",
      "Infrastructure planning (Gutegura ibikorwa remezo)",
      "Targeted assistance programs (Gahunda zo gufasha abakeneye)"
    ],
    icon: "🏗️"
  }
];

const testimonials = [
  {
    name: "Jean Baptiste HABIMANA",
    role: "Umukuru w'Umudugudu, Kigali",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Umuturage Connect has revolutionized how we manage our village. We now have all information in real-time and can respond quickly to emergencies. Ni programme nziza cyane!",
    rating: 5,
    location: "Kicukiro, Kigali"
  },
  {
    name: "Marie Claire MUKANDORI",
    role: "Cell Coordinator, Musanze",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Thanks to this platform, we identified 45 households needing medical assistance in less than a week. Bifasha cyane mu kugira ngo tubafashe neza!",
    rating: 5,
    location: "Musanze, Amajyaruguru"
  },
  {
    name: "Patrick NIYONZIMA",
    role: "District Administrator, Huye",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "The consolidated reports help us make data-driven decisions. Security in our district has significantly improved. Twifuza ko imidugudu yose iyikoresha!",
    rating: 5,
    location: "Huye, Amajyepfo"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const observerRefs = useRef([]);

  // Auto slide hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      {/* Hero Section with Rwanda Flag Colors */}
      <section className="hero-section">
        {/* Animated Background */}
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url(${heroImages[currentSlide]})`,
            transform: `scale(1.1) translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="hero-overlay rwanda-gradient" />

        {/* Animated Gradient Mesh */}
        <div className="gradient-mesh">
          <div className="mesh-circle mesh-1 rwanda-blue" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
          <div className="mesh-circle mesh-2 rwanda-yellow" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
          <div className="mesh-circle mesh-3 rwanda-green" style={{ transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)` }} />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            🇷🇼 Made in Rwanda • Bikozwe mu Rwanda
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Umuturage Connect</span><br />
            Modern Community Management
          </h1>
          
          <p className="hero-subtitle">
            National platform for resident tracking, enhanced security,
            <br />and community well-being across Rwanda.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              <span>Get Started Free</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#how-it-works" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>How It Works</span>
            </a>
          </div>

          {/* Administrative Levels */}
          <div className="admin-levels">
            <div className="level">
              <span className="level-text">Umudugudu(Isibo)</span>
              <span className="level-sub">Village</span>
            </div>
            <div className="arrow">→</div>
            <div className="level">
              <span className="level-text">Akagari</span>
              <span className="level-sub">Cell</span>
            </div>
            <div className="arrow">→</div>
            <div className="level">
              <span className="level-text">Umurenge</span>
              <span className="level-sub">Sector</span>
            </div>
            <div className="arrow">→</div>
            <div className="level">
              <span className="level-text">Akarere</span>
              <span className="level-sub">District</span>
            </div>
            <div className="arrow">→</div>
            <div className="level">
              <span className="level-text">Intara</span>
              <span className="level-sub">Province</span>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

       {/* Floating Info Cards */}
  
      </section> 

      {/* Stats Section */}
      <section className="stats-section" id="stats" ref={el => observerRefs.current[0] = el}>
        <div className={`stats-container ${isVisible.stats ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-kiny">{stat.kiny}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works" ref={el => observerRefs.current[1] = el}>
        <div className="section-header">
          <span className="section-tag">Process • Inzira</span>
          <h2 className="section-title">How Umuturage Connect Works<br />
            <span className="title-kiny">Uburyo Umuturage Connect ukora</span>
          </h2>
          <p className="section-description">
            A simple and effective system for all administrative levels
          </p>
        </div>

        <div className={`how-it-works-grid ${isVisible['how-it-works'] ? 'visible' : ''}`}>
          {howItWorks.map((item, index) => (
            <div key={index} className="how-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="how-step">{item.step}</div>
              <div className="how-icon">{item.icon}</div>
              <h3 className="how-title">{item.title}</h3>
              <p className="how-title-kiny">{item.titleKiny}</p>
              <p className="how-description">{item.description}</p>
              {index < howItWorks.length - 1 && <div className="how-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features" ref={el => observerRefs.current[2] = el}>
        <div className="section-header">
          <span className="section-tag">Features • Ibikorwa</span>
          <h2 className="section-title">Everything You Need<br />For Your Community</h2>
          <p className="section-description">
            Powerful tools to simplify administrative management
          </p>
        </div>

        <div className={`features-grid ${isVisible.features ? 'visible' : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-title-kiny">{feature.titleKiny}</p>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-stats">{feature.stats}</div>
              <div className="feature-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" id="benefits" ref={el => observerRefs.current[3] = el}>
        <div className="section-header">
          <span className="section-tag">Benefits • Inyungu</span>
          <h2 className="section-title">Who Is Umuturage Connect For?<br />
            <span className="title-kiny">Umuturage Connect ni uw'abande?</span>
          </h2>
        </div>

        <div className={`benefits-tabs ${isVisible.benefits ? 'visible' : ''}`}>
          <div className="tabs-nav">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{benefit.icon}</span>
                <div className="tab-text">
                  <span className="tab-title">{benefit.title}</span>
                  <span className="tab-kiny">{benefit.titleKiny}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
              >
                <ul className="benefits-list">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="benefit-item">
                      <span className="check-icon">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials" ref={el => observerRefs.current[4] = el}>
        <div className="section-header">
          <span className="section-tag">Testimonials • Ubuhamya</span>
          <h2 className="section-title">What Our Users Say<br />Across Rwanda</h2>
        </div>

        <div className={`testimonials-grid ${isVisible.testimonials ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div>
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-location">📍 {testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta" ref={el => observerRefs.current[5] = el}>
        <div className={`cta-container ${isVisible.cta ? 'visible' : ''}`}>
          <div className="cta-content rwanda-flag-bg">
            <h2 className="cta-title">Ready to Transform Your Community?</h2>
            <p className="cta-title-kiny">Witeguye guhindura umudugudu wawe?</p>
            <p className="cta-description">
              Join thousands of community leaders across Rwanda
              <br />who trust Umuturage Connect for better governance.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-cta-primary">
                Start Now
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-cta-secondary">
                Contact Support
              </Link>
            </div>
            <p className="cta-note"> ✓ Training included  •  ✓ Support in Kinyarwanda</p>
          </div>
          
          {/* Rwanda Flag Colors Decoration */}
          <div className="cta-decoration">
            <div className="deco-circle deco-rwanda-blue"></div>
            <div className="deco-circle deco-rwanda-yellow"></div>
            <div className="deco-circle deco-rwanda-green"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;