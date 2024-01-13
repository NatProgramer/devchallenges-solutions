import { type UserData } from '../App'

interface Props {
  userData: UserData
  continueStep: () => void
}

export default function StepThree ({ continueStep, userData }: Props) {
  return (
    <article className="step-three">
      <h1>Summary</h1>

      <p>Name: <span>{userData.userName}</span></p>
      <p>Email: <span>{userData.userEmail}</span></p>

      <ul>
        <li className=''><span>Topic: </span> {userData.userTopic}</li>
      </ul>
      <button onClick={continueStep} className='step-button'>Continue</button>
    </article>
  )
}
