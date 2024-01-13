import { useEffect, useState } from 'react'
import blurRadial from '../public/blur-radial.svg'
import StepOne from './components/StepOne'
import StepIndicator from './components/StepIndicator'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

export interface UserData {
  userName: string
  userEmail: string
  userTopic: string
}

export default function App () {
  const [formResponses, setFormResponses] = useState<UserData>({
    userName: '',
    userEmail: '',
    userTopic: ''
  })
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

  const changeUserName = (name: string | null) => {
    console.log(name)
    if (name === null) return
    setFormResponses((prevState) => {
      return {
        userName: name,
        userEmail: prevState.userEmail,
        userTopic: prevState.userTopic
      }
    })
  }
  const changeUserEmail = (email: string | null) => {
    console.log(email)
    if (email === null) return
    setFormResponses((prevState) => {
      return {
        userEmail: email,
        userName: prevState.userName,
        userTopic: prevState.userTopic
      }
    })
  }
  const changeUserTopic = (topic: string | null) => {
    if (topic === null) return
    setFormResponses((prevState) => {
      return {
        userTopic: topic,
        userEmail: prevState.userEmail,
        userName: prevState.userName
      }
    })
  }

  const validateColorState = (stepNum: number): string => {
    if (step.actualStep === stepNum) return 'step-circle--active'
    if (step.actualStep < stepNum) return 'step-circle--incompleted'
    return ''
  }

  useEffect(() => { console.log(formResponses) }, [formResponses])
  return (
    <>
      <img className='blur-radial' src={blurRadial} alt=" " />
      <main>
        <article className="form-card">
          { step.actualStep === 1
            ? <StepOne
                changeName={changeUserName}
                changeEmail={changeUserEmail}
                continueStep={continueStep}
              />
            : step.actualStep === 2
              ? <StepTwo
                  changeTopic={changeUserTopic}
                  continueStep={continueStep}
                />
              : <StepThree
                  userData={formResponses}
                  continueStep={continueStep}
                />
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
