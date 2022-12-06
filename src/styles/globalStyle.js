import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  xl: "1440px",
  lg: "1200px",
  md: "1024px",
  sm: "992px",
  xs: "768px",
  xxs: "526px",
};
export const colors = {
  white: "#fff",
  black: "#17171a",
  grayInfo: "#606066",
  grayTitle: "#909099",
  grayButton: "#dcdce6",
  grayDisabled: "#e8e8f0",
  background: "#f5f5fa",
  primary: "#155ed4",
  blueHover: "#4085e6",
  bluePressed: "#6097f0",
  purple: "#8066cc",
  green: "#26bf66",
  yellow: "#ffb44d",
};

export const GlobalStyle = createGlobalStyle`
.ant-list-item {
    padding: 0 0 24px 0;
    &-meta {
      &-avatar {
        margin-inline-end: 24px !important;
      }
      &-description {
        color: ${colors.white} !important;
        font-size: 16px !important;
        line-height: normal !important;
      }
    }
}
  .text__input {
    border: solid 2px transparent;
    &:focus {
      border: solid 2px ${colors.primary};
      &:hover {
        border: solid 2px ${colors.primary};
      }
    }
    &:hover {
      border: solid 2px ${colors.grayButton};
    }
    &::placeholder {
      color: ${colors.grayTitle};
      font-size: 16px;
      font-weight: normal;
    }
  }

  .login__button {
    width: 160px;
    background: ${colors.primary};
    &:hover {
      background-color: ${colors.blueHover};
      color: ${colors.white};
      border: 1px solid transparent;
    }
    &:disabled {
      background-color: ${colors.grayDisabled};
      border-color: transparent;
      color: ${colors.white};
    }
    &:focus {
      background-color: ${colors.bluePressed};
    }
  }
  .login__select {
    border: 2px solid transparent;
    &:hover {
      border: solid 2px ${colors.grayButton};
    }

    .ant-select {
      &-open {
        border: solid 2px ${colors.primary};
      }
      &-selector {
        border: 2px solid transparent !important;
        height: 52px;
        padding: 14px 18px 14px 16px;
        border-radius: 12px;
        background-color: ${colors.background};
        box-shadow: none !important;
      }
      &-selection {
        &-item {
          line-height: normal;
          color: ${colors.black};
          font-weight: 600;
          font-size: 16px;
        }
        &-search-input {
          height: 52px;
        }
        &-placeholder {
          line-height: normal;
          font-size: 16px;
          color: ${colors.grayTitle};
        }
      }
    }
  }
`;
export const MainStyle = createGlobalStyle`
  font-family: SofiaPro;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
