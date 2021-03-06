import React from 'react';
import styled from 'styled-components/native';
import style from '../utils/styleUtils';

const Container = styled.TouchableOpacity`
    width: 100%;
    background : ${style.subPink};
    justify-content : center;
    align-items : center;
    padding-top: 20px ;
    padding-bottom: 40px;
    
`

const Label = styled.Text`
    font-size : 16px;
    font-weight : bold;
    color : ${style.darkPink}
`

function Button(props) {
    return(
        <Container onPress={ props.onPress }>
            <Label>{props.children}</Label>
        </Container>

    )

}

export default Button;
