export type APIResponse<T> = {
  data: T | undefined;
  error: any;
  loading: boolean;
};
