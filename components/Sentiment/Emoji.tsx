import Image from "next/image";

const Emoji = ({ sentiment }: { sentiment: string }) => {
  return (
    <div>
      <Image
        src={`/images/${sentiment}-emoji.png`}
        alt={`${sentiment} emoji face`}
        width={24}
        height={24}
      />
    </div>
  );
};

export default Emoji;
