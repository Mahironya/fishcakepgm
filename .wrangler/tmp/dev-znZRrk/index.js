var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
var src_default = {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fishcake Team</title>
    <style>
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
    </style>
</head>
<body>
    <nav>
        <div class="container nav-content">
            <a href="#" class="logo">Fishcake Team</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li class="dropdown">
                    <a href="#projects">Projects \u25BE</a>
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
            <p style="font-size: 1.25rem; color: #4b5563; margin-bottom: 2rem;">
                We create innovative digital solutions for modern problems.
            </p>
            <a href="#projects" class="btn">View Our Work</a>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2 class="section-title">Our Projects</h2>
            <div class="grid">
                <div class="card">
                    <h3>Project Alpha</h3>
                    <p>A revolutionary platform for connecting developers.</p>
                </div>
                <div class="card">
                    <h3>Fishcake UI</h3>
                    <p>A modern component library for rapid development.</p>
                </div>
                <div class="card">
                    <h3>DataStream</h3>
                    <p>Real-time analytics dashboard for enterprise.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" style="background: var(--bg-alt);">
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
</body>
</html>
    `;
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

// .wrangler/tmp/bundle-B1011S/middleware-insertion-facade.js
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

// .wrangler/tmp/bundle-B1011S/middleware-loader.entry.ts
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
