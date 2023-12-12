import { useState } from 'react'

function EmailInput() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      {inputValue}
      <input onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default EmailInput
