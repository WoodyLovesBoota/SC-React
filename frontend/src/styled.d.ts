import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: {
      normal: string;
      lighter: string;
    };
    white: {
      normal: string;
      darker: string;
    };
    yellow: {
      accent: string;
      normal: string;
    };
    blue: {
      accent: string;
      normal: string;
      neon: string;
    };
    red: {
      accent: string;
      normal: string;
    };
    purple: {
      accent: string;
      normal: string;
    };
    orange: {
      accent: string;
      normal: string;
    };
    green: {
      accent: string;
      normal: string;
      neon: string;
      dark: string;
    };
    gold: { normal: string };
  }
}
