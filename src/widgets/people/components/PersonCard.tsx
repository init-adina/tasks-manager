import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";

interface PersonCardProps {
  imageUrl: string;
  name: string;
  email: string;
  position: string;
}

function PersonCard({ imageUrl, name, email, position }: PersonCardProps) {
  return (
    <div className="person-card h-80 border rounded-md shadow-md flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="person-image size-40">
          <ProgressiveImage
            src={imageUrl}
            width={500}
            className="size-full object-cover rounded-full"
            height={500}
            alt="person-image"
          />
        </div>

        <div className="person-name font-medium">{name}</div>

        <div className="person-email text-xs text-gray-600">{email}</div>
      </div>

      <div className=" bg-primary-50 px-6 py-3 text-center text-gray-800 uppercase text-xs font-semibold">
        {position}
      </div>
    </div>
  );
}

export default PersonCard;
