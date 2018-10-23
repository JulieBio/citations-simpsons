import  React  from  'react';

const  DisplayCitation = ({ citation }) => {
    return (
        <div  className="DisplayCitation">
            <img src={citation.image} alt="citation"  />
            <ul>
                <li>{citation.quote}
                </li>
                <li>{citation.character} 
                </li>
                <li>{citation.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayCitation;