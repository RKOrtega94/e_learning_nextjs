import { IQuestionnaire } from "../../interface/_interfaces";

export default abstract class ICreateQuestionnaireUseCase {
  abstract execute(questionnaireData: IQuestionnaire): Promise<IQuestionnaire>;
}
