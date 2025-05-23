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
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-50 h-50",
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
