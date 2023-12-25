import { IQuestionnaire } from "../interface/_interfaces";

export default abstract class QuestionnaireRepository {
  abstract getAll(): Promise<IQuestionnaire[]>;
  abstract create(questionnaire: IQuestionnaire): Promise<IQuestionnaire>;
}
