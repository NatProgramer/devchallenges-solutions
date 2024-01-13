interface Props {
  continueStep: () => void
  changeName: (name: string | null) => void
  changeEmail: (email: string | null) => void
}

export default function StepOne ({ continueStep, changeEmail, changeName }: Props) {
  return (
    <article className="step-one">
      <h1>Register</h1>
      <form onSubmit={(e: any) => {
        e.preventDefault()

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        changeName(e.target[0].value)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        changeEmail(e.target[1].value)
        continueStep()
      }}>
        <label htmlFor="user-name">Name</label>
        <input id="user-name" type="text" placeholder='enter your name' required/>

        <label htmlFor="user-email">Email</label>
        <input id="user-email" type="email" placeholder='example@gmail.com' required/>

        <button className='step-button'>Continue</button>
      </form>
    </article>
  )
}
