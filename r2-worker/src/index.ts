interface Env {
	PHOTOS: R2Bucket;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === "/photos") {
			const result = await env.PHOTOS.list();

			return new Response(JSON.stringify(result.objects), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		return new Response("Not found", { status: 404 });
	},
};