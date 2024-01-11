import { useState } from 'react'
import blurRadial from '../public/blur-radial.svg'
import StepOne from './components/StepOne'
import StepIndicator from './components/StepIndicator'

export default function App () {
  const [step, setStep] = useState<{ totalSteps: number, actualStep: number }>({
    totalSteps: 3,
    actualStep: 1
  })

  const constinueStep = () => {
    if (step.actualStep + 1 > step.totalSteps) return

    setStep({
      totalSteps: step.totalSteps,
      actualStep: step.actualStep + 1
    })
  }

  const validateColorState = (stepNum: number): string => {
    if (step.actualStep === stepNum) return 'step-circle--active'
    if (step.actualStep < stepNum) return 'step-circle--incompleted'
    return ''
  }
  // <StepOne continueStep={constinueStep} />
  return (
    <>
      <img className='blur-radial' src={blurRadial} alt=" " />
      <main>
        <article className="form-card">
          <article className="step-two">
            <h1>Which topics you are interested in?</h1>
            <form onSubmit={e => { e.preventDefault(); constinueStep() }}>
              <button className='step-button'>Continue</button>
            </form>
          </article>
        </article>
        <div className='steps-info'>
          <p>Step {step.actualStep} of {step.totalSteps}</p>
          <StepIndicator colorState={validateColorState} stepNum={1} />
          <StepIndicator colorState={validateColorState} stepNum={2} />
          <StepIndicator colorState={validateColorState} stepNum={3} />
        </div>
      </main>
      <img className='blur-radial' src={blurRadial} alt=" " />
    </>
  )
}
