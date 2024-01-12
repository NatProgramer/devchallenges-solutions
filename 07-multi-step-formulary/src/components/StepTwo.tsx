export default function StepTwo ({ continueStep }: { continueStep: () => void }) {
  return (
    <article className="step-two">
      <h1>Which topics you are interested in?</h1>
      <ul>
        <li>Software Development</li>
        <li className='item-active'>User Experience</li>
        <li>Graphic Design</li>
        <button onClick={continueStep} className='step-button'>Continue</button>
      </ul>
    </article>
  )
}
