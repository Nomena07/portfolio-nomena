import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qrcode from 'qrcode-terminal'
import os from 'os'

function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'localhost'
}

function qrcodePlugin() {
  return {
    name: 'qrcode',
    configureServer(server) {
      server.httpServer?.on('listening', () => {
        const address = server.httpServer.address()
        if (address && typeof address === 'object') {
          const localIP = getLocalIP()
          const port = address.port
          const url = `http://${localIP}:${port}`
          console.log('\n📱 Scannez le QR code pour accéder au site sur mobile :\n')
          qrcode.generate(url, { small: true }, (qr) => {
            console.log(qr)
          })
          console.log(`\n🌐 Ou ouvrez directement : ${url}\n`)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), qrcodePlugin()],
  base: './',
  build: {
    outDir: 'docs',
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
