export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement('form')
  this.$element.className = 'SearchInput'
  this.state = initialState

  $target.appendChild(this.$element)

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요" value="${this.state}">
    `
  }

  this.render()

  this.$element.addEventListener('keyup', (e) => {
    console.log('!111', e.key)
    const actionIgnoreKeys = [
      'Enter',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ]
    if (!actionIgnoreKeys.includes(e.key)) {
      console.log('2222222')
      onChange(e.target.value)
    }
  })

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}
