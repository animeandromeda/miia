import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import streamer from './stream/asyncStreamer.js'
import checkOrigin from './middlewares/checkOrigin.js'

const app = new App()
const PORT = process.env.PORT || 5055
const __dirname = dirname(fileURLToPath(import.meta.url))

app
  .use(logger())
  .set('trust proxy', true)
  .get('/', (_, res) =>
    void res.format({
      html: () => res.sendFile(join(__dirname, 'views', 'index.html')),
      text: () => res.send('Miia stub'),
      json: () => res.json('Miia stub')
    })
  )
  .get('/docs', (_, res) =>
    void res.format({
      html: () => res.sendFile(join(__dirname, 'views', 'docs.html')),
    })
  )

app.get('/stream/:anime/:ep', checkOrigin, (req, res) =>
  streamer(req, res))

app.get('/warn', (req, res) =>
  void streamer(req, res, 'public/warn.mp4'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))