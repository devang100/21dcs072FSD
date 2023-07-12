import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'

const About = () => {
  const a =useContext(NoteContext)
  useEffect(() => {
    a.update();
    //react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      This is About {a.state.name} and He is in class {a.state.class}
    </div>
  )
}

export default About
