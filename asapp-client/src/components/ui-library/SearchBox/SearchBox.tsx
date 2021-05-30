import * as React from 'react'

type SearchBoxProps = {
  onChange: (value: string) => void,
  value?: string,
  placeholder?: string
}

const SearchBox = ({ onChange, value, placeholder }: SearchBoxProps) => {
  const inputRef: React.Ref<HTMLInputElement> = React.useRef(null)

  const handleInput = () => {
    console.log(inputRef.current)
    onChange(inputRef.current?.value || '')
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation()
    if (e.key === 'Enter') {
      onChange(inputRef.current?.value || '')
    }
  }

  return ( 
    <div className="search-box">
      <input
        ref={inputRef}
        type="text" 
        className="search-box__input" 
        value={value}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
      />
    </div> 
  );
}

export default SearchBox;