import React from 'react'
import styled from 'styled-components'
import updateIcon from '../images/update-icon.svg'

const StyledForm = styled.form`
  padding: 30px;
  display: grid;
  grid-gap: 10px;
  border-radius: 20px;
  background-color: #fad390;
`

export function Form(props) {
  return (
    <StyledForm>
      {props.children}
    </StyledForm>
  )
}

const StyledInput = styled.input`
  width: 360px;
  height: 40px;
  padding: 0px 10px;
  border: none;
  border-radius: 10px;
  font-family: 'Blinker';
  font-size: 16px;
  color: #1e272e;
  background-color: #ffffc1;
  &::placeholder {
    color: #464f57;
  }
`

export function TextInput(props) {
  return (
    <StyledInput
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export function EmailInput(props) {
  return (
    <StyledInput
      type='email'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export function PasswordInput(props) {
  return (
    <StyledInput
      type='password'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

const StyledFormSubmit = styled.input`
  width: 360px;
  height: 60px;
  background-color: #e84118;
  border: none;
  border-radius: 30px;
  font-family: 'Blinker';
  font-size: 20px;
  color: #f5f6fa;
  cursor: pointer;
`

export function FormSubmit(props) {
  return (
    <StyledFormSubmit
      type='submit'
      value={props.value}
      onClick={props.onClick}
    />
  )
}

const StyledInfoInput = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  input {
    width: 300px;
    height: 40px;
    padding: 0px 10px;
    border: none;
    border-radius: 10px;
    font-family: 'Blinker';
    font-size: 16px;
    color: #1e272e;
    background-color: #ffffc1;
  }
  div {
    width: 40px;
    height: 40px;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 20px;
    background-color: #e84118;
    cursor: pointer;
  }
  img {
    width: 20px;
    height: auto;
  }
`

export function InfoInput(props) {
  return (
    <StyledInfoInput>
      <input
        type='text'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <div onClick={props.onClick}>
        <img src={updateIcon} alt='Ícone de atualização'/>
      </div>
    </StyledInfoInput>
  )
}