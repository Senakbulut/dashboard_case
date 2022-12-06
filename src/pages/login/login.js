import { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import Lottie from "react-lottie";
import { List, Form, Input, Button, Typography, Select, Radio } from "antd";
import LoginMockupImg from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.svg";
import RegisterImg from "../../assets/images/register.svg";
import ArrowDown from "../../assets/icons/arrow-down";
import Loading from "../../assets/images/loading.json";
import { loginUser } from "../../api/services/auth";
import { breakpoints, colors, GlobalStyle } from "../../styles/globalStyle";
import { dataSteps, options } from "../../utils/dummyData";
import {
  InputStyle,
  ButtonStyle,
  SelectStyle,
} from "../../helpers/sharedStyles";

const { Title, Paragraph, Link } = Typography;
const { Option } = Select;

const lottieStyle = {
  width: 331,
  height: 242,
  boxShadow: "0 2px 40px 0 rgba(8, 8, 39, 0.16)",
  borderRadius: 24,
  background: `${colors.white}`,
  position: "relative",
  display: "flex",
};

export const LoginSection = styled.section`
  height: 100vh;
  background-color: ${colors.white};
  padding: 16px 16px 16px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 16px;
    gap: 40px;
    height: 100%;
  }
`;
const LoginInfoContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.white};
  overflow: hidden;
  @media (max-width: ${breakpoints.md}) {
    overflow: unset;
    flex-direction: row;
    max-width: 100%;
    height: 100%;
    img {
      display: none;
    }
  }
`;
const LoginInfo = styled.div`
  padding: 96px 64px 0 64px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 64px 64px 40px 64px;
  }
  h3 {
    @media (max-width: ${breakpoints.md}) {
      max-width: 100% !important;
    }
  }
`;
const LoginImg = styled.img`
  max-width: ${(p) => (p.width ? p.width : "100%")};
  max-height: ${(p) => (p.height ? p.height : "100%")};
  width: 100%;
  height: auto;
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : 0)};
`;
const LoginLogoSec = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 72px 0 72px;
  @media (max-width: ${breakpoints.md}) {
    padding: 40px 0 0 0;
  }
  .signup__button {
    border: 2px solid ${colors.grayButton};
    width: 128px;
  }
`;
const LoginRegister = styled.div`
  width: 100%;
  background-image: url(${RegisterImg});
  background-position: left bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  @media (max-height: 888px) {
    background-image: unset;
  }
  @media (max-width: ${breakpoints.md}) {
    background-image: unset;
    gap: 40px;
  }
`;
const LoginRegisterForm = styled.div`
  margin: auto;
  max-width: 432px;
  width: 100%;
  .password__input {
    border: solid 2px transparent;
    .ant-input {
      background: ${colors.background};
      font-weight: 600;
      font-size: 16px;
      &::placeholder {
        color: ${colors.grayTitle};
        font-weight: normal;
      }
      &-status-error{
        border: solid 2px #f20028;
      }
    }
    &:hover {
      border: solid 2px ${colors.grayButton};
    }
    &:focus {
      border: solid 2px ${colors.primary};
      &:hover {
        border: solid 2px ${colors.primary};
      }
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
const LoginRegisterFormLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  a {
    font-sixe: 14px;
    font-weight: 600;
    color: ${colors.primary};
  }
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(105, 138, 191, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: absolute;
  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  svg {
    width: 140px !important;
    height: 140px !important;
    margin: 0 auto;
  }
`;

const Login = (props) => {
  const [loading, setLoading] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    setLoading(true);
    const response = await loginUser({
      username,
      password,
    });
    setLoading(false);
    if ("accessToken" in response) {
      localStorage.setItem("accessToken", response["accessToken"]);
      localStorage.setItem("user", JSON.stringify(response["user"]));
      props.isLogin(true);
      window.location.href = "/";
    } else {
      swal("Failed", response.message, "error");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {loading && (
        <LoadingWrapper>
          <div>
            <Lottie options={defaultOptions} style={lottieStyle} />
            <Title level={5}>GİRİŞ YAPILIYOR…</Title>
          </div>
        </LoadingWrapper>
      )}
      <GlobalStyle />
      <LoginSection>
        <LoginRegister>
          <LoginLogoSec>
            <LoginImg src={Logo} width="112px" height="56px" />
            <Button style={ButtonStyle} className="signup__button">
              KAYIT OL
            </Button>
          </LoginLogoSec>

          <LoginRegisterForm>
            <Title
              level={2}
              style={{ fontSize: 32, margin: "0 0 16px 0", color: `${colors.black}` }}
            >
              Kullanıcı Girişi
            </Title>
            <Paragraph
              style={{ fontSize: 16, margin: "0 0 32px 0", color: `${colors.grayInfo}` }}
            >
              Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
            </Paragraph>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
            >
              <Form.Item
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Lütfen kullanıcı tipini giriniz.",
                  },
                ]}
              >
                <Select
                  placeholder="Kullanıcı Tipi"
                  style={SelectStyle}
                  suffixIcon={<ArrowDown />}
                  className="login__select"
                  optionLabelProp="label"
                >
                  {options.map((item, i) => (
                    <Option
                      value={item.value}
                      label={item.label}
                      key={i}
                      className="custom-dropdown"
                    >
                      <div className="demo-option-label-item">
                        <Radio value={item.value} name="select_option">
                          {item.label}
                        </Radio>
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="username"
                onChange={(e) => setUserName(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Lütfen kullanıcı adını giriniz.",
                  },
                ]}
              >
                <Input
                  placeholder="Kullanıcı Adı"
                  style={InputStyle}
                  className="text__input"
                />
              </Form.Item>
              <Form.Item
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Lütfen şifrenizi giriniz.",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Şifren"
                  style={InputStyle}
                  className="password__input"
                />
              </Form.Item>
              <LoginRegisterFormLinks>
                <Form.Item>
                  <Link className="login-form-forgot" href="#">
                    Şifremi Unuttum
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={ButtonStyle}
                    className="login__button"
                  >
                    GİRİŞ YAP
                  </Button>
                </Form.Item>
              </LoginRegisterFormLinks>
            </Form>
          </LoginRegisterForm>
        </LoginRegister>

        <LoginInfoContainer>
          <LoginInfo>
            <Title
              level={3}
              style={{ color: `${colors.white}`, margin: "0 0 48px 0", maxWidth: 119 }}
            >
              Nasıl giriş yaparım?
            </Title>
            <List
              itemLayout="horizontal"
              dataSource={dataSteps}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta avatar={item.icon} description={item.title} />
                </List.Item>
              )}
            />
          </LoginInfo>
          <LoginImg src={LoginMockupImg} />
        </LoginInfoContainer>
      </LoginSection>
    </>
  );
};

export default Login;
