import React, { ComponentProps, ReactNode } from 'react'
import T from './styles'

interface TableProps extends ComponentProps<'table'> {
  data: any[]
  columns: { field: string; header: string; body?: (item: any) => ReactNode }[]
}

export default function Table({ data, columns, ...props }: TableProps) {
  return (
    <T.Table {...props}>
      <T.Head>
        <T.Row>
          {columns.map((col) => (
            <T.Cell key={col.field}>{col.header}</T.Cell>
          ))}
        </T.Row>
      </T.Head>
      <T.Body>
        {data.map((item, index) => (
          <T.Row key={index}>
            {columns.map((col) => (
              <React.Fragment key={col.field}>
                <T.Data>{col.body ? col.body(item) : item[col.field]}</T.Data>
              </React.Fragment>
            ))}
          </T.Row>
        ))}
      </T.Body>
    </T.Table>
  )
}
