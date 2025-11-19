import { styles } from "./styles";
import { scripts } from "./scripts";

const articlesHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Articles - Fishcake Team</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <nav>
        <div class="container nav-content">
            <a href="/" class="logo">Fishcake Team</a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li class="dropdown">
                    <a href="/#projects">Projects ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="/#web">Web Apps</a></li>
                        <li><a href="/#mobile">Mobile</a></li>
                        <li><a href="/#tools">Tools</a></li>
                    </ul>
                </li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/#about">About Us</a></li>
            </ul>
        </div>
    </nav>

    <section id="articles" class="section-alt">
        <div class="container">
            <h2 class="section-title">Recent Articles</h2>
            <div class="grid">
                <div class="card">
                    <h3>Article Title 1</h3>
                    <p>A brief description of the first article.</p>
                </div>
                <div class="card">
                    <h3>Article Title 2</h3>
                    <p>A brief description of the second article.</p>
                </div>
                <div class="card">
                    <h3>Article Title 3</h3>
                    <p>A brief description of the third article.</p>
                </div>
                 <div class="card">
                    <h3>Article Title 4</h3>
                    <p>A brief description of the fourth article.</p>
                </div>
                 <div class="card">
                    <h3>Article Title 5</h3>
                    <p>A brief description of the fifth article.</p>
                </div>
                 <div class="card">
                    <h3>Article Title 6</h3>
                    <p>A brief description of the sixth article.</p>
                </div>
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

export { articlesHtml };
