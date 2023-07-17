import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 55% 20%;
  grid-template-rows: 65% 35%;
  width: 500px;
  height: 180px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: rgb(170, 170, 170) 0px 0px 10px 1px;
  overflow: hidden;
  transition: box-shadow 0.2s ease 0s;
  text-align: center;
  margin: 15px;
  cursor: pointer;
`
export const Img = styled.img`
  //width: 100px;
  //height: 100px;
  grid-area: 1 / 1 / span 2 / auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(0.8);
`
