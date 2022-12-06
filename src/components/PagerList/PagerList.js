import React from "react";
import { Avatar, Badge, List, Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../styles/globalStyle";
const { Title, Link } = Typography;

const PagerListWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 0 24px 24px 24px;
  .ant-list-item {
    padding: 24px 0;
    .ant-list-item-meta {
      &-title {
        font-size: 16px;
        color: ${colors.black};
        margin: 0 0 5px 0;
      }
      &-description {
        color: ${colors.grayTitle};
        font-size: 12px;
        margin: 0;
      }
    }
  }
  .ant-pagination {
    display: flex;
    justify-content: center;
    &-next,
    &-prev {
      display: none;
    }
    &-item {
      background-color: ${colors.background};
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: ${colors.grayTitle};
      }
      &-active {
        border-color: transparent;
        background-color: ${colors.primary};
        a {
          color: ${colors.white};
        }
      }
    }
  }
`;
const PagerList = (props) => (
  <PagerListWrapper>
    <List
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.dataSource}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={
              <Badge
                count={
                  <Avatar
                    style={{ width: 16, height: 16 }}
                    src={item.companyAvatar}
                  />
                }
                offset={[-5, 35]}
              >
                <Avatar
                  style={{
                    backgroundColor: `${item.color}`,
                    width: 40,
                    height: 40,
                    padding: 2,
                  }}
                  icon={item.avatar}
                />
              </Badge>
            }
            title={<Link href={item.href}>{item.title}</Link>}
            description={item.description}
          />
          <div>
            <Title
              level={5}
              style={{
                margin: 0,
                textAlign: "right",
                color: `${item.sign === "+" ? colors.green : colors.black}`,
              }}
            >
              {item.count}
            </Title>
            <Title
              level={5}
              style={{
                margin: "5px 0 0 0 ",
                textAlign: "right",
                color: `${colors.grayTitle}`,
                fontSize: 12,
              }}
            >
              {item.time}
            </Title>
          </div>
        </List.Item>
      )}
    />
  </PagerListWrapper>
);
export default PagerList;
