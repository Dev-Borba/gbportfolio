import { NextResponse } from "next/server"
import { saveMessage } from "@/lib/db"
import { z } from "zod"

export const dynamic = 'force-dynamic'

// Schema de validação
const messageSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validar os dados recebidos
    const { name, email, message } = messageSchema.parse(body)

    // Salvar a mensagem no banco de dados
    await saveMessage(name, email, message)

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    console.error("Erro ao salvar mensagem:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem",
      },
      { status: 500 },
    )
  }
}
