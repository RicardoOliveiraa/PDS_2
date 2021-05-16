import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: block;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  border-radius: 20px 20px;
`;

export const Manage = styled.button`
  border: 3px solid #808080;
  border-radius: 15px 15px;
  color: #808080;
  background-color: black;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 2px 2px;
  margin-top: 50px;
  cursor: pointer;
  &:hover{
    border: 3px solid white;
    color: white;
    opacity: 1;
  }
`;
export const Delete = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding-bottom: 175px;
  text-align: center;
  font-size: 16px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    color: red;
    opacity: 1;
  }
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;