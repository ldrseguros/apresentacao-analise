import React from "react";

interface ProfilePhotoProps {
  image: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  image,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-16 h-16 sm:w-20 sm:h-20",
    md: "w-24 h-24 sm:w-32 sm:h-32",
    lg: "w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-brand-yellow ${className}`}
    >
      <img
        src={image}
        alt="Gustavo Mariano"
        className="w-full h-full object-cover object-right-top"
      />
    </div>
  );
};

export default ProfilePhoto;
