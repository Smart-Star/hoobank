import { features } from '../constants';
import { layout, styles } from '../style';
import { Button } from './Button';
import { FeatureCard } from './FeatureCard';

export const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className="hidden sm:block" /> we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by building credit, earning
        rewards and saving money. But with hundreds of credit cards on the market.
      </p>

      <Button margin="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);
