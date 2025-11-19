export const styles = `
:root {
    --primary: #000000;
    --accent: #2563eb;
    --text: #111827;
    --text-light: #6b7280;
    --bg: #ffffff;
    --bg-alt: #f9fafb;
    --nav-bg: rgba(255, 255, 255, 0.8);
    --border: #e5e7eb;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--text);
    line-height: 1.6;
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
}
/* Navbar */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--nav-bg);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    z-index: 1000;
    transition: border-color 0.3s;
}
nav.scrolled {
    border-bottom-color: var(--border);
}
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
}
.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
}
.logo {
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--text);
    text-decoration: none;
    letter-spacing: -0.025em;
}
.nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
}
.nav-links a {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }

/* Dropdown */
.dropdown { position: relative; }
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: white;
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01);
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    list-style: none;
    padding: 0.5rem;
    margin-top: 0.5rem;
}
.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}
.dropdown-menu a {
    display: block;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    color: var(--text);
}
.dropdown-menu a:hover { 
    background: var(--bg-alt);
    color: var(--text);
}

/* Sections */
section { padding: 6rem 0; }
.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    text-align: center;
    background: var(--bg);
}
.hero h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -0.04em;
    color: var(--text);
}
.hero-copy {
    font-size: 1.35rem;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
}
.btn {
    display: inline-block;
    background: var(--text);
    color: white;
    padding: 1rem 2rem;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s;
    border: 1px solid transparent;
}
.btn:hover { 
    background: transparent;
    color: var(--text);
    border-color: var(--text);
    transform: translateY(-2px);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: -0.03em;
}
.section-alt {
    background: var(--bg-alt);
}

/* Projects Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
}
.card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2.5rem;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
    border-color: transparent;
}
.card h3 { 
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
}
.card p {
    color: var(--text-light);
    flex-grow: 1;
}

/* About */
.about-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-light);
}

footer {
    background: white;
    padding: 4rem 0;
    text-align: center;
    color: var(--text-light);
    border-top: 1px solid var(--border);
    font-size: 0.9rem;
}
`;
