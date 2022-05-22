import { fetchLanguages } from './api.js'
import SearchInput from './SearchInput.js'
import Suggestion from './Suggestion.js'
import SelectedLanguage from './SelectedLanguage.js'

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: '',
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    }
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
      keyword: this.state.keyword,
    })
    selectedLanguage.setState(this.state.selectedLanguages)
  }

  const selectedLanguage = new SelectedLanguage({
    $target,
    initialState: [],
  })

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        })
      } else {
        const languages = await fetchLanguages(keyword)
        this.setState({
          fetchedLanguages: languages,
        })
      }
    },
  })

  const suggestion = new Suggestion({
    $target,
    initialState: {
      selectedIndex: 0,
      items: [],
    },
    onSelect: (language) => {
      alert(language)
      const nextSelectedLanguages = [...this.state.selectedLanguages]

      const index = nextSelectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage === language,
      )

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1)
      }
      nextSelectedLanguages.push(language)

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
        keyword: language,
      })
    },
  })
}
