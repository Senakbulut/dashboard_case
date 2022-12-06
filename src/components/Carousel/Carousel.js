import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

import { Typography } from "antd";
import ArrowRight from "../../assets/icons/arrow-right";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { colors } from "../../styles/globalStyle";

const { Title, Link } = Typography;

const CarouselWrapper = styled.div`
  margin-top:24px;
  .swiper-wrapper{
    padding-bottom:32px;
  }
  .swiper-slide {
    background: ${colors.white};
    height: 160px;
    border-radius: 12px;
  }
  .swiper-pagination {
    bottom: 0;
    margin-top:24px;
  }
`;
const CarouselSlideContent = styled.div`
  padding: 0 12px 0 0;
  display: flex;
  a {
    margin: auto auto 12px auto;
  }
`;
const CarouselSlideTitle = styled.div`
  padding: 38px 0 0 7px;
`;
const CarouselSlideImg = styled.img`
  max-width: ${(p) => (p.width ? p.width : "100%")};
  max-height: ${(p) => (p.height ? p.height : "100%")};
  width: 100%;
  height: auto;
  background-color: ${(p) => (p.background ? p.background : "transparent")};
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : 0)};
`;
const Carousel = (props) => {
  return (
    <CarouselWrapper>
      <Swiper
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={true}
        modules={[Pagination]}
      >
        {props.data.map((item, i)=>(
          <SwiperSlide key={i}>
          <CarouselSlideContent>
            <CarouselSlideImg src={item.imageSrc} width="96px" height="160px" />
            <CarouselSlideTitle>
              <Title
                level={5}
                style={{ fontSize: 14, color: `${colors.black}`, margin: "0 0 10px 0" }}
              >
                {item.title}
              </Title>
              <Title
                level={5}
                style={{ fontSize: 14, color: `${colors.grayInfo}`, margin: 0 }}
              >
                {item.description}
              </Title>
            </CarouselSlideTitle>
            <Link href="#"><ArrowRight /></Link>
          </CarouselSlideContent>
        </SwiperSlide>
        ))}

      </Swiper>
    </CarouselWrapper>
  );
};
export default Carousel;
