import { exec } from 'child_process'
import { mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROTO_DIR = path.resolve(__dirname, '../proto')
const OUT_DIR = path.resolve(__dirname, '../generated/grpc')
mkdirSync(OUT_DIR, { recursive: true })

const command = [
	'protoc',
	'--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto',
	`--ts_proto_out=${OUT_DIR}`,
	`--ts_proto_opt=${[
		'env=true',
		'esModuleInterop=true',
		'useOptionals=all',
		'outputServices=grpc-js',
		'outputClientImpl=grpc',
		'forceLong=string',
	].join(',')}`,
	`-I ${PROTO_DIR}`,
	`${PROTO_DIR}/*.proto`,
].join(' ')

console.log('⏳ Generating server-side gRPC clients...')
exec(command, (err, stdout, stderr) => {
	if (err) {
		console.error('❌ Generation failed:', err)
		console.error(stderr)
		process.exit(1)
	} else {
		console.log('✅ gRPC clients generated to /generated/grpc')
		if (stdout) console.log(stdout)
	}
})
