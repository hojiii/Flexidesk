import React from 'react';
import {
  StBackground,
  StFont,
  StGradationFont,
  StOverall,
  StSmallFont,
  StSpaceDiv,
  StSpacePagePhoto,
} from './WelcomeStyled';

function Welcome5() {
  return (
    <>
      <StBackground background="#fff" height="3030px">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StGradationFont>
            이제, 새로운 Flexidesk를 <br /> 시작할 시간입니다.
          </StGradationFont>
        </div>

        <StOverall>
          <div>
            <StSpaceDiv>
              <StSmallFont
                color="#ACDAD8"
                weight="700"
                align="start"
                width="100%"
              >
                스페이스
              </StSmallFont>
              <StFont align="start">업무 공간 이동</StFont>
              <StSmallFont align="start" width="100%">
                회사내에서도 나에게 맞는 공간을 찾아봐요
              </StSmallFont>

              <StSpacePagePhoto src="img/page1.png" alt="page1" />
            </StSpaceDiv>

            <StSpaceDiv>
              <StSmallFont
                color="#ACDAD8"
                weight="700"
                align="start"
                width="100%"
              >
                회의실 예약
              </StSmallFont>
              <StFont align="start" width="100%">
                간편해진 회의실 예약
              </StFont>
              <StSmallFont align="start" width="100%">
                겹치는 시간은 피하고, 가능한 시간은 찾아줘요
              </StSmallFont>
              <StSpacePagePhoto src="img/page2.png" alt="page2" />
            </StSpaceDiv>

            <StSpaceDiv>
              <StSmallFont
                color="#ACDAD8"
                weight="700"
                align="start"
                width="100%"
              >
                스케줄
              </StSmallFont>
              <StFont align="start">내 스케줄 관리도 한번에</StFont>
              <StSmallFont align="start" width="100%">
                근무 일정과 연동되는 스케줄
              </StSmallFont>
              <StSpacePagePhoto src="img/page3.png" alt="page3" />
            </StSpaceDiv>
          </div>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome5;
