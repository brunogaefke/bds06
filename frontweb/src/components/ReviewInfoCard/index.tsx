import "./styles.css";

import ReviewImg from 'assets/images/star-review.png'

type Props = {
  name: string;
  text: string;
}

const RewiewInfoCard = ({ name, text, } : Props) => {

  return (
      <div className="base-card review-info-card">
          <div className="info-name-card">
          (<img src={ReviewImg} alt="Nome do produto" />)
              <h6>{name}</h6>
              </div>
              <div className="info-review-card">
                <p>{text}</p>
          </div>)
         
      </div>
  );
};

export default RewiewInfoCard;
