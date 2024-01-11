export default function StepIndicator ({ colorState, stepNum }: { colorState: (stepNum: number) => string, stepNum: number }) {
  return (
    <div className={`step-circle ${colorState(stepNum)}`}></div>
  )
}
