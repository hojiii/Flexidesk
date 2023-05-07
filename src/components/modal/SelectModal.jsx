import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiChevronDown } from 'react-icons/hi2';
import { __patchAllManagement } from '../../redux/modules/allManagementSlice';
import {
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
} from '../../pages/user/UserStyled';
import SubMintBtn from '../button/SubMintBtn';
import MainMintBtn from '../button/MainMintBtn';
import Text from '../Text';
import { StModal, StModalFullBackground } from '../Modal';
import styled from 'styled-components';

const SelectModal = ({ setIsModal, role, userId }) => {
  const choose = e => {
    setFav(e.target.value);
    setList(false);
  };

  const [list, setList] = useState(false);
  const [fav, setFav] = useState(role);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModal(false);
  };

  const onPatchButtonHandler = () => {
    setIsModal(false);
    dispatch(__patchAllManagement({ userId, role: fav, updateRole: true }));
  };

  return (
    <StModalFullBackground>
      <StModal>
        <StModalSubTitle width="65px">권한수정</StModalSubTitle> <br />
        <DropdownMenu>
          <DropdownButton onClick={e => setList(pre => !pre)}>
            {fav}
            <HiChevronDown />
          </DropdownButton>
          {list ? (
            <DropdownContent>
              <DropdownItem onClick={choose} value="MANAGER">
                MANAGER
              </DropdownItem>

              <DropdownItem
                onClick={choose}
                value="USER"
                borderRadius="0 0 8px 8px"
              >
                USER
              </DropdownItem>
            </DropdownContent>
          ) : null}
        </DropdownMenu>
        <SubMintBtn
          onClick={onPatchButtonHandler}
          position="absolute"
          w="80px"
          h="35px"
          left="18px"
          top="121px"
          pd="4px 10px"
        >
          수정하기
        </SubMintBtn>
        <MainMintBtn
          onClick={closeModal}
          position="absolute"
          w="79px"
          h="35px"
          left="100px"
          top="121px"
          pd="4px 10px"
        >
          <Text shape="T14_700_17" color="var(--white)">
            닫기
          </Text>
        </MainMintBtn>
      </StModal>
    </StModalFullBackground>
  );
};

export default SelectModal;

export const StModalSubTitle = styled.div`
  position: absolute;
  width: ${props => props.width || '52px'};
  height: 17px;
  left: 16px;
  top: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--darkgrey);
`;
