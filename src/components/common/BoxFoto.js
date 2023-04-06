import TextViva from "./TextViva";

export default function BoxFoto({
  className,
  bodyhead,
  body,
  src,
  title,
  minHeight,
  maxWidth,
}) {
  return (
    <div
      className={`${className} flex flex-col`}
      style={{
        width: "100%",
        maxWidth,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center",
        minHeight,
        borderRadius: "20px",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.7,
          zIndex: 0,
          borderRadius: "20px",
        }}
      ></div>
      <div
        className="flex flex-col items-center justify-center p-12"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {title && (
          <TextViva className="text-3xl playfair leading-relaxed text-left mb-4 font-medium white">
            {title}
          </TextViva>
        )}
        {bodyhead && (
          <TextViva className="text-lg leading-relaxed text-left font-bold mb-4 white">
            {bodyhead}
          </TextViva>
        )}
        <TextViva className="text-lg leading-relaxed text-left white">
          {body}
        </TextViva>
      </div>
    </div>
  );
}
