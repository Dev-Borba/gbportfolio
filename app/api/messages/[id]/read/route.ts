import { NextResponse } from "next/server"
import { markMessageAsRead } from "@/lib/db"

export const dynamic = 'force-dynamic'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "ID inválido",
        },
        { status: 400 }
      )
    }

    await markMessageAsRead(id)

    return NextResponse.json({
      success: true,
      message: "Mensagem marcada como lida",
    })
  } catch (error) {
    console.error("Erro ao marcar mensagem como lida:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao marcar mensagem como lida",
      },
      { status: 500 }
    )
  }
}
