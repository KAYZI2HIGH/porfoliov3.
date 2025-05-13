import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const ProfileAvatar = ({ name, image, className }:{name: string, image?:string, className: string}) => {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={image || ""}
        className="rounded-[10px]"
      />
      <AvatarFallback className="rounded-[10px]">
        {name &&
          name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
