import fetch from 'node-fetch'
const lookup = new Map()

export async function get(req, res, next) {
	const { slug } = req.params

	const posts = await fetch(`http://localhost:3000/blog.json`)
		.then(response => response.json())

	posts.forEach((post, index) => {
		lookup.set(post.slug, {...post})
	})

	if (lookup.has(slug)) {
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(lookup.get(slug)))
	} else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end(JSON.stringify({ message: `Not found` }))
	}
}