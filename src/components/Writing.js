import React, { useState } from "react";
import database from "../DB";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";





function Writing() {
    const {board1} = database();
    let navigate = useNavigate();
    return (
        <div>
            
            <div className="writingbox">
                <div className="titlebox">
                  <input className="titlewriting" type="text" placeholder="프로젝트 제목을 쓰시오" id="title"></input>
                  
               
                </div>
                <div className="detailbox">
                    <div className="detail_input_outer">
                       <input className="detail_input" type="text" placeholder="모집인원" id="perso"></input>
                       <input className="detail_input" type="text" placeholder="프젝진행방식" id="way"></input>
                    
                    </div>
                    <div className="detail_input_outer">
                       <input className="detail_input" type="text" placeholder="지역" id="region"></input>
                       <input className="detail_input" type="text" placeholder="기간" id="period"></input>

                    </div>
                    <div className="detail_input_outer">
                       <input className="detail_input" type="text" placeholder="시작예정일" id="start"></input>
                       <input className="detail_input" type="text" placeholder="유저네임" id="name"></input>

                    </div>

                    <div className="detail_input_outer">
                       <input className="detail_input" type="text" placeholder="분류(프론트엔드,백엔드,기타)" id="sep"></input>
                       <input className="detail_input" type="text" placeholder="해쉬태그 짧은 글" id="hash"></input>
                    </div>

                    
                   
                    
                </div>
                <div className="intro_box">
                        <textarea className="intro_textarea" placeholder="프로젝트 소개를 쓰세요" id="intro"></textarea>
                </div>
                <div className="intro_box">
                        <textarea className="intro_textarea" placeholder="진행방식을 쓰세요" id="progress"></textarea>
                </div>
                
                <Button variant="secondary"  style={{height:'80px', width:'200px', fontSize:'30px'}} onClick={()=>{{Getvalue()}
                    navigate("/")}} >저장</Button>{' '}
                
                
            </div>
            
        
       
        </div>
        
    );

    function Getvalue() {
        var today = new Date();
        var milseconds = ('0' + today.getMilliseconds());
        var writetitle = document.getElementById('title').value;
        var writeperso = document.getElementById('perso').value;
        var writeway = document.getElementById('way').value;
        var writeregion = document.getElementById('region').value;
        var writeperiod = document.getElementById('period').value;
        var writestart = document.getElementById('start').value;
        var writeintro = document.getElementById('intro').value;
        var writeprogress = document.getElementById('progress').value;
        var writename = document.getElementById('name').value;
        var writesep = document.getElementById('sep').value;
        var writehash = document.getElementById('hash').value;
        
        board1.push({
            id : milseconds,
            title: writetitle, 
            content:writeintro,
            periods: writeperiod,
            personnel:writeperso, 
            way: writeway, 
            start: writestart,
            progress: writeprogress,
            country: writeregion,
            userName: writename,
            sep: writesep,
            hash: writehash
            
        })
    }
}
//board1.push   oooo
export default Writing;