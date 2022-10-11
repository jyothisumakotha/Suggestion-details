import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, arrowClick} = props
  const {suggestion, id} = suggestionDetails
  const onIcon = () => {
    arrowClick(id)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onIcon}
      />
    </li>
  )
}
export default SuggestionItem
