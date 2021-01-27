import IconCalculator from 'public/frontendmentor/challenge/four-card-feature-section/icon-calculator.svg';
import IconKarma from 'public/frontendmentor/challenge/four-card-feature-section/icon-karma.svg';
import IconSupervisor from 'public/frontendmentor/challenge/four-card-feature-section/icon-supervisor.svg';
import IconTeamBuilder from 'public/frontendmentor/challenge/four-card-feature-section/icon-team-builder.svg';
import style from './style.module.css';

const FourCardFeatureSectionComponent = () => (
  <div className={style.container}>
    <div className={style.header}>
      <h1>
        <span>Reliable, efficient delivery</span>
        <span>Powered by Technology</span>
      </h1>
      <p className={style.description}>
        Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful
      </p>
    </div>
    <div className={style.section}>
      <div className={style.section_item}>
        <p className={style.section_item_title}>Supervisor</p>
        <p className={style.section_item_description}>Monitors activity to identify project roadblocks</p>
        <IconSupervisor />
      </div>
      <div className={style.section_item}>
        <p className={style.section_item_title}>Team Builder</p>
        <p className={style.section_item_description}>Scans our talent network to create the optimal team for your project</p>
        <IconTeamBuilder />
      </div>
      <div className={style.section_item}>
        <p className={style.section_item_title}>Karma</p>
        <p className={style.section_item_description}>Regularly evaluates our talent to ensure quality</p>
        <IconKarma />
      </div>
      <div className={style.section_item}>
        <p className={style.section_item_title}>Calculator</p>
        <p className={style.section_item_description}>Uses data from past projects to provide better delivery estimates</p>
        <IconCalculator />
      </div>
    </div>
  </div>
);

export default FourCardFeatureSectionComponent;