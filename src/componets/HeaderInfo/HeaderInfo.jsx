import SingleInfo from "./SingleInfo/SingleInfo";
import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";
import img4 from "/4.png";

const HeaderInfo = () => {
  return (
    <div className="bg-[#ECEAE3] pt-10 pb-8  flex info-area">
      <SingleInfo
        img={img1}
        title="Awesome Aroma"
        info="You will definitely be a fan of the design & aroma of your coffee"
      ></SingleInfo>
      <SingleInfo
        img={img2}
        title="High Quality"
        info="We served the coffee to you maintaining the best quality"
      ></SingleInfo>
      <SingleInfo
        img={img3}
        title="Pure Grades"
        info="The coffee is made of the green coffee beans which you will love"
      ></SingleInfo>
      <SingleInfo
        img={img4}
        title="Proper Roasting"
        info="Your coffee is brewed by first roasting the green coffee beans"
      ></SingleInfo>
    </div>
  );
};

export default HeaderInfo;
