import { exec } from 'child_process'
import { mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROTO_DIR = path.resolve(__dirname, '../proto')
const OUT_DIR = path.resolve(__dirname, '../generated/proto')
mkdirSync(OUT_DIR, { recursive: true })

const command = [
	'protoc',
	'--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto',
	`--ts_proto_out=${OUT_DIR}`,
	`--ts_proto_opt=${[
		'env=true',
		'esModuleInterop=true',
		'useOptionals=all',
		'outputServices=none',
		'forceLong=string',
	].join(',')}`,
	`-I ${PROTO_DIR}`,
	`${PROTO_DIR}/*.proto`,
].join(' ')

console.log('⏳ Generating browser-safe TS types...')
exec(command, (err, stdout, stderr) => {
	if (err) {
		console.error('❌ Generation failed:', err)
		console.error(stderr)
		process.exit(1)
	} else {
		console.log('✅ TypeScript types generated to /generated/proto')
		if (stdout) console.log(stdout)
	}
})
