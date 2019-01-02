import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding:0;
  display:flex;
  flex-direction:column;
`;

export const Top = styled.div`
  width: 100%;
  margin: 0;
  /* padding:0 calc(100% - 100px); */
  padding:0 15%;
  line-height:1;
  background:white;
  /* position: fixed; */
  top:0;
  flex:0 0 auto;
`;

export const Bottom = styled.div`
  width: 100%;
  margin: 0;
  padding:0;
  line-height:1.42857143;
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
  background:white;
  min-height:300px;
  padding:0 15%;
  flex:5 0 auto;
`;

export const Left = styled.div`
  margin: 0;
  padding:0;
  line-height:1.42857143;
  background:red;
  flex:1 0 auto;
`;

export const Right = styled.div`
  margin: 0;
  padding:0;
  line-height:1.42857143;
  background:yellow;
  flex:3 0 auto;
`;
export default Container;
