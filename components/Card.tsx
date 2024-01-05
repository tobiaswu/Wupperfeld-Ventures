import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description: string;
  imgURL: string;
  link?: string;
}

export const Card = ({ title, description, imgURL, link }: CardProps) => {
  const CardComponent = () => {
    return (
      <div className="card h-full bg-neutral shadow-2xl rounded-md border-4 border-transparent hover:border-primary">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
        </div>
        <figure>
          <Image
            className="w-full h-auto"
            src={imgURL}
            alt={`Logo of ${title}`}
            width={300}
            height={200}
            loading="lazy"
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
