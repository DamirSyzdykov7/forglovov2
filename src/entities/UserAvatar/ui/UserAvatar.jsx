/* eslint-disable react/prop-types */
export function UserAvatar({ src, alt, size }) {
  return (
    <div className={`relative ${size === "lg" ? "w-64 h-64" : "w-10 h-10"}`}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
}
