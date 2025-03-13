import Database from 'better-sqlite3';

// Função para inicializar o banco de dados
function openDb() {
  return new Database("./messages.db", { verbose: console.log })
}

// Função para criar a tabela de mensagens se ela não existir
export function initializeDatabase() {
  const db = openDb()

  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.close()
}

// Função para salvar uma nova mensagem
export function saveMessage(name: string, email: string, message: string) {
  const db = openDb()

  const stmt = db.prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)")
  const result = stmt.run(name, email, message)

  db.close()
  return result
}

// Função para buscar todas as mensagens
export function getAllMessages() {
  const db = openDb()

  const messages = db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all()

  db.close()
  return messages
}
