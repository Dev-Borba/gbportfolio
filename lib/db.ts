import { kv } from '@vercel/kv'

export interface Message extends Record<string, unknown> {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  read: boolean
}

// Função para salvar uma nova mensagem
export async function saveMessage(name: string, email: string, message: string) {
  const id = Date.now().toString()
  const newMessage = {
    id,
    name,
    email,
    message,
    created_at: new Date().toISOString(),
    read: false
  } as const

  await kv.hset(`message:${id}`, newMessage)
  await kv.lpush('messages', id)
  
  return newMessage
}

// Função para buscar todas as mensagens
export async function getAllMessages(): Promise<Message[]> {
  const messageIds = await kv.lrange('messages', 0, -1)
  if (!messageIds?.length) return []
  
  const messages = await Promise.all(
    messageIds.map(async (id) => {
      const message = await kv.hgetall<Message>(`message:${id}`)
      return message
    })
  )

  return messages.filter((msg): msg is Message => msg !== null)
}

// Função para marcar mensagem como lida
export async function markMessageAsRead(id: string) {
  await kv.hset(`message:${id}`, { read: true } as const)
  return true
}

// Função para excluir uma mensagem
export async function deleteMessage(id: string) {
  await kv.del(`message:${id}`)
  await kv.lrem('messages', 0, id)
  return true
}
