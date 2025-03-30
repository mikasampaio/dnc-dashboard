import { Button, Header, Input, Table } from '../../components'
import { Container, Content, Card } from './styles'

export default function Leads() {
  const columns = [
    { field: 'name', header: 'Nome' },
    { field: 'email', header: 'E-mail' },
    { field: 'phone', header: 'Telefone' },
    {
      field: 'actions',
      header: 'Ações',
      body: () => {
        return (
          <div>
            <Button label="Excluir" severity="danger" />
          </div>
        )
      },
    },
  ]

  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+55 123 456 7890',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+55 987 654 3210',
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '+55 321 654 9870',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+55 987 654 3210',
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '+55 987 654 3210',
    },
    {
      id: 6,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      phone: '+55 987 654 3210',
    },
  ]

  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <b>Meus Leads</b>

          <Table data={data} columns={columns} />
        </Card>
      </Content>
    </Container>
  )
}
