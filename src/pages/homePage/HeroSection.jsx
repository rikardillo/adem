import { Link } from "react-router-dom";
import Button from "../../components/ui/buttons/Button";

export default function HeroSection() {
  return (
    <section className="relative flex h-[90vh] items-center bg-[url('/src/assets/imgs/adem-003.jpg')] bg-cover bg-center leading-[4rem]">
      <div className="hero-clip-path absolute right-0 top-0 flex h-full flex-col justify-center items-end gap-4 bg-adem-primary-800/80 px-20">
        <h1 className="right-[2rem] text-right text-[4rem] font-black uppercase text-white">
          encuentra <br /> tu siguiente
          <br /> proyecto
        </h1>
        <Button variant="secondary">Button title</Button>
      </div>
    </section>
  );
}
