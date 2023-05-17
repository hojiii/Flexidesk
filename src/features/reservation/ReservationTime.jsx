import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  __addReservation,
  __getUserData,
} from '../../redux/modules/reservationSlice';
import { useReservationTime } from '../../hooks/reservation/useReservationTime';

import { cookies } from '../../shared/cookies';
import { Input } from '../../components/Input';
import { Column } from '../../components/Flex';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import {
  StReserTimeButton,
  StReserTimeBox,
  SchContain,
  ScheduleUser,
  ScheduleUsers,
  UserList,
  CheckContainBox,
} from '../../pages/reservation/ReservationAllStyle';
import ReservationCheck from './ReservationCheck';
import { useReservatiionHandler } from '../../hooks/reservation/useReservatiionHandler';

function ReservationTime({ param, selectDay, mrName }) {
  // const [userInfo, setUserInfo] = useState([]);
  // const [userIdInfo, setUserIdInfo] = useState([]);
  // const navi = useNavigate();
  // const userId = cookies.get('userId');

  const {
    userIdInfo,
    setUserIdInfo,
    clickReservation,
    setClickReservation,
    timeList,
    date,
    userData,
    reqDatas,
  } = useReservationTime(param, selectDay);
  const {
    onclickHandler,
    onSelectUserHandler,
    onSubmitHandler,
    onChangeHandler,
    userInfo,
  } = useReservatiionHandler(
    clickReservation,
    setClickReservation,
    userIdInfo,
    setUserIdInfo,
    reqDatas,
    param,
    selectDay,
  );
  // const dispatch = useDispatch()
  // const [clickReservation, setClickReservation] = useState([]);
  // const now = new Date();

  // const date = `${now.getFullYear()}-${(now.getMonth() + 1)
  //   .toString()
  //   .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;
  // const [isCheckOut, setIsCheckOut] = useState('false');
  // let reqData = [];

  // const dataList = () => {
  //   clickReservation.map((_, index) => {
  //     reqData.push({ start: clickReservation[index] });
  //   });
  //   return reqData;
  // };

  // const onclickHandler = e => {
  //   if (clickReservation.find(item => item === e.target.value)) {
  //     setClickReservation(
  //       clickReservation.filter(item => item !== e.target.value),
  //     );
  //   } else {
  //     setClickReservation([...clickReservation, e.target.value]);
  //   }
  //   setIsCheckOut(!isCheckOut);
  // };

  // useEffect(() => {
  //   if (selectDay) {
  //     dispatch(__getReservation({ param, selectDay }));
  //   } else {
  //     dispatch(
  //       __getReservation({
  //         param,
  //         selectDay: date.slice(0, -1),
  //       }),
  //     );
  //   }
  //   setClickReservation([]);
  // }, [selectDay]);

  // const { userData } = useSelector(state => state.reservation);
  // const { reservation } = useSelector(state => state.reservation);
  // const reqDatas = { startList: dataList(), userList: userIdInfo };
  // const { timeList } = reservation;

  return (
    <SchContain width="683px">
      <>
        <div>
          <IconTitle
            gap="0px"
            margin="15px 0px 10px 5px"
            src="time"
            height="20"
          >
            <Text shape="T18_700_22">예약 시간</Text>
          </IconTitle>
          <StReserTimeBox width="95%">
            {timeList?.map(item => (
              <StReserTimeButton
                key={item.start}
                onClick={onclickHandler}
                disabled={item.isCheckOut === true}
                value={
                  selectDay
                    ? `${selectDay}T${item.start}`
                    : `${date}${item.start}`
                }
                isSelected={clickReservation.includes(
                  selectDay
                    ? `${selectDay}T${item.start}`
                    : `${date}${item.start}`,
                )}
              >
                {item.start}
              </StReserTimeButton>
            ))}
          </StReserTimeBox>
        </div>
        <ScheduleUsers>
          <Column>
            <IconTitle
              gap="0px"
              margin="0px 0px 15px -5px"
              src="user"
              height="20px"
            >
              <Text shape="T18_700_22">사원 검색</Text>
            </IconTitle>
            <Input
              w="280px"
              h="40px"
              mg="0px 10px"
              onChange={onChangeHandler}
            />
          </Column>
          <UserList>
            {userData?.map(item => (
              <ScheduleUser
                onClick={() => onSelectUserHandler(item)}
                key={item.userId}
              >
                {item.username}
              </ScheduleUser>
            ))}
          </UserList>
        </ScheduleUsers>
      </>
      <ReservationCheck
        selectDay={selectDay}
        clickReservation={clickReservation}
        userName={userInfo}
        mrName={mrName}
      />
      <CheckContainBox>
        <BlueBtn onClick={onSubmitHandler}>
          <Text color="var(--white)" shape="T16_700">
            예약 완료
          </Text>
        </BlueBtn>
      </CheckContainBox>
    </SchContain>
  );
}

export default ReservationTime;
