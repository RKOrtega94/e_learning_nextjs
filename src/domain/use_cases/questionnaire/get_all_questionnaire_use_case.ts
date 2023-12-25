import { IQuestionnaire } from "@/domain/interface/_interfaces";

export default abstract class IGetAllQuestionnaireUseCase {
  abstract execute(): Promise<IQuestionnaire[]>;
}
