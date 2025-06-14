import React, { type ReactNode } from "react";
import style from "./skillBtn.module.scss";
interface SkillBtnProps {
  icon: ReactNode;
  label: string;
}
const SkillBtn: React.FC<SkillBtnProps> = ({ icon, label }) => {
  return (
    <span className={style.skillBtn}>
      {icon}
      {label}
    </span>
  );
};

export default SkillBtn;
