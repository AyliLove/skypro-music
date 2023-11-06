import styled from 'styled-components'

export const FilterItem = styled.li`
  color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    color: #B672FF;
    text-decoration-line: underline;
  }
`

export const FilterList = styled.ul`
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
    background-color: #4B4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 2px;
  }
`
export const FilterBox = styled.div`
  padding: 34px;
  border-radius: 12px;
  background: #313131;
  width: 248px;
  height: 305px;
  position: absolute;
  top: 50px;
  left: 0px;
`
export const FilterButtonBox = styled.div`
  position: relative;
`
export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-color: ${props => props.$props ? "#ad61ff" : "#ffffff"};
  border-radius: 60px;
  padding: 6px 20px;
  color: ${props => props.$props ? "#ad61ff" : "#ffffff"};
  cursor: pointer;
  background-color: transparent;
  margin-right: 10px;
`





