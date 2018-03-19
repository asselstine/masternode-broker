import React from 'react'

export default ({onChange, value}) => {
  var selectOptions = [
    'NodeAIDash',
    'NodeAIHighCAPMN',
    'NodeAIDiversifiedIncome'
  ]

  return (
    <select onChange={onChange} value={value}>
      {selectOptions.map((option) => <option key={option}>{option}</option>)}
    </select>
  )
}
