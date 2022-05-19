export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement('form')
  this.$element.className = 'SearchInput'
  this.state = initialState

  $target.appendChild(this.$element)

  let timer

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요" value="${this.state}">
    `
  }

  this.render()

  this.$element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = [
      'Enter',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ]
    if (!actionIgnoreKeys.includes(e.key)) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        onChange(e.target.value)
      }, 600)
    }
  })

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}
