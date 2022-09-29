import React, { useState } from "react";
import database, {targetId} from "../DB.js";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";





function Teamdetail() {
    const {board1} = database();
    let navigate = useNavigate();
    let {tar}= targetId();
    console.log(tar)
    return (
        
        <div>
            {board1.map((data, i) => {  
                  if(data.id == tar.tar) {
                    return (
                    <div className="studyContent_wrapper">
                        <section className="studyContent_postHeader">
                            <div className="studyContent_title">{data.title}</div>
                            <div className="studyContent_user">
                                <div className="studyContent_username">{data.userName}</div>
                            </div>
                            <ul className="studyInfo_grid">
                                <li className="studyInfo_contentwrap_detail">
                                    <span class="studyInfo_title">모집 인원</span>
                                    <span class="studyInfo_content">{data.personnel}</span>
                                </li>
                                <li className="studyInfo_contentwrap_detail">
                                    <span class="studyInfo_title">지역</span>
                                    <span class="studyInfo_content">{data.area}</span>
                                </li>
                                <li className="studyInfo_contentwrap_detail">
                                    <span class="studyInfo_title">시작예정일</span>
                                    <span class="studyInfo_content">{data.start}</span>
                                </li>
                                <li className="studyInfo_contentwrap_detail">
                                    <span class="studyInfo_title">진행방식</span>
                                    <span class="studyInfo_content">{data.way}</span>
                                </li>
                                <li className="studyInfo_contentwrap_detail">
                                    <span class="studyInfo_title">기간</span>
                                    <span class="studyInfo_content">{data.date}</span>
                                </li>
                            </ul>
                        </section>
                        <div className="studyContent_post">
                            <h2 className="studyContent_postinfo">프로젝트 소개</h2>
                            <div className="studyContent_postcontent">{data.content}</div>
                        </div>
                        <div className="studyContent_post">
                            <h2 className="studyContent_postinfo">진행방향</h2>
                            <div className="studyContent_postcontent">{data.progress}</div>
                        </div>
                    
                    
                        
                        
                       
                        
                    
                
                    
                    
                    
                </div>
                    )}
                }
            )}
                


           
            
            
        
       
        </div>
    )}
        
 

    export default Teamdetail;
