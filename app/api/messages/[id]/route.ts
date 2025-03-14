import { NextResponse } from "next/server"
import { deleteMessage } from "@/lib/db"

export const dynamic = 'force-dynamic'

export async function DELETE(
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

    await deleteMessage(id)

    return NextResponse.json({
      success: true,
      message: "Mensagem excluída com sucesso",
    })
  } catch (error) {
    console.error("Erro ao excluir mensagem:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao excluir mensagem",
      },
      { status: 500 }
    )
  }
}
