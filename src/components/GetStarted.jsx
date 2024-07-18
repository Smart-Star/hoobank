import { arrowUp } from '../assets';
import { styles } from '../style';

export const GetStarted = () => (
  <div
    className={`${styles.flexCenter} size-[140px] rounded-full bg-blue-gradient group hover:border-4 hover:border-white/55 p-[2px] cursor-pointer transition-all duration-1000`}
  >
    <div
      className={`${styles.flexCenter} flex-col size-full rounded-full bg-primary group-hover:bg-blue-gradient transition-all duration-500`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient group-hover:button-text transition-all duration-300">
          Get
        </p>

        <div className="group-hover:arrow-to-white">
          <img src={arrowUp} alt="arrowUp" className="size-[23px] object-contain" />
        </div>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient group-hover:button-text transition-all duration-300">
        Started
      </p>
    </div>
  </div>
);
