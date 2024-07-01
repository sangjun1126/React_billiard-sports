import React from "react";
// import './Home.css';

// 헤더 컴포넌트
function Header() {
  return (
    <header className="header">
      <img src="/path/to/logo.png" alt="당구장 로고" className="logo" />
      <nav className="nav">
        <ul>
          <li><a href="#about">소개</a></li>
          <li><a href="#gallery">갤러리</a></li>
          <li><a href="#how-to-use">이용 안내</a></li>
          <li><a href="#events">이벤트</a></li>
          <li><a href="#contact">연락처</a></li>
        </ul>
      </nav>
    </header>
  );
}

// 소개 컴포넌트
function About() {
  return (
    <section id="about" className="about">
      <h2>당구장 소개</h2>
      <p>마이큐 당구장은 대대 6 테이블, 중대 10 테이블로 이루어진 둔촌역 대표 당구장입니다.</p>
      <p>둔촌역 4번출구 10m 거리에 위치해있어 이용하기 편한 마이큐 당구장으로 놀러오세요.</p>
    </section>
  );
}

// 갤러리 컴포넌트
function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>갤러리</h2>
      <div className="gallery-images">
        <img src="/path/to/image1.jpg" alt="당구장 이미지 1" />
        <img src="/path/to/image2.jpg" alt="당구장 이미지 2" />
        <img src="/path/to/image3.jpg" alt="당구장 이미지 3" />
      </div>
    </section>
  );
}

// 이용 안내 컴포넌트
function HowToUse() {
  return (
    <section id="how-to-use" className="how-to-use">
      <h2>이용 안내</h2>
      <p>운영 시간: 13:00 ~ 00:00 (연중 무휴)</p>
      <p>요금 안내: 중대 10분당 1800원 / 대대 10분당 2400원</p>
      <p>예약 방법: 전화 예약 또는 홈페이지 예약 시스템 이용</p>
      <p>주차 : 둔촌역 3번 출구에서 마이큐 당구장 우측에 둔촌 주차장 이용바람 (후문은 지정석이니 참고바랍니다)</p>
      <p>회원제 : 당구장에 직접 오셔서 문의 바랍니다.</p>
    </section>
  );
}

// 이벤트 및 뉴스 컴포넌트
function Events() {
  return (
    <section id="events" className="events">
      <h2>이벤트 및 뉴스</h2>
      <ul>
        <li>2023 ~ 현재 : 동호회 활성화 (한큐 당구동호회)</li>
        <li>2024년 02월 01일 : 당구장 요금 인상</li>
      </ul>
    </section>
  );
}

// 연락처 컴포넌트
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>연락처</h2>
      <p>주소: 서울특별시 강동구 양재대로 1371 마이큐 당구장 </p>
      <p>전화: 010-9266-3977</p>
      <p>이메일: jeongsangjun@naver.com</p>
      <div className="map">
        {/* 여기에는 구글 지도 또는 다른 지도 API를 통합할 수 있습니다 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.917846967856!2d127.02767731611614!3d37.4971113798101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1c78e62f4c5%3A0xf78d3f42c0e82b6f!2z7ZWc6rWQ7Jq466W87YSw!5e0!3m2!1sko!2skr!4v1655192898964!5m2!1sko!2skr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="구글 지도"
        ></iframe>
      </div>
    </section>
  );
}

// 메인 Home 컴포넌트
function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <Gallery />
      <HowToUse />
      <Events />
      <Contact />
    </div>
  );
}

export default Home;
