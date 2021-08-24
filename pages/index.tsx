import React from 'react'
import Head from '../components/Head'
import styled from 'styled-components'

export default function IndexPage() {
  return (
    <>
      <Head title="はらぺこオレンジとチョコレート" />
      <Wrapper>はらぺこオレンジとチョコレート</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  font-size: 42px;
`
