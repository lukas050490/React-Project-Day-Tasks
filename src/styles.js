import styled from "styled-components"
import { FcFullTrash, FcCheckmark } from "react-icons/fc"

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.div`
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 10px;

  ul {
    padding-left: 0px;
  }

`

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 30px;
  margin-left: 10px;
  width: 350px;
`

export const Button = styled.button`
   background: #8052ec;
   border-radius: 5px;
   height: 40px;
   border: none;
   width: 115px;
   cursor: pointer;

   color: #ffffff;
   line-height: 2px;
   font-size: 17px;

   &:hover {
    opacity: 0.8;
   }

   &:active {
    opacity: 0.5;
   }
`

export const MapList = styled.div`
  background:${props => props.isFinished ? '#E8FF8B' : '#e4e4e4'};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  margin-top: 60px;
  width: 500px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
  }

`

export const Trash = styled(FcFullTrash)`
  cursor: pointer;
`

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`



