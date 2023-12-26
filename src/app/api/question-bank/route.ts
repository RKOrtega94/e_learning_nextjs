import { NextRequest, NextResponse } from "next/server";
import { QuestionBankService } from "@/presentation/services/_services";

const service = new QuestionBankService();

export async function GET(request: NextRequest): Promise<NextResponse> {
  return await service.getAllQuestionBanks(request);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return await service.createQuestionBank(request);
}
