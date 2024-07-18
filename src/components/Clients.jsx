import { clients } from '../constants';
import { styles } from '../style';

export const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap gap-5 w-full`}>
      {clients.map((item) => (
        <div
          key={item.id}
          className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px] img-to-white transition-all duration-300`}
        >
          <img src={item.logo} alt="client" className="w-[100px] sm:w-[192px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);
