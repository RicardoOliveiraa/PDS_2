import React from 'react';

import { Body, Container, ContainerManage, Error, Base, Manage, Title, Button, Text, TextSmall, Link, Input, InputFile, Submit, MyLabel, TextArea, InputManage, BlockColumn, Block } from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Body = function FormBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.BlockColumn = function FormBlockColumn({ children, ...restProps }) {
  return <BlockColumn {...restProps}>{children}</BlockColumn>;
};

Form.Block = function FormBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>;
};

Form.ContainerManage = function FormContainerManage({ children, ...restProps }) {
  return <ContainerManage {...restProps}>{children}
  </ContainerManage>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Manage = function FormManage({ children, ...restProps }) {
  return <Manage {...restProps}>{children}</Manage>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextArea = function FormTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.MyLabel = function FormMyLabel({ children, ...restProps }) {
  return <MyLabel {...restProps}>{children}</MyLabel>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.InputManage = function FormInputManage({ children, ...restProps }) {
  return <InputManage {...restProps}>{children}</InputManage>;
};

Form.InputFile = function FormInput({ children, ...restProps }) {
  return <InputFile type="file"  {...restProps}>{children}</InputFile>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
