import { Outlet, Link } from "react-router-dom";
import "../index.css";

//import Test from "./check/check";

export default function Root() {

  const disease = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction', 'Peptic ulcer diseae', 'AIDS', 'Diabetes ', 'Gastroenteritis', 'Bronchial Asthma', 'Hypertension ', 'Migraine', 'Cervical spondylosis', 'Paralysis (brain hemorrhage)', 'Jaundice', 'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis', 'Common Cold', 'Pneumonia', 'Dimorphic hemmorhoids(piles)', 'Heart attack', 'Varicose veins', 'Hypothyroidism', 'Hypoglycemia', 'Osteoarthristis', 'Arthritis', '(vertigo) Paroymsal  Positional Vertigo', 'Acne', 'Urinary tract infection', 'Psoriasis', 'Impetigo'];
  const renderList = disease.map((item) =>
           <li id="items123"><Link  to={`disease/`+item}>{item}</Link></li>);

    return (
      <>
        <div id="sidebar">
          {/* <hh1>Dr.Morbus</hh1> */}
          <div>
            <form method="post" className="center container">
              
              <Link to={'/test'}><button type="submit"><class id="hh1">Take your test now</class></button></Link>
            </form>
          </div >
          <nav>
            <ul>
              <div className="container69">
              <div id="Menu">
              {renderList}
              </div>
              </div>
            </ul>
          </nav>
        </div>

        {/* <p>Welcome to Dr.Morbus1</p> */}

        <Outlet />
        
        {/* <div id="detail"></div> */}
      </>
    );
    }