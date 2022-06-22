import styled from 'styled-components';
export const MakeItGrid = styled.div`
display: grid;
grid-template-columns: repeat(3,25%);
gap:10%;
`
export const Header = styled.div`
font-weight: 600;
font-size:80%;
padding-left: 2%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width:80%;
text-align:start;
`
export const BlogWrapper=styled.div`
width: 100%;
img{
    width: 100%;
    border-radius: 5%;
}
button{
background-color:red;
padding:2%;
border:none;
color:white;
border-radius:7%;
margin-top:2%;
margin-left:-73%;
}
`
export const Date = styled.div`
font-size:70%;
padding-left: 2%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width:60%;
text-align:start;
margin-top:4%;
margin-bottom: 3%;

`
export const Description =styled.div`
font-size:70%;
padding-left: 2%;
color:gray;
font-weight: 200;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width:90%;
text-align:start;
`