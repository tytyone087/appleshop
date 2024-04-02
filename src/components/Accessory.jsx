import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Accessory = () => {
    return (
        <div className='accessory'>
            <h2><span>액세서리.</span> 즐겨 사용하는 기기들과 완벽하게 페어링되는 여러 가지 필수품.</h2>
            <div className="accessorySwiper">
                 <Swiper className='accswiperpadd'
                spaceBetween={0}
                slidesPerView={5.4}
                
                >
                    <SwiperSlide className='accBox1'>
                        <div className="accBox accBox2 ">
                            <h2>새로움을 입다. </h2>
                            <p>전에 없던 색상으로 찾아온 수많은 액세서리.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                            <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT243_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWN93_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>New</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                            <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>&nbsp;</p>
                                <h3>Tech21 FlexQuartz (iPhone 15)(MagSafe 호환) - 체리 블라섬</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                                <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>&nbsp;</p>
                                <h3>Tech21 45mm 소프트 민트 스포츠 루프</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                                <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>&nbsp;</p>
                                <h3>Tech21 45mm 선샤인 스포츠 밴드 - M/L</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                        <div className="colorBox">
                            <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                            <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                            <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                            <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                            <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                        </div>
                        <div className="infoBox">
                            <p>&nbsp;</p>
                            <h3>MagSafe형 iPhone 15 Pro 파인우븐 케이스 - 에버그린</h3>
                            <span className='price'>₩69,000</span>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                                <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>&nbsp;</p>
                                <h3>AirTag 파인우븐 키링 - 코럴</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className="colorBox">
                                <img src={process.env.PUBLIC_URL + 'img/MWNC3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWNA3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/MT2K3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL + 'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className="infoBox">
                                <p>&nbsp;</p>
                                <h3>MagSafe형 iPhone 파인우븐 카드지갑 - 퍼시픽 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='accBox1'>
                        <div className="accBox accBox2">
                        <h2>새로움을 입다. </h2>
                            <p>전에 없던 색상으로 찾아온 수많은 액세서리.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Accessory;