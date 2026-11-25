import { RiCodeSLine } from "react-icons/ri";
import { IoOpenOutline } from "react-icons/io5";
import ProjectPreview from "./projectPreview";

interface Achievement {
  achievement: {
    name: string;
    description: string;
    type: string;
    technologie: string;
    link: string;
    sourceCode: string;
    frame: string;
    status: string;
    previewImage?: string;
  };
}

export default function AchievementCard({ achievement }: Achievement) {
  return (
    <article className="achievement_project_card">
      <ProjectPreview
        name={achievement.name}
        previewImage={achievement.previewImage}
      />
      <div className="achievement_project_heading">
        <div className="achievement_project_title">
          <h3>{achievement.name}</h3>
          <span className="achievement_type">{achievement.type}</span>
        </div>
        <span className="achievement_status">{achievement.status}</span>
      </div>
      <p className="achievement_description">{achievement.description}</p>
      <div className="achievement_project_links">
        {achievement.link.length > 1 && achievement.link !== "https://github.com/" ? (
          <a href={achievement.link} target="_blank" rel="noreferrer">
            <IoOpenOutline aria-hidden="true" /> Site web
          </a>
        ) : (
          <span><IoOpenOutline aria-hidden="true" /> Site indisponible</span>
        )}
        {achievement.sourceCode.length > 1 && achievement.sourceCode !== "https://github.com/" && (
          <a href={achievement.sourceCode} target="_blank" rel="noreferrer">
            <RiCodeSLine aria-hidden="true" /> Code source
          </a>
        )}
      </div>
      <div className="achievement_project_meta">
        <span>{achievement.technologie || achievement.type}</span>
        <span>{achievement.frame}</span>
      </div>
    </article>
  );
}
