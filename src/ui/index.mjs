import { database } from "../shared/data.mjs"

const pathName = globalThis.window ? 'browser' : 'console'
const { default: ViewFactory } = await import(`./../platforms/${pathName}/index.mjs`)

const app = new ViewFactory()
app.render(database)