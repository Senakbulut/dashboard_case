import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import { Layout, Menu, Avatar, Typography, Badge, Drawer } from "antd";
import Accounts from "../../assets/icons/accounts";
import Cards from "../../assets/icons/cards";
import Transactions from "../../assets/icons/transactions";
import Campaigns from "../../assets/icons/campaigns";
import { breakpoints, colors } from "../../styles/globalStyle";
import { getMenu } from "../../api/services/menu";
import { getUser } from "../../api/services/user";

const { Header } = Layout;
const { Title, Link } = Typography;

const HeaderWrapper = styled.section`
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
const MobileMenuContainer = styled.section`
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  .header__menu {
    background: none;
    border-bottom: none;
    margin-left: 48px;
    @media (max-width: ${breakpoints.md}) {
      margin-left: 24px;
    }

    li {
      color: ${colors.grayInfo};
      padding: 0 12px;
      margin-right: 20px;
      @media (max-width: ${breakpoints.md}) {
        margin-right: 0;
      }
      &:hover {
        color: ${colors.black} !important;
        cursor: pointer;
        background-color: rgba(21, 94, 212, 0.05);
        &::after {
          border-bottom-color: transparent !important;
        }
        svg {
          path {
            &:last-child {
              fill: ${colors.black} !important;
            }
          }
        }
      }
      div {
        display: flex;
        align-items: center;
      }
    }
  }
`;
const HeaderImg = styled.img`
  max-width: ${(p) => (p.width ? p.width : "100%")};
  max-height: ${(p) => (p.height ? p.height : "100%")};
  width: 100%;
  height: auto;
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : 0)};
`;
const MenuUserInfo = styled.div`
  display: flex;
  h5 {
    margin: 0 0 5px 16px;
    font-size: 14px;
    color: ${colors.black};
    &:last-child {
      margin: 0 0 5px 16px;
      font-size: 12px;
      color: ${colors.grayTitle};
    }
  }
`;
export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState();
  const [userDetail, setUserDetail] = useState();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const getMenuItems = async () => {
    const result = await getMenu();
    setMenuItem(result);
  };
  const getUserDetail = async () => {
    let userLocal = localStorage.getItem("user");
    let id = JSON.parse(userLocal);
    const detailUser = await getUser(id.id);
    setUserDetail(detailUser?.user);
    console.log(detailUser?.user);
    console.log(detailUser);
  };
  useEffect(() => {
    getMenuItems();
    getUserDetail();
  }, []);

  return (
    <Header>
      <HeaderWrapper>
        <MenuContainer>
          <Link href="https://fups.com/" style={{ lineHeight: "normal" }}>
            <HeaderImg src={Logo} />
          </Link>
          <Menu mode="horizontal" className="header__menu">
            <Menu.SubMenu key="SubMenu1" title="Hesaplar" icon={<Accounts />}>
              {menuItem?.map(
                (itm, id) =>
                  itm.id < 3 && <Menu.Item key={id}>{itm.name}</Menu.Item>
              )}
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu2" title="Kartlar" icon={<Cards />}>
              {menuItem?.map(
                (itm, id) =>
                  itm.name === "Times Square" && (
                    <Menu.Item key={id}>{itm.name}</Menu.Item>
                  )
              )}
            </Menu.SubMenu>
            <Menu.SubMenu
              key="SubMenu3"
              title="İşlemler"
              icon={<Transactions />}
            >
              {menuItem?.map(
                (itm, id) =>
                  itm.id > 4 && <Menu.Item key={id}>{itm.name}</Menu.Item>
              )}
            </Menu.SubMenu>
            <Menu.SubMenu
              key="SubMenu4"
              title="Kampanyalar"
              icon={<Campaigns />}
            >
              {menuItem?.map(
                (itm, id) =>
                  itm.latitude === 35.3606422 && (
                    <Menu.Item key={id}>{itm.name}</Menu.Item>
                  )
              )}
            </Menu.SubMenu>
          </Menu>
        </MenuContainer>
        <MenuUserInfo onClick={showDrawer} key={userDetail?.id}>
          <Badge count={12}>
            <Avatar
              src={userDetail?.avatar}
              style={{ width: 40, height: 40 }}
            />
          </Badge>
          <div>
            <Title level={5}>
              {userDetail?.fname} {userDetail?.lname}
            </Title>
            <Title level={5}>Standart</Title>
          </div>
        </MenuUserInfo>
      </HeaderWrapper>
      <MobileMenuContainer>
        <HeaderImg src={Logo} height="44px" width="88px" />
        <MenuUserInfo onClick={showDrawer} key={userDetail?.id}>
          <Badge count={12}>
            <Avatar
              src={userDetail?.avatar}
              style={{ width: 40, height: 40 }}
            />
          </Badge>
          <div>
            <Title level={5}>
              {userDetail?.fname} {userDetail?.lname}
            </Title>
            <Title level={5}>Standart</Title>
          </div>
        </MenuUserInfo>

        <Drawer placement="right" onClose={onClose} open={open}>
          <Menu mode="vertical" className="header__menu-mobile">
            <Menu.SubMenu key="SubMenu1" title="Hesaplar">
              <Menu.Item
                key="1"
                style={{ display: "flex", alignItems: "center" }}
              >
                Navigation Two
              </Menu.Item>
              <Menu.Item key="2">Navigation Three</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu2" title="Kartlar">
              <Menu.Item key="3">Navigation Two</Menu.Item>
              <Menu.Item key="4">Navigation Three</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu3" title="İşlemler">
              <Menu.Item key="5">Navigation Two</Menu.Item>
              <Menu.Item key="6">Navigation Three</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu4" title="Kampanyalar">
              <Menu.Item key="7">Navigation Two</Menu.Item>
              <Menu.Item key="8">Navigation Three</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Drawer>
      </MobileMenuContainer>
    </Header>
  );
};
