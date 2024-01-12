import { useState } from 'react'
import blurRadial from '../public/blur-radial.svg'
import StepOne from './components/StepOne'
import StepIndicator from './components/StepIndicator'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

export default function App () {
  // const [formResponses, setFormResponses] = useState({})
  const [step, setStep] = useState<{ totalSteps: number, actualStep: number }>({
    totalSteps: 3,
    actualStep: 1
  })

  const continueStep = () => {
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

  return (
    <>
      <img className='blur-radial' src={blurRadial} alt=" " />
      <main>
        <article className="form-card">
          { step.actualStep === 1
            ? <StepOne continueStep={continueStep} />
            : step.actualStep === 2
              ? <StepTwo continueStep={continueStep} />
              : <StepThree continueStep={continueStep} />
          }
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
