const formatDate = require('date-fns/format')
const readingTime = require('reading-time')
const rehypeStringify = require('rehype-stringify')
const remarkExtractFrontmatter = require('remark-extract-frontmatter')
const remarkFrontmatter = require('remark-frontmatter')
const remarkParse = require('remark-parse')
const remarkStringify = require('remark-stringify')
const remarkToRehype = require('remark-rehype')
const unified = require('unified')
const yaml = require('yaml').parse

import fs from 'fs'

function isDir(path) {
	try {
		return fs.lstatSync(path).isDirectory()
	} catch (e) {
		return false
	}
}

const directory = `src/routes/blog/_posts`
const pages = {}
fs.readdirSync(directory).map(file => {
	if (isDir(`${directory}/${file}`)) {
		pages[file] = `${directory}/${file}/index.md`
	}
})

const data = Object.entries(pages).map(page => {
	const [ slug, path ] = page
	const file = fs.readFileSync(path, 'utf-8')
	let frontmatter

	unified()
		.use(remarkParse)
		.use(remarkFrontmatter, ['yaml'])
		.use(remarkExtractFrontmatter, { yaml: yaml })
		.use(remarkStringify)
		.use(remarkToRehype)
		.use(rehypeStringify)
		.process(file, (err, file) => {
			if (err) {console.error('error getting page', err)}
			frontmatter = file.data
		})

	return ({
		...frontmatter,
		slug,
		printDate: formatDate(new Date(frontmatter.date), 'MMMM d, yyyy'),
     	printReadingTime: readingTime(file).text
	})
}).sort((a, b) => new Date(b.date) - new Date(a.date))

export function get(_req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.end(JSON.stringify(data))
}