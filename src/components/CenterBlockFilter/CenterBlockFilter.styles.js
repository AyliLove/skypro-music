import styled from 'styled-components'

export const CenterBlockFilterDiv = styled.div`
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
  margin-bottom: 51px;
`
export const FilterTitleDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const FilterButtonWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`
export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background: transparent;
  color: #fff;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  border-color: ${(props) => (props.$isActive ? '#d9b6ff' : '#fff')};
  color: ${(props) => (props.$isActive ? '#d9b6ff' : '#fff')};
`
export const FilterBoxDiv = styled.div`
  padding: 34px;
  border-radius: 12px;
  background: #313131;
  width: 248px;
  height: 305px;
  position: absolute;
  top: 50px;
  left: 0px;
`
export const FilterListUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: scroll;
  overflow-y: scroll;
  width: 180px;
  height: 232px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 2px;
  }
`
export const FilterItem = styled.li`
  font-family: StratosSkyeng;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`