import styled from 'styled-components'

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 100%;
 border: 1px solid gray;
 height: 400px
 padding: 20px;
 border-radius: 20px;

 button{
     border-radius: 0 0 20px 20px;
     background-color: darkblue;
 }
 img{
     height: 250px;
     object-fit: cover;
     border-radius: 20px 20px 0 0;
 }
 div{
     font-family: Ariel, Helvetica, sans-serif;
     padding: 10px;
     height: 100%;
 }
`;