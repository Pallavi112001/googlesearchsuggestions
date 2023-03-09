// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionInfo, arrow} = props
  const {suggestion} = suggestionInfo

  const onClickArrow = () => {
    arrow(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-btn" type="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
