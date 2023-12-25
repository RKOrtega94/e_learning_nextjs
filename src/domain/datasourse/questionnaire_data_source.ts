import { IQuestionnaire } from "../interface/_interfaces";

export default abstract class QuestionnaireDataSource {
  abstract getAll(): Promise<IQuestionnaire[]>;
  abstract create(questionnaire: IQuestionnaire): Promise<IQuestionnaire>;
}
