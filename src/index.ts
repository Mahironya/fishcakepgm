export default {
    async fetch(request: Request): Promise<Response> {
        return new Response("Hello from FishcakePGM!", {
            headers: { "content-type": "text/plain" },
        });
    },
};
