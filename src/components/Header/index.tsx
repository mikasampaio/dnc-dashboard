import Profile from '../Profile'
import { Container } from './styles'
import Logo from '../../../public/logo.svg'

export default function Header() {
  return (
    <Container>
      {/* <Logo /> */}
      <h1>Header</h1>

      <Profile />
    </Container>
  )
}
