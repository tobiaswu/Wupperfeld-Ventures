import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description: string;
  imgURL: string;
  link?: string;
}

export const Card = ({ title, description, imgURL, link }: CardProps) => {
  return link ? (
    <Link href={link}>
      <div className="card max-w-96 bg-neutral shadow-xl rounded-md border-4 border-transparent hover:border-primary">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
        </div>
        <figure>
          <Image
            src={imgURL}
            alt={`Logo of ${title}`}
            width={600}
            height={400}
            loading="lazy"
          />
        </figure>
      </div>
    </Link>
  ) : (
    <div className="card max-w-96 bg-neutral shadow-xl rounded-md border-4 border-transparent hover:border-primary">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
      </div>
      <figure>
        <Image src={imgURL} alt={`Logo of ${title}`} width={600} height={400} />
      </figure>
    </div>
  );
};
