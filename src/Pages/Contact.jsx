import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-primary-200">
          <span>
            Made by <em>Sugamay</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
