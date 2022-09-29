import {useNavigate} from 'react-router-dom';
import database,{targetId} from "../DB";
import {useState} from 'react';





function Main() {
 let navigate = useNavigate();
 const {board1} = database();
 let {tar} = targetId();
 let [condition,setCondition] = useState('모두보기');

    return (
    <div>
     
      <section className='filter-listbox'>
        <ul className='category'>
          <li className='category-item' onClick={ () => {
            setCondition('인기');
          }}>인기</li>
          <li className='category-item' onClick={() => {
            setCondition('프론트엔드');
          }}>프론트엔드</li>
          <li className='category-item' onClick={() => {
            setCondition('백엔드');
          }}>백엔드</li>
          <li className='category-item' onClick={() => {
             setCondition('기타');
          }}>기타</li>
          <li className='category-item' onClick={() => {
            setCondition('모두보기');
          }}>모두보기</li>
        </ul>
      </section>
      <div className ='main_wrap'>
        <ul class = 'teamList'>
           
          {board1.map((data, i) => { 
            if (condition == '모두보기') {
              return(
                <div class ="teamItem teamItem_open">
                  <li>
                    <div class="teamItem_schedule">
                      <button onClick={ () =>
                        board1.map((deletedata, j) => {
                          if(deletedata.id == data.id) {
                            board1.splice(i,1)
                          }
                        },  navigate("/"))
                        
                      }>삭제</button>
                      
                      <p class="teamItem_schetitle">시작 예정일 |</p>
                      <p>{board1[i].start}</p>
                    </div>
                    
                    <h1 class = "teamItem_name"><span onClick={ ()=> {
                      tar.tar = board1[i].id;
                        navigate("/Teamdetail")
                      }   }> {board1[i].title}</span></h1>
                    <ul class = "teamItem_hashtag">
                      <li>
                        "#"
                        <br></br>
                        "프로젝트"
            
                      </li>
                      <li>
                        "#"
                        <br></br>
                        "오프라인"
                      </li>
                      <li>
                        "#"
                        <br></br>
                        "10명"
                      </li>
                      <li>
                        "#"
                        <br></br>
                        "6개월"
                      </li>
                        
                    </ul>
                    <section class="teamItem_info">
                      <div class="user_box">
                        <div class="userName">{board1[i].userName}</div>
                      </div>
                      
                      
                    </section>
                  </li>
                  
                </div>)
              
            } else {
              if(condition == data.sep) {
                return(
                  <div class ="teamItem teamItem_open">
                    <li>
                      <div class="teamItem_schedule">
                        <button onClick={ () =>
                          board1.map((deletedata, j) => {
                            if(deletedata.id == data.id) {
                              board1.splice(i,1)
                            }
                          },  navigate("/"))
                          
                        }>삭제</button>
                        
                        <p class="teamItem_schetitle">시작 예정일 |</p>
                        <p>{board1[i].start}</p>
                      </div>
                      
                      <h1 class = "teamItem_name"><span onClick={ ()=> {
                        tar.tar = board1[i].id;
                          navigate("/Teamdetail")
                        }   }> {board1[i].title}</span></h1>
                      <ul class = "teamItem_hashtag">
                        <li>
                          "#"
                          <br></br>
                          "프로젝트"
              
                        </li>
                        <li>
                          "#"
                          <br></br>
                          "오프라인"
                        </li>
                        <li>
                          "#"
                          <br></br>
                          "10명"
                        </li>
                        <li>
                          "#"
                          <br></br>
                          "6개월"
                        </li>
                          
                      </ul>
                      <section class="teamItem_info">
                        <div class="user_box">
                          <div class="userName">{board1[i].userName}</div>
                        </div>
                        
                        
                      </section>
                    </li>
                    
                  </div>)
              }else {

              }
            }
            
            
            
            
            
            
        
          })}
            
        
          
          
        </ul>
      </div>
      </div>
    )
}

export default Main;