import { NextResponse } from "next/server"
import { getAllMessages } from "@/lib/db"

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const messages = await getAllMessages()

    return NextResponse.json({
      success: true,
      messages,
    })
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao buscar mensagens",
      },
      { status: 500 },
    )
  }
}
