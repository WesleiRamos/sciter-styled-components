import styled from '../styled/styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  background: white;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const BlueButtonWrapper = styled.div`
  ${TomatoButton} {
    color: blue;
    border-color: blue;
  }
`

export default () => (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <TomatoButton>Tomato Button</TomatoButton>
    <BlueButtonWrapper>
      <TomatoButton>Blue Button</TomatoButton>
    </BlueButtonWrapper>
  </div>
)