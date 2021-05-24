import * as t from 'io-ts'

const Message = t.strict({
  content: t.string
})

export type Message = t.TypeOf<typeof Message>
