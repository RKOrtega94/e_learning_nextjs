// Use cases interfaces

// Classroom use cases
import ICreateClassroomUseCase from "./classroom/create_classroom_use_case";
import IGetAllClassroomUseCase from "./classroom/get_all_classroom_use_case";

// Question bank use cases
import ICreateQuestionBankUseCase from "@/domain/use_cases/question_bank/create_question_bank_use_case";
import IGetAllQuestionBankUseCase from "@/domain/use_cases/question_bank/get_all_question_bank_use_case";

// Question use cases
import IGetAllQuestionUseCase from "./question/get_all_question_use_case";
import ICreateQuestionUseCase from "./question/create_question_use_case";

export {
  // Classroom use cases
  ICreateClassroomUseCase,
  IGetAllClassroomUseCase,
  // Question use cases
  ICreateQuestionBankUseCase,
  IGetAllQuestionBankUseCase,
  // Question use cases
  ICreateQuestionUseCase,
  IGetAllQuestionUseCase,
};
