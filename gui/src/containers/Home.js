import React from 'react';
import styled from 'styled-components'

import Header from '../components/Home/Header'
import ModelTab from '../components/Home/ModelTab'

const Container = styled.div`
  width: 600px;
  height: 800px;
  margin: 200px auto;
  border: 1px solid #ccc;
`

function Home(props) {
  return <Container>
    <Header></Header>
    <ModelTab></ModelTab>
  </Container>;
}

export default Home;
