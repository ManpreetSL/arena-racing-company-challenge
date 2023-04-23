import parse from 'html-react-parser';

type EventProps = {
  event: {
    id: string;
    date: Date;
    slug: string;
    title: string;
    description: string;
    images: {
      mobile: string;
      tablet_port: string;
      tablet_land: string;
      desktop: string;
    };
  };
};

const Event = ({ event }: EventProps) => {
  return (
    <div>
      <a href={event.slug}>
        <h1>{event.title}</h1>
      </a>
      <span>{event.date.toDateString()}</span>
      <div>{parse(parse(event.description) as string)}</div>
      <img src={event.images.mobile} />
    </div>
  );
};

export default Event;
