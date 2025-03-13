import { Database } from "sqlite3"
import { open } from "sqlite"

// Função para inicializar o banco de dados
async function openDb() {
  return open({
    filename: "./messages.db", // Nome do arquivo do banco de dados
    driver: Database,
  })
}

// Função para criar a tabela de mensagens se ela não existir
export async function initializeDatabase() {
  const db = await openDb()

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  await db.close()
}

// Função para salvar uma nova mensagem
export async function saveMessage(name: string, email: string, message: string) {
  const db = await openDb()

  const result = await db.run("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)", [name, email, message])

  await db.close()
  return result
}

// Função para buscar todas as mensagens
export async function getAllMessages() {
  const db = await openDb()

  const messages = await db.all("SELECT * FROM messages ORDER BY created_at DESC")

  await db.close()
  return messages
}

