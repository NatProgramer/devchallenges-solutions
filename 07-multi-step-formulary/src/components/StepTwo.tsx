import { useState } from 'react'

interface Props {
  changeTopic: (topic: string | null) => void
  continueStep: () => void
}

export default function StepTwo ({ continueStep, changeTopic }: Props) {
  const [topicSelected, setTopicSelected] = useState<string | null>(null)

  const changeColor = (topic: string): string => {
    if (topicSelected === topic) return 'item-active'

    return ''
  }

  return (
    <article className="step-two">
      <h1>Which topics you are interested in?</h1>
      <ul>
        <li onClick={(e) => { setTopicSelected(e.currentTarget.innerText) }} className={`${changeColor('Software Development')}`}>Software Development</li>
        <li onClick={(e) => { setTopicSelected(e.currentTarget.innerText) }} className={`${changeColor('User Experience')}`}>User Experience</li>
        <li onClick={(e) => { setTopicSelected(e.currentTarget.innerText) }} className={`${changeColor('Graphic Design')}`}>Graphic Design</li>
        <button onClick={() => {
          continueStep()
          changeTopic(topicSelected)
        }} className='step-button'>Continue</button>
      </ul>
    </article>
  )
}
