export class HttpError extends Error {
  constructor(
    public code: number,
    public message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public details?: any,
  ) {
    super(message);
  }
}
