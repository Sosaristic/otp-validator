import { useState } from 'react'
import EnterOtp from './component/Otp'
import UserDetails from './component/UserDetails'
import Success from './component/Success'
import Loader from './component/Loader'

function App() {
const [step, setStep] = useState(1)
const handleSetStep = (value)=>{
  setStep(value)
}
  return (
    <>
     <main>
     {step === 1 && <UserDetails handleSetStep={handleSetStep}/>}
     {step === 2 && <EnterOtp handleSetStep={handleSetStep}/>}
     {step === 3 && <Success />}
     
  
     </main>
    </>
  )
}

export default App
