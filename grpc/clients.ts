import { credentials } from '@grpc/grpc-js'
import { ActivitiesClient, AuthClient, OrdersClient, PaymentsClient } from '@proto/grpc/service'
import fs from 'fs'
import path from 'path'

const HOST = process.env.NEXT_PUBLIC_SERVER_HOST! || ''

const caCert = fs.readFileSync(path.resolve('grpc/certs/ca.crt'))
const clientCert = fs.readFileSync(path.resolve('grpc/certs/client.crt'))
const clientKey = fs.readFileSync(path.resolve('grpc/certs/client.key'))

const sslCreds = credentials.createSsl(caCert, clientKey, clientCert)

export const paymentsClient = new PaymentsClient(HOST, sslCreds)
export const authClient = new AuthClient(HOST, sslCreds)
export const activitiesClient = new ActivitiesClient(HOST, sslCreds)
export const ordersClient = new OrdersClient(HOST, sslCreds)
export const clients = {
	payments: paymentsClient,
	auth: authClient,
	activities: activitiesClient,
	orders: ordersClient,
}
