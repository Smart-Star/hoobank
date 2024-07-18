import { card } from '../assets';
import { layout, styles } from '../style';
import { Button } from './Button';

export const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="hidden sm:block" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
        tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button margin="mt-10" />
    </div>

    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="size-full" />
    </div>
  </section>
);
