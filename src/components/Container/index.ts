import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding:0;
  font-family:Arial;
`;

export const Body = styled.div`
  margin: 0;
  padding:0;
  display:flex;
  flex-direction:column;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
`;

export const Top = styled.div`
/* width:100%; */
  margin: 0;
  /* padding:0 calc(100% - 100px); */
  padding:0 10%;
  /* line-height:60px; */
  background:white;
  /* position: fixed; */
  /* height:60px; */
`;

export const Bottom = styled.div`
  /* width: 100%; */
  margin: 0;
  padding:0;
  line-height:50px;
  background:#222;
  color: white;
  text-align:center;
  flex:0 0 auto;
  
`;

export const Center = styled.div`
  margin: 0;
  padding:0;
  display:flex;
  flex-direction:row;
  margin-top:20px;
  min-height:300px;
  flex:5 0 auto;
  width:80%;
  margin-left:10%;
  position:relative;
`;

export const Left = styled.div`
  margin: 0;
  padding:0;
  line-height:1.42857143;
  width:300px;
  /* background:white; */
  /* flex:1 1 auto; */
`;

export const Right = styled.div`
  margin: 20px 0;
  padding:0;
  line-height:1.42857143;
  /* background:white; */
  flex:1 1 auto;
`;
export default Container;
