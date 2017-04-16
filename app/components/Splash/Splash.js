import React from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { LoginButton } from 'react-native-fbsdk'

const { height, width } = Dimensions.get('window')

export default function Splash (props) {
    return (
      <StyledView>
       <StyledImage
        source = {require('../../images/basketball.png')} />
        <StyledText>Already Have an Account?
        </StyledText>
        <StyledLoginButton
        onLoginFinished = {props.onLoginFinished}
        />
        <StyledText color = 'tomato'> Don't Worry We never post anything!</StyledText>
      </StyledView>
    );
}

const StyledLoginButton = styled(LoginButton)`
  height: 30;
  width: 220;
  margin: 15;
`
const StyledText = styled.Text`
  color: ${props => props.color ? props.color : 'black'}
`
const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`
const StyledImage = styled.Image`
  height: ${height * 0.4 > 300 ? 200 : height * 0.25};
  resize-mode: contain;
`

