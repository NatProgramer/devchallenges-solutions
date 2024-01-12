export default function StepThree ({ continueStep }: { continueStep: () => void }) {
  return (
    <article className="step-two">
      <h1>Which topics you are interested in?</h1>
      <ul>
        <button onClick={continueStep} className='step-button'>Continue</button>
      </ul>
    </article>
  )
}
