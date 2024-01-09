import { BgIllustration } from './Icons'
import { useState } from 'react'
import QRGeneratorInput from './components/QRGeneratorInput'
import QRView from './components/QRview'

export default function App () {
  const [url, setUrl] = useState<string | null>(null)

  const changeUrl = (newUrl: string) => {
    setUrl(newUrl)
  }

  // changeUrl('ddel')

  // useEffect(() => {
  //   console.log(url)
  // }, [url])
  return (
    <>
      <BgIllustration />

      {
      url !== null
        ? (
            <QRView url={url} />
          )
        : (
            <QRGeneratorInput changeUrl={changeUrl} />
          )
    }
    </>
  )
}
