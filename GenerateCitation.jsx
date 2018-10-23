import  React  from  'react';

const  GenerateCitation = ({ selectCitation }) => {
    return (
        <div  className="GenerateCitation">
        <button  onClick={selectCitation}>Get Citation</button>
        </div>
    );
};

export  default  GenerateCitation;