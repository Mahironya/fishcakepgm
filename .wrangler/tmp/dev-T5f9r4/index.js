var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/styles.ts
var styles = `
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

// src/scripts.ts
var scripts = `
console.log("Fishcake Team site loaded!");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
`;

// src/articles.ts
var articlesHtml = `
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
                    <a href="/#projects">Projects \u25BE</a>
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

    <script src="/app.js" defer><\/script>
</body>
</html>
`;

// src/index.ts
var html = `
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
                <li><a href="/">Home</a></li>
                <li class="dropdown">
                    <a href="/#projects">Projects \u25BE</a>
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

    <section id="home" class="hero">
        <div class="container">
            <h1>Building the Future<br>with Fishcake</h1>
            <p class="hero-copy">
                We create innovative digital solutions for modern problems.
            </p>
            <a href="/#projects" class="btn">View Our Work</a>
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

    <script src="/app.js" defer><\/script>
</body>
</html>
`;
var src_default = {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/style.css") {
      return new Response(styles, {
        headers: { "content-type": "text/css; charset=UTF-8" }
      });
    }
    if (url.pathname === "/app.js") {
      return new Response(scripts, {
        headers: { "content-type": "application/javascript; charset=UTF-8" }
      });
    }
    if (url.pathname === "/articles") {
      return new Response(articlesHtml, {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" }
    });
  }
};

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-sJULC4/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-sJULC4/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
