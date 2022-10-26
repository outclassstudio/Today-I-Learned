//cloning styled-components using template-literal
const styled = (element) => {
  const el = document.createElement(element)
  return (css) => {
    const styles = css[0]
    el.style = styles
    return el
  }
}

const background = styled("div")`
  background-color: red;
  width: 100%;
  height: 100px;
  color: white;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 25px;
`
background.innerText = "hihi?"

const body = document.querySelector("body")
body.appendChild(background)