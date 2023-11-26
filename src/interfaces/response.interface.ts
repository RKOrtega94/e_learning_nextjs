class SuccessResponse {
  constructor(public message: string, public data: any) {}

  public static json(message: string, data: any) {
    return new SuccessResponse(message, data);
  }
}

class ErrorResponse {
  constructor(public message: string, public errors: String[]) {}

  public static json(message: string, errors: String[]) {
    return new ErrorResponse(message, errors);
  }
}

export { SuccessResponse, ErrorResponse };
