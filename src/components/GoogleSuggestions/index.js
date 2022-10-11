import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowClick = id => {
    const {suggestionsList} = this.props
    const input = suggestionsList.filter(
      eachSuggestion => eachSuggestion.id === id,
    )
    const {suggestion} = input
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt=" google logo"
          className="image"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-image"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              onChange={this.onChangeSearchEvent}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                arrowClick={this.arrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
