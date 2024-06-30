export function common(): string {
  return 'common';
}

export function exampleFunction(): IResponse {
  return {
    message: 'Hello world',
  };
}

export interface IResponse {
  message: string;
}