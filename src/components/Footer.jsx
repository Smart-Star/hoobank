import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import { styles } from '../style';

export const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col my-4 ss:my-0 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {item.title}
            </h4>

            <ul className="mt-4">
              {item.links.map((link) => (
                <li
                  key={link.label}
                  className="font-poppins font-normal text-[16px] leading-[24px] mb-4 last:mb-0 text-dimWhite hover:text-secondary cursor-pointer hover:translate-x-1 transition-all duration-300"
                >
                  <a href={link.href} className="">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright <span className="text-[22px]">&copy;</span> 2024 HooBank. All Rights Reserved.
      </p>

      <div className="flex mt-6 md:mt-0">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="mr-6 last:mr-0 opacity-100 hover:opacity-65 transition-all duration-300"
          >
            <img src={social.icon} alt={social.id} className="size-[21px] object-contain" />
          </a>
        ))}
      </div>
    </div>
  </section>
);
