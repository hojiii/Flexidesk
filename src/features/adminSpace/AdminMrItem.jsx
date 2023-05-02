import React from 'react';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useDeleteMrBox } from '../../hooks/adminSpace/useDeleteMrBox';
import { useEditMrBox } from '../../hooks/adminSpace/useEditMrBox';
import { useMrBoxDAD } from '../../hooks/adminSpace/useMrBoxDAD';

function AdminMrItem({ mr, mrList, boardEl, spaceId }) {
  const { submitDelete } = useDeleteMrBox();

  const {
    submitEdit,
    isEditMr,
    changeEditModeHandler,
    editMrName,
    changeNameHandler,
  } = useEditMrBox(mr, spaceId);

  const { elRef, mrMouseDownHandler } = useMrBoxDAD(spaceId, boardEl, mrList);

  return (
    <>
      {!isEditMr ? (
        <StBox
          key={mr.mrId}
          ref={el => (elRef.current[mr.mrId] = el)}
          onMouseDown={e => mrMouseDownHandler(e, mr.mrId)}
          transformValue={`translate(${mr.x}px, ${mr.y}px)`}
        >
          <div>{mr.mrName}</div>
          <StBtnBox>
            <BoxBtn onClick={() => changeEditModeHandler()}>수정</BoxBtn>
            <BoxSubBtn
              onClick={() => {
                submitDelete(mr.mrId, spaceId);
              }}
            >
              삭제
            </BoxSubBtn>
          </StBtnBox>
        </StBox>
      ) : (
        <StBox key={mr.mrId} transformValue={`translate(${mr.x}px, ${mr.y}px)`}>
          <BoxInput
            maxLength={6}
            type="text"
            value={editMrName}
            onChange={e => {
              changeNameHandler(e.target.value);
            }}
          />
          <StBtnBox>
            <BoxBtn onClick={submitEdit}>완료</BoxBtn>
            <BoxSubBtn onClick={() => changeEditModeHandler()}>취소</BoxSubBtn>
          </StBtnBox>
        </StBox>
      )}
    </>
  );
}

export default AdminMrItem;
