export default function StepOne ({ continueStep }: { continueStep: () => void }) {
  return (
    <article className="step-one">
      <h1>Register</h1>
      <form onSubmit={e => { e.preventDefault(); continueStep() }}>
        <label htmlFor="user-name">Name</label>
        <input name="user-name" type="text" placeholder='enter your name' required/>

        <label htmlFor="user-email">Email</label>
        <input name="user-email" type="email" placeholder='example@gmail.com' required/>

        <button className='step-button'>Continue</button>
      </form>
    </article>
  )
}
