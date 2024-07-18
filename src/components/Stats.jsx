import { stats } from '../constants';
import { styles } from '../style';

export const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] xs:leading-[53px] text-[30px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] xs:leading-[26px] text-[15px] leading-[21px] text-gradient uppercase ml-5">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);
