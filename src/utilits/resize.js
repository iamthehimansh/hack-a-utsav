const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

const resizeText = ({ element, parent }) => {
    let i = 12 // let's start with 12px
    let overflow = false
    const maxSize = 128 // very huge text size
  
    while (!overflow && i < maxSize) {
      element.style.fontSize = `${i}px`
      overflow = isOverflown(parent)
      if (!overflow) i++
    }
  
    // revert to last state where no overflow happened:
    element.style.fontSize = `${i - 1}px`
  }
export default resizeText;