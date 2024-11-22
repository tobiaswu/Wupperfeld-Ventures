import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description: string;
  videoURL: string;
  thumbnailURL: string;
  link?: string;
}

export const Card = ({
  title,
  description,
  videoURL,
  thumbnailURL,
  link,
}: CardProps) => {
  const CardComponent = () => {
    return (
      <div className="card h-full bg-neutral shadow-2xl rounded-md border-4 border-transparent hover:border-primary transition-all duration-300 hover:scale-105">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
        </div>
        <figure>
          <video
            src={videoURL}
            autoPlay
            muted
            loop
            playsInline
            poster={thumbnailURL}
          />
        </figure>
      </div>
    );
  };

  return link ? (
    <Link href={link}>
      <CardComponent />
    </Link>
  ) : (
    <CardComponent />
  );
};
