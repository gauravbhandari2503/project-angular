export interface ValidationError {
  [key: string]: string[];
}

export interface ContainsError {
  validationErrors: ValidationError;
}