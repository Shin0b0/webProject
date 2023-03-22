import { useState } from "react";
import "./filter.css";
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";
import domtoimage from "dom-to-image";
import Crops from "./Crops";
import Imgtest from "./Imgtest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

// import Crops from './components/Crops';

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "%",
  },
];

const url = "https://source.unsplash.com/EwKXn5CapA4";
function Filter(props) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const [image, setImage] = useState("https://source.unsplash.com/1200x1200");
  const [imageq, setImageq] = useState(null);

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }

  console.log(getImageStyle());

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  // -----------------------------------------------
  const down = () => {
    let node = document.getElementById("1122");
    domtoimage.toPng(node).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      link.click();
    });
  };
  // -------------------------------------------------

  // -------------------------------------------------
  return (
    <>
      <div className="container">
        <div id="1122" className="imger">
          <center>
            <img style={getImageStyle()} src={image} alt="" />
          </center>
        </div>

        <div className="sidebar">
          {options.map((option, index) => {
            return (
              <SidebarItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="gero1">.</div>
      <div className="gero">
        <center>
          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}
          />
        </center>
        <div className="butt">
          <div>
            <input
              id="img"
              type="file"
              onChange={onImageChange}
              style={{ display: "none" }}
            />

            <label className="expo gerox1 " for="img">
              IMPORT{""} <FontAwesomeIcon icon={faUpload} />
            </label>
          </div>
          <center className="gerox">
            <Imgtest idd={"1122"} />
          </center>
        </div>
      </div>
    </>
  );
}

export default Filter;
