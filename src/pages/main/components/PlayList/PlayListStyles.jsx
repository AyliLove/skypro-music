import styled, { keyframes } from 'styled-components'
import { Link } from "react-router-dom";


const SkeletonAnim = keyframes`
    0%   {
        background-color: #313131;
    }
    50%  {
        background-color: rgb(167, 167, 167);
    }
    100%  {
        background-color: #313131;
    }
`;

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const SidebarLink = styled(Link)`
  width: 100%;
  height: 100%;
`
export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SidebarItemSkeleton = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 2px;
  background-color: aquamarine;
  animation: ${SkeletonAnim} 3s linear infinite both;
  &:not(:last-child) {
    margin-bottom: 30px;
  } 
`
