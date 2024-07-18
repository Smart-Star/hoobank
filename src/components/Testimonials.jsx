import { feedback } from '../constants';
import { styles } from '../style';
import { FeedbackCard } from './FeedbackCard';

export const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-0 size-[60%] -right-1/2 rounded-full blue__gradient" />

    <div className="w-full flex justify-between md:items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        What people are <br className="hidden sm:block" /> saying about us
      </h1>
      <p className={`${styles.paragraph} mt-6 md:mt-0 max-w-[450px]`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className="w-full flex flex-wrap justify-center sm:justify-center feedback-container relative z-[1]">
      {feedback.map((item) => (
        <FeedbackCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);
