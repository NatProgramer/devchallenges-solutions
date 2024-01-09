import { QRCodeSVG } from 'qrcode.react'
import { DownloadIcon, QRCodeIcon, ShareIcon } from '../Icons'
import './QRview.css'

export default function QRView ({ url }: { url: string }) {
  console.log(url)
  return (
    <>
      <header>
        <QRCodeIcon />
      </header>
      <main>
        <article>
          <QRCodeSVG
            value={url}
            level={'Q'}
            size={240}
            includeMargin={true}
          />
        </article>
        <div className="qr-buttons">
          <button>
            Download
            <DownloadIcon />
          </button>
          <button onClick={() => {
            navigator.clipboard.writeText(url)
              .catch(err => { console.error(err) })
          }}>
            Share
            <ShareIcon />
          </button>
        </div>
      </main>
    </>
  )
}
