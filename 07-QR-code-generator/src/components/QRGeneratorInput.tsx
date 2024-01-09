import { useState } from 'react'
import { QRCodeIcon } from '../Icons'
import './QRGeneratorInput.css'

interface Props {
  changeUrl: (newUrl: string) => void
}

export default function QRGeneratorInput ({ changeUrl }: Props) {
  const [newUrl, setNewUrl] = useState<string>('')
  return (
    <>
    <main>
      <QRCodeIcon />
      <form onSubmit={() => { changeUrl(newUrl) }}>
        <label>
          <input onChange={e => { setNewUrl(e.target.value) }} type="text" placeholder='Enter an url' />
          <button onSubmit={(e) => { e.preventDefault() }} className="qr-gen-btn">QR code</button>
        </label>
      </form>
    </main>
    </>
  )
}
