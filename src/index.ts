import { styles } from "./styles";
import { scripts } from "./scripts";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fishcake Team</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <nav>
        <div class="container nav-content">
            <a href="/" class="logo">Fishcake Team</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li class="dropdown">
                    <a href="#projects">Projects ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="#web">Web Apps</a></li>
                        <li><a href="#mobile">Mobile</a></li>
                        <li><a href="#tools">Tools</a></li>
                    </ul>
                </li>
                <li><a href="#about">About Us</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <h1>Building the Future<br>with Fishcake</h1>
            <p class="hero-copy">
                We create innovative digital solutions for modern problems.
            </p>
            <a href="#projects" class="btn">View Our Work</a>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2 class="section-title">Our Projects</h2>
            <div class="grid">
                <div class="card" id="web">
                    <h3>Project Alpha</h3>
                    <p>A revolutionary platform for connecting developers.</p>
                </div>
                <div class="card" id="mobile">
                    <h3>Fishcake UI</h3>
                    <p>A modern component library for rapid development.</p>
                </div>
                <div class="card" id="tools">
                    <h3>DataStream</h3>
                    <p>Real-time analytics dashboard for enterprise.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="section-alt">
        <div class="container">
            <h2 class="section-title">About Us</h2>
            <div class="about-content">
                <p>
                    Fishcake Team is a collective of passionate developers and designers.
                    We believe in simplicity, performance, and user-centric design.
                    Our mission is to deliver high-quality software that makes a difference.
                </p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Fishcake Team. All rights reserved.</p>
        </div>
    </footer>

    <script src="/app.js" defer></script>
</body>
</html>
`;

export default {
    async fetch(request: Request): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname === "/style.css") {
            return new Response(styles, {
                headers: { "content-type": "text/css; charset=UTF-8" },
            });
        }

        if (url.pathname === "/app.js") {
            return new Response(scripts, {
                headers: { "content-type": "application/javascript; charset=UTF-8" },
            });
        }

        return new Response(html, {
            headers: { "content-type": "text/html; charset=UTF-8" },
        });
    },
};
