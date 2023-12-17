import Image from 'next/image';

export interface HeroSectionProps {
  title: string;
  description: string;
  imgURL: string;
}

export const HeroSection = ({
  title,
  description,
  imgURL,
}: HeroSectionProps) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={imgURL}
          className="max-w-sm h-auto rounded-md shadow-2xl"
          alt="ai generated image"
          width={500}
          height={500}
          loading="lazy"
        />
        <div>
          <h2 className="text-5xl">{title}</h2>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
};
