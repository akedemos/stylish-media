declare module "stylish-media" {
  import { CSSProp, Interpolation } from "styled-components";

  const createMedia: (config?: { breakpoints: BreakPoints }) => Media;

  export default createMedia;

  export type BreakPoints = {
    xl: MinMax;
    lg: MinMax;
    md: MinMax;
    sm: MinMax;
    xs: MinMax;
  };

  export type MinMaxCss = (
    px: number,
    ...args: Interpolation<any>[]
  ) => CSSProp;

  export type BetweenCss = (
    min: number,
    max: number,
    ...args: Interpolation<any>[]
  ) => CSSProp;

  export type Media = {
    from: (fromPx: number) => FromFn;
    to: (toPx: number) => ToFn;
    above: (...css: Interpolation<any>[]) => MinMaxCss;
    below: (...css: Interpolation<any>[]) => MinMaxCss;
    only: (...css: Interpolation<any>[]) => BetweenCss;
  };

  export type FromFn = {
    (...args: Interpolation<any>[]): MinMaxCss;
    to: (toPx: number) => (...css: Interpolation<any>[]) => BetweenCss;
  };

  export type ToFn = (...css: Interpolation<any>[]) => MinMaxCss;

  export type MinMax = { min: number; max: number };
}
