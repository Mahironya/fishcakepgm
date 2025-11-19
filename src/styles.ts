export const styles = `
:root {
    --primary: #3b82f6;
    --text: #1f2937;
    --bg: #ffffff;
    --bg-alt: #f3f4f6;
    --nav-bg: rgba(255, 255, 255, 0.9);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--text);
    line-height: 1.6;
    background: var(--bg);
}
/* Navbar */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--nav-bg);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e5e7eb;
    z-index: 1000;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}
.logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary);
    text-decoration: none;
}
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}
.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: color 0.2s;
}
.nav-links a:hover { color: var(--primary); }

/* Dropdown */
.dropdown { position: relative; }
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    min-width: 150px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.2s;
    list-style: none;
    padding: 0.5rem 0;
}
.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.dropdown-menu a {
    display: block;
    padding: 0.5rem 1rem;
}
.dropdown-menu a:hover { background: var(--bg-alt); }

/* Sections */
section { padding: 5rem 0; }
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom right, #eff6ff, #ffffff);
}
.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, var(--primary), #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero-copy {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 2rem;
}
.btn {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
}
.btn:hover { transform: translateY(-2px); }

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
}
.section-alt {
    background: var(--bg-alt);
}

/* Projects Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
.card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    padding: 2rem;
    transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.card h3 { margin-bottom: 1rem; }

/* About */
.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
}

footer {
    background: var(--bg-alt);
    padding: 2rem 0;
    text-align: center;
    color: #6b7280;
}
`;
