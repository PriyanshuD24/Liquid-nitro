import React from 'react'
import MeetTeam from './MeetTeam'
// import CustomNewCard from '../../components/CustomNewCard'
import CustomCard from '../../components/customCard'

const Int_NL02 = ({setScene}) => {
  return (
    <CustomCard setScene={setScene} className={"overflow-y-scroll z-10 theme-scroll"}>
    <MeetTeam/>
    </CustomCard>
  )
}

export default Int_NL02