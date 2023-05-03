import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceBoxItem from './SpaceBoxItem';
import SpaceMrItem from './SpaceMrItem';
import SpaceMultiBoxItem from './SpaceMultiBoxItem';

function SpaceDropItem({
  space,
  isClicked,
  onClickMoveUserHandler,
  onClickMoveMultiHandler,
}) {
  const navi = useNavigate();

  return (
    <>
      {/* 박스 */}
      {space?.map(
        item =>
          item.boxList?.length > 0 &&
          item.boxList.map(box => (
            <SpaceBoxItem
              key={box.boxId}
              box={box}
              onClickMoveUserHandler={onClickMoveUserHandler}
              isClicked={isClicked}
            />
          )),
      )}
      {/* 회의실 */}
      {space?.map(
        item =>
          item.mrList?.length > 0 &&
          item.mrList.map(mr => (
            <SpaceMrItem key={mr.mrId} mr={mr} navi={navi} />
          )),
      )}
      {/* 공용공간 */}
      {space?.map(
        item =>
          item.multiBoxList?.length > 0 &&
          item.multiBoxList.map(multiBox => (
            <SpaceMultiBoxItem
              key={multiBox.multiBoxId}
              multiBox={multiBox}
              onClickMoveUserHandler={onClickMoveMultiHandler}
              isClicked={isClicked}
            />
          )),
      )}
    </>
  );
}

export default SpaceDropItem;
