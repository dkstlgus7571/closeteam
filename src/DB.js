import create from 'zustand';
import {useState} from 'react';



const database = create(() => ({
    board1 : [{id:"0",
    title:"[UI/UX] 취업용 포트폴리오 만드실 디자이너 한 분 모집합니다.", 
    content:"안녕하세요! 취업용 포트폴리오를 위한 프로젝트에 함께 하실 디자이너 한 분을 모시고자 합니다. 프로젝트 주제는 개발자를 위한 커뮤니티로 생각하고 있으며, 구현 예정인 기능에 대해 논의가 진행되고 있는 상태입니다!",
    userName:"이정현", date:"2개월",
    hash:"hash", personnel:"2명", 
    sep:"프론트엔드", way:"온라인", progress:"현재 프로젝트를 함께 진행하는 모든 인원은 취업 준비 중으로, 본 프로젝트에 애정을 갖고 진행해주실 수 있는 분을 선호합니다! 많은 관심 부탁드립니다!😊",
    area:"아산", place:"place", start: "2022.11.04" },

    {
    id:"1",
    title:"안양지역, Kotlin 같이 공부하실 분 모집", 
    content:"Kotlin언어를 시작으로, Ktor, Exposed 등을 공부하려는 스터디입니다. 시작은 Kotlin만 약 1~2달정도 생각하고 있고, 이후에 Ktor, Exposed 배워보려고 합니다. 모집은 10.3일까지 생각합니다. 그럼.",
    userName:"이민준", date:"6개월",
    hash:"hash", personnel:"4명", 
    sep:"프론트엔드", way:"오프라인", progress:"일주일에 1회 offline(Max 2시간정도 생각)으로 모이고, 그외에는 텔레그램이나 슬랙으로 서로 교류하는 정도로.",
    area:"천안", place:"place", start: "2022.11.22"
    },

    {
        id:"2",
        title:"태블릿펜을 통한 그림심리검사앱", 
        content:"안녕하세요 세상에 필요한 서비스는 살아 남는다고 믿는 기획자입니다. 학부에서는 디자인을 전공했고, 그림심리검사 관련 10년째 현업에 종사하고 있어요. 1948년에 개발된 HTP를 비롯해 모든 그림심리검사는 병원, 학교 등 다양한 장면에서 사용되고 있지만 늘 과학적이지 못하다는 지적을 받고 있습니다. 저는 기술을 통해 이 문제를 해결하고자 합니다. MBTI의 유행으로도 알 수 있듯이 정신건강에 대한 관심이 꾸준히 높아지고 있기 때문에 재미있는 프로젝트가 될 거라고 생각하고요. 출시할 경우 초기 사용자를 유치할 채널을 확보하고 있고, 그리는 과정에서 입력된 다양한 데이터를 통해 언어의 장벽을 넘을 수 있기 때문에 국내외 유저를 아우를 수 있습니다. 나아가 심리 관련 몇 가지 서비스를 연속성 있게 구상하고 있습니다.플로우와 화면구성이 된 아이디어도 있지만 그림심리검사앱은 아이디어 구체화가 필요한 단계입니다. 초기부터 팀원들과 함께 발전시키고 이익도 쉐어하길 바라고요, 무엇보다 전문성을 기본에 두고, 과정이 재밌어야 한다고 생각합니다!",
        userName:"정혜연", date:"6개월",
        hash:"hash", personnel:"5명", 
        sep:"백엔드", way:"오프라인", progress:"주1회 정기모임을 지향하되 상황에 따라 융통성 있게 운영해요.",
        area:"천안", place:"place", start: "2022.11.30"
    },

    {
        id:"3",
        title:"빅데이터 동아리 Boaz 사이트 개편 프로젝트에서 디자이너를 구합니다!", 
        content:"동아리 웹사이트 구축 관련해서 같이 프로젝트를 하실 디자이너 분을 찾고 있습니다. 해당 사이트는 베타버전까지 올라간 상태에 있으며 12월에 실운영을 할 예정에 있습니다. 베타 버전까지 올라가져 있지만 디자이너 없이 개발자들 끼리 개발이 되어 UI/UX 수정을 위해 디자이너가 필요한 상황입니다. 저희가 생각하고 있는 디자이너의 실력은 프로젝트 1개 이상 해보신분을 생각하고 있습니다. 프로젝트를 같이 하고 있는 팀원들에 대해 간략하게 소개드리면 대학생 2명과 직장인 4명(프론트 3, 백2, 기획1)으로 구성되어 있습니다.",
        userName:"홍준표", date:"5개월",
        hash:"hash", personnel:"3명", 
        sep:"기타", way:"오프라인", progress:"주2회 정기모임을 지향하되 상황에 따라 융통성 있게 운영해요.",
        area:"서울", place:"place", start: "2022.11.23"
    }

    
   
],

    
    
}))

let targetId = create(() => ({
    tar: {tar:''}
}));






//board1.push
export default database;
export {targetId};



