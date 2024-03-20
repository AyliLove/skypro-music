import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

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

export const MainSideBarDiv  = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const SideBarPersonalDiv  = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
export const SideBarPersonalName  = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
export const SideBarIconDiv  = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`
export const SideBarBlockDiv  = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const SideBarListDiv  = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const SideBarItemDiv  = styled.div`
  width: 250px;
  height: 150px;
  margin-bottom: 30px;
`
export const SideBarItemSkeletonDiv = styled.div`
  width: 250px;
  height: 150px;
  background: #313131;
  margin-bottom: 30px;
  animation: ${SkeletonAnim} 3s linear infinite both;
`

export const RouteSideBarLink  = styled(Link)`
  width: 100%;
  height: 100%;
`
export const SideBarImg  = styled.img`
  width: 100%;
  height: auto;
`
