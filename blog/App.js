/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  
  // 글마다 like 따로 표시하기
  let [like, setLike] = useState(['0', '0', '0']);

  // 2. UI의 현재 상태를 state로 저장 (스위치 역할)
  let [modal, setModal] = useState(false); // false: 닫힘, true: 열림 

  [1, 2, 3].map(function(a) {
    return'112233'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '19px'} }>React Blog</h4>
      </div>
        <button onClick={()=> {
          let copy = [...제목];
          copy.sort();
          제목변경(copy)
        }}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4>{제목[0]} <span onClick={ ()=>{setLike(like+1)} }>👍</span> {like} </h4>
        <button onClick={ ()=> {
          let copy = [...제목]; // 원본 데이터 복사
          copy[0] = '여자 코트 추천'; // 데이터 수정
          제목변경(copy); // state 변경
        } }>글 수정</button>
        <p>2월 17일 발생</p>
      </div>

      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>2월 17일 발생</p>
      </div>

      <div className='list'>
        <h4 onClick={()=> { setModal(!modal) }}>{제목[2]}</h4>
        <p>2월 17일 발생</p>
      </div> */}

        {
          제목.map(function(a, i){
            return ( 
              <div className='list' key={i}>
              <h4 onClick={()=> { setModal(!modal) }}> {a} 
                <span 
                  onClick={()=> { 
                    let likeCopy = [...like]; // 원본 복사
                    likeCopy[i]++; // index에 해당하는 글의 좋아요 증가++
                    setLike(likeCopy); // 증가된 값으로 state 변경
                  }}>
                  👍
                </span>{like[i]}
                {/* 증가된 값으로 좋아요 숫자 변경 */}
              </h4>
              {/* = 제목[i] */}
              <p>2월 17일 발생</p>
            </div>
            )
          })
        }
        {/* a는 제목 array
            i는 인덱스


        */}
        
        {
          /* 3. state에 따라 UI가 어떻게 보이게 할지 작성 */
          // {중괄호} 내에서는 if문, for문 사용 X -> 대신 삼항 연산자 사용
          modal == true ? <Modal/> : null
        }
    </div>
  );
}

// 1. html/css로 디자인 완성
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;