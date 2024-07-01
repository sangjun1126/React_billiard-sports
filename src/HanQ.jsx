import React, { useState } from "react";
import './HanQ.css';
import HanQImg from './Images/HanQ.jpg'

// 정기대회 항목 컴포넌트
function EventItem({ event }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="event-item">
      <div className="event-summary">
        {event.date} : {event.title}
        <button onClick={handleToggle} style={{ marginLeft: "10px" }}>
          {isExpanded ? "접기" : "더 보기"}
        </button>
      </div>
      {isExpanded && (
        <div className="event-details">
          <p><strong>일시:</strong> {event.date} ({event.day})</p>
          <p><strong>참석 인원:</strong> {event.participants}</p>
          <p><strong>우승:</strong> {event.winner}</p>
          <p><strong>준우승:</strong> {event.runnerUp}</p>
          <p><strong>대회장소:</strong> {event.location}</p>
          <p><strong>우승 상금:</strong> {event.prize}</p>
        </div>
      )}
    </li>
  );
}

// 동호회 연혁 컴포넌트
function History() {
    const events = [
      { date: "2022.08.18", details: "한큐 동호회 설립 (창립 회원 : 박민영, 이배규, 이영철, 이정훈 등 4명)" },
      { date: "2022.08.20", title: "제 1회 정기대회", day: "토", participants: "박민영, 이배규, 이영철, 이정훈 이상 4명", winner: "이영철", runnerUp: "없음", location: "우리동네 당구장", prize: "10만원" },
      { date: "2022.09.24", title: "제 2회 정기대회", day: "토", participants: "박민영, 이배규, 이영철, 이정훈 이상 4명", winner: "이영철", runnerUp: "없음", location: "마이큐 당구클럽", prize: "10만원" },
      { date: "2022.12.03", title: "제 3회 정기대회", day: "토", participants: "박민영, 이배규, 이응수, 이정훈 이상 4명", winner: "박민영", runnerUp: "이정훈", location: "마이큐 당구클럽", prize: "우승 10만원, 준우승 5만원" },
      { date: "2023.02.19", title: "제 4회 정기대회", day: "일", participants: "박민영, 이배규, 이응수. 이영철, 이정훈 이상 5명", winner: "이정훈", runnerUp: "이영철", location: "마이큐 당구클럽", prize: "우승 10만원, 준우승 5만원" },
      { date: "2023.08.05", title: "제 5회 정기대회", day: "토", participants: "박민영, 박준수, 이배규, 이영철, 이응수, 이정훈 이상 6명", winner: "이배규", runnerUp: "이영철", location: "마이큐 당구클럽", prize: "금반지 1돈"},
      { date: "2023.10.21", title: "제 6회 정기대회", day: "토", participants: "김영민, 박민영, 박준수, 박형하, 이배규, 이영철, 이응수 이상 7명", winner: "이영철", runnerUp: "이응수", location: "마이큐 당구클럽", prize: "금반지 1돈" },
      { date: "2023.12.16", title: "제 7회 정기대회", day: "토", participants: "김영민, 박민영, 박준수, 이배규, 이영철, 이정훈 이상 6명", winner: "이영철", runnerUp: "이정훈", location: "마이큐 당구클럽", prize: "금반지 1돈" },
      { date: "2024.01.21", title: "제 8회 정기대회 (신년 스카치 이벤트 대회)", day: "일", participants: "회원 (김영민, 박형하, 박준수, 양용득, 이배규, 이영철, 이정훈, 최영길 이상 8명) + 비회원 (강성민, 김재엽, 김지훈, 맹창재, 문영일, 오순길, 오승혁, 이천희 이상 8명)", winner: "이정훈 / 오승혁", runnerUp: "양용득 / 맹창재", location: "마이큐 당구클럽", prize: "우승 : 금반지 1돈 / 준우승 : 7만원 / 3위팀 : 3만원" },
      { date: "2024.04.14", title: "제 9회 정기대회", day: "일", participants: "김영민, 김재선, 김재엽, 맹창재, 박민영, 박준수, 박형하, 양용득, 이배규, 이영철, 이정훈, 최영길 이상 12명", winner: "양용득", runnerUp: "박민영 (3위 : 이영철, 4위 : 김재엽)", location: "마이큐 당구클럽", prize: "금반지 1돈 / 준우승 : 7만원 / 3,4위 : 각 4만원" },
      { date: "2024.06.09", title: "제 10회 정기대회 (팀 대회 스카치 대회)", day: "일", participants: "참석 8팀 (김영민+박형하, 김재선+양용득, 김재엽+우상윤, 맹창재+이배규, 박민영+박준수, 김기석+이영철, 이정훈+정상준, 최영길+박상서 이상 8개 팀 16명)", winner: "김영민 / 박형하", runnerUp: "이영철 / 김기석", location: "마이큐 당구클럽", prize: "우승 : 금반지 각 1돈 / 준우승 각 5만원" },
    ];
  
    // 정기대회 항목과 일반 항목을 구분
    const regularEvents = events.slice(1, 11); // 정기대회 항목
    const otherEvents = events.slice(0, 1).concat(events.slice(11)); // 일반 항목
  
    return (
      <div className="history">
        <h2>동호회 연혁</h2>
        <ul>
          {otherEvents.map((event, index) => (
            <li key={index}>{event.date} : {event.details || ''}</li>
          ))}
          {regularEvents.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </ul>
      </div>
    );
  }

  function Members() {
    // 회원 데이터를 배열로 정의
    const [expandedMember, setExpandedMember] = useState(null); // 확장된 멤버 상태 추가
  
    const members = [
      { 
        name: "박민영", 
        role: "회장", 
        description: "동호회의 창립자.",
        nickname: "한큐 26",
        score: "26점",
        note: "한큐 동호회의 창립 인원이자 현 회장임"
      },
      { 
        name: "김영민", 
        role: "총무", 
        description: "한큐 동호회의 재정 관리 담당",
        nickname: "말탄",
        score: "28점",
        note: "현 마이큐 당구장 사장님, 제 10회 정기대회(스카치 대회) 우승"
      },
      { 
        name: "김기석", 
        role: "회원", 
        description: "일반 회원",
        nickname: "김kisuk",
        score: "20점",
        note: "제 10회 정기대회(스카치 대회) 준우승 입상"
      },
      { 
        name: "김재엽", 
        role: "회원", 
        description: "일반 회원",
        nickname: "쭌할배88",
        score: "25점",
        note: "제 9회 정기대회 4위 입상"
      },
      { 
        name: "김재선", 
        role: "회원", 
        description: "일반 회원",
        nickname: "스나이퍼 1988",
        score: "20점",
        note: "없음"
      },
      { 
        name: "맹창재", 
        role: "회원", 
        description: "현 마이큐 당구장 대표님",
        nickname: "한큐 25",
        score: "25점",
        note: "제 8회 신년 스카치 이벤트 대회 준우승"
      },
      { 
        name: "박준수", 
        role: "회원", 
        description: "일반 회원",
        nickname: "당박사",
        score: "20점",
        note: "없음"
      },
      { 
        name: "박형하", 
        role: "회원", 
        description: "일반 회원",
        nickname: "니콜라스 21",
        score: "21점",
        note: "제 10회 정기대회(스카치 대회) 우승"
      },
      { 
        name: "양용득", 
        role: "회원", 
        description: "일반 회원",
        nickname: "양용득",
        score: "28점",
        note: "제 8회 신년 스카치 이벤트 대회 준우승, 제 9회 정기대회 우승"
      },
      { 
        name: "우상윤", 
        role: "회원", 
        description: "일반 회원",
        nickname: "wsy",
        score: "19점",
        note: "없음"
      },
      { 
        name: "이배규", 
        role: "회원", 
        description: "일반 회원",
        nickname: "이배규",
        score: "22점",
        note: "제 5회 정기대회 우승"
      },
      { 
        name: "이영철", 
        role: "회원", 
        description: "일반 회원",
        nickname: "아하 25",
        score: "25점",
        note: "정기대회 6회 우승"
      },
      { 
        name: "이정훈", 
        role: "회원", 
        description: "일반 회원",
        nickname: "발키리 25",
        score: "25점",
        note: "정기대회 3회 우승"
      },
      { 
        name: "최영길", 
        role: "회원", 
        description: "일반 회원",
        nickname: "초이스 23",
        score: "23점",
        note: "없음"
      },
      { 
        name: "박상서", 
        role: "회원", 
        description: "일반 회원",
        nickname: "탄불이",
        score: "23점",
        note: "없음"
      },
      { 
        name: "정상준", 
        role: "회원", 
        description: "일반 회원",
        nickname: "상준 23",
        score: "23점",
        note: "현 마이큐 당구장 알바생"
      },
    ];
  
    // 멤버의 상세 정보를 확장하거나 축소하는 함수
    const toggleExpand = (index) => {
      if (expandedMember === index) {
        setExpandedMember(null); // 이미 확장된 멤버를 다시 클릭하면 축소
      } else {
        setExpandedMember(index); // 다른 멤버를 클릭하면 해당 멤버 확장
      }
    };
  
    return (
      <div className="members">
        <h2>동호회 멤버들</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index} className="member">
              <div className="member-header" onClick={() => toggleExpand(index)}>
                <h3>{member.name} ({member.role})</h3>
                {expandedMember === index ? '닫기' : '더 보기'}
              </div>
              {expandedMember === index && (
                <div className="member-details">
                    <p><strong>회원설명 :</strong> {member.description}</p>
                  <p><strong>닉네임:</strong> {member.nickname}</p>
                  <p><strong>대대 수지:</strong> {member.score}</p>
                  <p><strong>특이사항:</strong> {member.note}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

// 동호회 회칙 컴포넌트
function Rule() {
    return (
      <div className="rule">
        <h2>한큐 동호회 회칙</h2>
        <ul>
          <li><strong>제 1조 (명칭)</strong> 본 회의 명칭은 "한큐 당구동호회"라 칭한다.</li>
          <li><strong>제 2조 (목적)</strong> 본 회의 목적은 당구동호인으로써 회원 상호간에 친목을 도모하고 신의와 우의를 다지며 지역사회(공동체)의 발전에 도움을 주는데 그 목적이 있다.</li>
          <li><strong>제 3조 (소재지 / 모임장소)</strong> 본 회의 모임장소는 지역내 당구클럽(현 마이큐 당구클럽)으로 하되 회장이 결정한다.</li>
          <li><strong>제 4조 (회원)</strong> 본 회의 회원은 당구를 사랑하는 자로써 본회의 목적에 적극 찬동하며 회원 상호간 존중과 배려를 기본으로 모임의 성격을 충분히 이해하는 자로 한다.</li>
        </ul>
      </div>
    );
  }
  
  // 메인 컴포넌트
  function HanQ() {
    return (
      <div className="hanq">
        <img src={HanQImg} alt="한큐 로고" className="logo" /> {/* 로고 이미지 */}
        <h1>한큐 동호회 소개</h1>
        <History />
        <hr></hr>
        <Members />
        <hr></hr>
        <Rule /> {/* 회칙 컴포넌트 추가 */}
      </div>
    );
  }

export default HanQ;
