
import React from 'react'
import avatar from './images//k5O0-jonas.jpeg'
function App() {
  return (
    <div className='w-[450px] m-[40px] border-4 border-neutral-800'>
          <Avatar />
          <div>
              <Intro title="Jonas Schmedtmann"
                  text="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
              />
          </div>
          <SkillSet />
    </div>
  )
}

function Avatar() {
    return <img src={avatar}  alt="" />
}

function Intro(props) {
    return (
        <div className='px-[30px] pb-4'>
            <h1 className='mt-[20px] mb-2 text-[30px] font-[700]'>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

function SkillSet(){
    return (
        <div className='flex flex-wrap gap-[8px] pt-[10px] px-[32px] pb-[32px] font-bold'>
            <Skill skill='React' emoji='💪' color='blue'/>
            <Skill skill='HTML+CSS' emoji='💪' color='orange'/>
            <Skill skill='Javascript' emoji='💪' color='yellow'/>
            <Skill skill='Tailwind' emoji='👶' color='orangered'/>
      </div>
  )
}
function Skill(props) {
    return (
        <div className='flex  px-[30px] rounded-[5px]' style={{ background: props.color}}>
            <span className="skill">{props.skill}</span>
            <span className="emoji">{props.emoji}</span>
        </div>
    )
}
export default App



