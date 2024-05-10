export type Weightable<T = any> = T & {
  weight?: number;
}