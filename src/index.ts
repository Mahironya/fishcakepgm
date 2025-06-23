export default {
    async fetch(request: Request): Promise<Response> {
        const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>FishcakePGM – Under Construction</title>
          <style>
              body {
                  margin: 0;
                  padding: 0;
                  background-color: #fff8f8;
                  font-family: "Comic Sans MS", cursive, sans-serif;
                  color: #ff66a3;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  text-align: center;
              }
              h1 {
                  font-size: 2.5rem;
                  margin-bottom: 0.5rem;
              }
              p {
                  font-size: 1.2rem;
                  margin-bottom: 1.5rem;
              }
              img {
                  max-width: 300px;
                  border-radius: 20px;
                  box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
              }
          </style>
      </head>
      <body>
          <h1> Under Development </h1>
          <img src="https://i.pinimg.com/originals/2c/27/d1/2c27d1186016923c8ebca12d9246dc16.gif" alt="Cute Construction" />
      </body>
      </html>
    `;

        return new Response(html, {
            headers: { "content-type": "text/html; charset=UTF-8" },
        });
    },
};
