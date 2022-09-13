import { createContext, useState, useContext } from "react";

const ColorContext = createContext({
  color: "lightgray",
  setColor: () => {}
});

const ColorPicker = () => {
  const colors = ["blue", "red", "green", "yellow", "white", "black", "pink"];
  const { setColor } = useContext(ColorContext);
  return (
    <div>
      <h1> Choose a Color </h1>
      {colors.map((color) => (
        <button
          className="btn"
          key={color}
          style={{ backgroundColor: color, margin: "0 5px" }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
};

const Pixel = () => {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightgray");
  return (
    <>
      <div
        onClick={() => setPixelColor(color)}
        className="btn"
        style={{ backgroundColor: pixelColor, margin: "1px" }}
      />
    </>
  );
};

const PixelsGrid = () => {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel />);
  return <div className="grid">{pixels}</div>;
};

export const PixelArt = () => {
  const [color, setColor] = useState("lightgray");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <PixelsGrid />
    </ColorContext.Provider>
  );
};

export default PixelArt;
