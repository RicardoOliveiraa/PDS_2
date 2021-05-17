import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Body = styled.div`
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
`;

export const Block = styled.div`
  display: flex;
  width:100%;
  justify-content:center;
  margin: 20px 0;
`;
export const BlockColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  
`;


export const ContainerManage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 80%;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  margin-top: 40px;
  @media(max-width: 400px) {
    padding: 60px 20px 40px;
  }
}
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Manage = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

export const MyLabel = styled.label`
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;


export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const InputManage = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  width: 100%;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  margin-right: 20px;
`;
export const TextArea = styled.textarea`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 80px;
  width: 100%;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const InputFile = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 0 10px 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 400px;
`;
export const Button = styled.button`
background: #e50914;

  border-radius: 4px;
  border: 0;
  color: white;
  height: 60px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  text-align:left;
  position: absolute
`;


export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;




