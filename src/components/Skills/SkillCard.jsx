import "./Skills.css";
export default function SkillCard({skillName, skillImage}) {
  return (
    <div className="skill">
    <img src={skillImage} alt={skillName} loading="lazy"/>
    <p>{skillName}</p>
    </div>
  )
}
