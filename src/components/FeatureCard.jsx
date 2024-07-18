import { styles } from '../style';

export const FeatureCard = ({ icon, title, content }) => (
  <div className={`${styles.flexCenter} p-6 rounded-[20px] mb-6 last:mb-0 feature-card`}>
    <div className={`size-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="size-1/2 object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
);
