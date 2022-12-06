import styled from "styled-components";
import { Typography } from "antd";
import { HeaderComponent } from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import PagerList from "../../components/PagerList/PagerList";
import ChevronRight from "../../assets/icons/chevron-right";
import SocialAccount from "../../assets/images/social-account.png";
import { breakpoints, colors } from "../../styles/globalStyle";
import { dataCarousel, dataList } from "../../utils/dummyData";

const { Title, Link, Paragraph } = Typography;

const DashboardWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  padding-bottom: 50px;
`;
const DashboardCarouselContainer = styled.div`
  margin: 50px 0 0 40px;
  @media (max-width: ${breakpoints.md}) {
    margin: 50px 0 0 16px;
  }
`;
const DashboardListContainer = styled.div`
  margin: 24px 40px;
  @media (max-width: ${breakpoints.md}) {
    margin: 24px 16px;
  }
`;
const DashboardListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
  @media (max-width: ${breakpoints.xxs}){
    flex-direction: column;
  }
  a {
    display: flex;
    align-items: center;
    h5 {
      margin: 0;
      color: ${colors.primary};
    }
  }
`;
const DashboardAccountContainer = styled.div`
  margin: 50px 40px 0 40px;
  background-color: ${colors.white};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: ${breakpoints.md}) {
    margin: 50px 16px 0 16px;
  }
  @media (max-width:${breakpoints.xs}){
    flex-direction: column;
  }
`;
const DashboardAccountCampaign = styled.div`
  padding: 32px 0 35px 40px;
`;
const DashboardImg = styled.img`
  max-width: ${(p) => (p.width ? p.width : "100%")};
  max-height: ${(p) => (p.height ? p.height : "100%")};
  width: 100%;
  height: auto;
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : 0)};
  @media (max-width: ${breakpoints.md}) {
    margin:auto;
  }
`;
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <HeaderComponent />
      <DashboardCarouselContainer>
        <Title level={5}>SİZE ÖZEL KAMPANYALAR</Title>
        <Carousel data = {dataCarousel} />
      </DashboardCarouselContainer>
      <DashboardListContainer>
        <DashboardListHeader>
          <Title level={5}>HESAP HAREKETLERİ</Title>
          <Link href="#">
            <Title level={5}>Harcama Analizi</Title>
            <ChevronRight />
          </Link>
        </DashboardListHeader>
        <PagerList dataSource={dataList} />
      </DashboardListContainer>
      <DashboardAccountContainer>
        <DashboardAccountCampaign>
          <Title level={4} style={{ color: `${colors.black}`, margin: "0 0 16px 0" }}>
            Sosyal hesaplar sizlerle!
          </Title>
          <Paragraph
            style={{
              fontSize: "16px",
              color: `${colors.grayInfo}`,
              margin: "0 0 33px 0",
              maxWidth: 482,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing eliti, donec
            rhoncus velit enim, ut malesuada erat dignissim sed.
          </Paragraph>
          <Link href="#">
            <Title style={{ color: `${colors.primary}`, fontSize: "14px" }}>
              Hemen Satın Al
            </Title>
          </Link>
        </DashboardAccountCampaign>
        <DashboardImg src={SocialAccount} width="419px" height="200px" />
      </DashboardAccountContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
