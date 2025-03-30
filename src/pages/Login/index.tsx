import { Button, Input } from '@/components'
import { Container, ContainerForm, ContainerImage, Title, Link } from './styles'
import { useNavigate } from 'react-router'

export default function Login() {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerForm>
        {/* <Logo /> */}
        <Title>Bem-vindo</Title>
        <p>Digite sua senha e e-mail para logar</p>
        <Input placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button
          onClick={() => {
            navigate('/')
          }}
          label="Login"
        />

        <p>
          Não possui uma conta?{' '}
          <Link
            onClick={() => {
              navigate('/cadastro')
            }}
          >
            Cadastre-se
          </Link>
        </p>
      </ContainerForm>
      <ContainerImage />
    </Container>
  )
}
