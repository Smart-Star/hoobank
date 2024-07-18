import { layout, styles } from '../style';
import { apple, bill, google } from '../assets';

export const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="size-full relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 size-1/2 rounded-full white__gradient" />
      <div className="absolute z-0 -left-1/2 bottom-0 size-1/2 rounded-full pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="hidden sm:block" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum
        orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:ring-1 hover:rounded-sm hover:ring-white/40 transition-all duration-300"
        />
        <img
          src={google}
          alt="google_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer hover:ring-1 hover:rounded-sm hover:ring-white/40 transition-all duration-300"
        />
      </div>
    </div>
  </section>
);
