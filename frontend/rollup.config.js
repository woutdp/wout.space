import pkg from './package.json'
import autoPreprocess from 'svelte-preprocess'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup.js'
import copy from 'rollup-plugin-copy'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import path from 'path'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import rupture from 'rupture'
import svelte from 'rollup-plugin-svelte'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'
import { mdsvex } from 'mdsvex'
import Prism from 'prismjs'
import escape from 'escape-html'

require('prismjs/components/prism-python.min')
require('prismjs/components/prism-git.min')
require('prismjs/components/prism-toml.min')
require('prismjs/components/prism-ini.min')
require('prismjs/components/prism-bash.min')
require('prism-svelte')


const escape_svelty = (str) =>
    str
        .replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c]))
        .replace(/\\([trn])/g, '&#92;$1')

function highlighter(code, lang) {
    if (lang && Prism.languages[lang]) {
        const parsed = Prism.highlight(code, Prism.languages[lang], lang)
        const langTag = 'language-' + lang
        const highlighted = escape_svelty(parsed)
        return `<Components.pre c=${langTag}>{@html \`<code class="language-${lang}">${highlighted}</code>\`}</Components.pre>`
    } else {
        const highlighted = escape_svelty(escape(code))
        return `<Components.pre>{@html \`<code class="language-${lang}">${highlighted}</code>\`}</Components.pre>`
    }
}

const preprocess = [
    autoPreprocess({
        stylus: { use: rupture() }
    }),
    mdsvex({
		extension: '.md',
		layout: { blog: 'src/layouts/blog.svelte' },
        highlight: { highlighter }
	})
]

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
    (warning.code === 'CIRCULAR_DEPENDENCY') ||
	onwarn(warning)

const dynamicImportVarsOptions = {include: [ `src/routes/**/*.svelte` ]}
const extensions = ['.svelte', '.md']
export default {
    client: {
        input: config.client.input(),
        output: config.client.output(),
        plugins: [
            replace({
                 preventAssignment: true,
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            svelte({
                preprocess,
                extensions,
                emitCss: true,
                compilerOptions: {
                    dev,
                    hydratable: true,
                }
            }),
            url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
            dynamicImportVars(dynamicImportVarsOptions),
            copy({
				targets: [
					{ src: 'src/**/images/*.*', dest: 'static/images' }
				]
			}),
            legacy && babel({
                extensions: ['.js', '.mjs', '.html', ...extensions],
                runtimeHelpers: true,
                exclude: ['node_modules/@babel/**'],
                presets: [
                    ['@babel/preset-env', {
                        targets: '> 0.25%, not dead'
                    }]
                ],
                plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    ['@babel/plugin-transform-runtime', {
                        useESModules: true
                    }]
                ]
            }),

            !dev && terser({
                module: true
            })
        ],
        preserveEntrySignatures: false,

        onwarn,
    },

    server: {
        input: config.server.input(),
        output: config.server.output(),
        plugins: [
            replace({
                preventAssignment: true,
                'process.browser': false,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            svelte({
                preprocess,
                extensions,
                compilerOptions: {
                    dev,
                    generate: 'ssr',
                    hydratable: true
                }
            }),
            url({
                sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
                publicPath: '/client/',
                emitFiles: false // already emitted by client build
            }),
            resolve({
                dedupe: ['svelte']
            }),
            commonjs(),
            dynamicImportVars(dynamicImportVarsOptions),
            copy({
				targets: [
					{ src: 'src/**/_images/*.*', dest: 'static/images' }
				]
			})
        ],
        external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
        preserveEntrySignatures: 'strict',

        onwarn,
    },
};
