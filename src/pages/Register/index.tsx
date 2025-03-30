import { Button, Input } from '@/components'
import { Container, ContainerForm, ContainerImage, Link, Title } from './styles'
import { useNavigate } from 'react-router'

export default function Register() {
  
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerForm>
        {/* <Logo /> */}
        <Title>Faça seu cadastro</Title>
        <p>Primeiro, diga-nos quem você é.</p>

        <Input placeholder="Nome completo" />
        <Input placeholder="E-mail" />
        <Input type="tel" placeholder="Telefone" />

        <Button
          onClick={() => {
            navigate('/dashboard')
          }}
          label="Próximo"
        />

        <p>
          Já possui uma conta?{' '}
          <Link
            onClick={() => {
              navigate('/login')
            }}
          >
            Faça o login
          </Link>
        </p>
      </ContainerForm>
      <ContainerImage />
    </Container>
  )
}
