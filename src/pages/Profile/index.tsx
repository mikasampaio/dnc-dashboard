import { Button, Header, Input } from '../../components'
import { Container, Content, Card } from './styles'

export default function Profile() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <b>Seus Dados</b>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" disabled />
          <Input placeholder="Telefone" />
          <Button label="Atualizar meu perfil" />
          <Button label="Excluir minha conta" severity="danger" />
        </Card>

        <Card>
          <b>Definições de conta</b>

          <Button label="Trocar para tema escuro" />
          <Button label="Deslogar" />
        </Card>
      </Content>
    </Container>
  )
}
