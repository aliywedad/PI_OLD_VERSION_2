import React, { useState } from 'react';
import axios from 'axios';

function FormilairForm() {
  const [formilairData, setFormilairData] = useState({
    titre: '',
    description: '',
    questions: [],
    infra_Questions: [] ,
  });
  
  const [educationSelected, setEducationSelected] = useState(false);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...formilairData.questions];
    updatedQuestions[index][name] = value;
    if (name === 'type_reponse' && value === 'text') {
      updatedQuestions[index].choices = [];
    }
    setFormilairData({ ...formilairData, questions: updatedQuestions });
  };

  const handleAddChoice = (index) => {
    const updatedQuestions = [...formilairData.questions];
    updatedQuestions[index].choices.push('');
    setFormilairData({ ...formilairData, questions: updatedQuestions });
  };

  const handleAddQuestion = () => {
    setFormilairData({
      ...formilairData,
      questions: [
        ...formilairData.questions,
        { text: '', choices: [], type_reponse: 'text' }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/create_formilair/', formilairData);
      console.log('Formulaire soumis avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }
  };



  const infrastructures = ['Éducation', 'Santé', 'Route','Hydraulique','Equipements marchands','Environnement, agriculture et élevage ','Routes, bâtiments administratifs ou communautaires','Energie, télécommunications et tourisme'];


  

  const handleAddEducationQuestion = () => {
    setFormilairData({
      ...formilairData,
      infra_Questions: [
        ...formilairData.infra_Questions,
        { infrastructure: 'Éducation', total: 0, fonctionnelles: 0, nonFonctionnelles: 0 }
      ]
    });
  };

  const handleCancelQuestion = () => {
    // Supprimer la dernière question sur l'éducation ajoutée
    const updatedQuestions = [...formilairData.infra_Questions];
    updatedQuestions.pop();
    setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
  };

const educationOptions = [
  'Ecole primaire', 
  'Collège', 
  'Lycée', 
  'Mahadra', 
  'Salle d’alphabétisation',
  'Unité de santé de base',
  'Poste de santé',
  'Centre de santé',
  'Puits moderne',
  'Puits traditionnel',
  'Contre-puits',
  'Forage',
  'Pompe équipée d’éolienne',
  'Pompe équipée de solaire',
  'Pompe thermique',
  'Puits ou Forage à motricité humaine',
  'Piézomètre',
  'Sondage',
  'Source',
  'Tamourt ou Mare',
  'Réseau de distribution d’eau',
  'Barrage',
  'Digue ou diguette',
  'Cours d\'eau permanent',
  'Cours d\'eau temporaire',
  'Marché',
  'Marché de bétail',
  'Marché hebdomadaire',
  'Boucherie -vente de viande',
  'Banque de céréales (silos)',
  'Forêt',
  'Oasis',
  'Poste vétérinaire',
  'Routes bitumées',
  'Route en terre améliorée',
  'Bâtiment administratif',
  'Bâtiment communal',
  'Réseau téléphonique (portable)'
];


  return (
  
    <form onSubmit={handleSubmit}>
    <div className="card m-2">
   <div className="card-body">
   <h5 className="card-title">Titre</h5>

      <div>
        <label>Titre:</label>
        <input type="text" className="form-control w-75" name="titre" value={formilairData.titre} onChange={(e) => setFormilairData({ ...formilairData, titre: e.target.value })} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" className="form-control w-75" value={formilairData.description} onChange={(e) => setFormilairData({ ...formilairData, description: e.target.value })}></textarea>
      </div>
</div>
</div>
<div className=" m-2">
<div className="card-body">
  <h5 className="card-title">Questions</h5>
      {formilairData.questions.map((question, index) => (
        <div key={index}>
          <label>Question {index + 1}:</label>
          <input type="text" className="form-control w-75" name="text" value={question.text} onChange={(e) => handleChange(index, e)} />
          <label>Type de réponse:</label>
          <select name="type_reponse" className="form-control w-75" value={question.type_reponse} onChange={(e) => handleChange(index, e)}>
            <option value="text">Texte</option>
            <option value="textchoice">text choices</option>
            <option value="multiplechoice">Choix multiple</option>
            <option value="choice">Choix</option>
          </select>
          {(question.type_reponse === 'choice' || question.type_reponse === 'textchoice') && (
            <div>
              {question.choices.map((choice, choiceIndex) => (
                <div key={choiceIndex}>
                  <input type="text" value={choice} onChange={(e) => {
                    const updatedQuestions = [...formilairData.questions];
                    updatedQuestions[index].choices[choiceIndex] = e.target.value;
                    setFormilairData({ ...formilairData, questions: updatedQuestions });
                  }} />
                </div>
              ))}
              <button type="button" className='btn btn-primary m-2 p-0' onClick={() => handleAddChoice(index)}>Add Choice</button>
            </div>
          )}
          
        </div>
      ))}
       <br />
            <div className=" m-2">
              <div className="card-body">
                <h5 className="card-title">Questions Sur Les Infrastructures </h5>
                {formilairData.infra_Questions.map((question, index) => (
                  <div key={index}>
                    <label>{`Question ${index + 1}:`}</label>
                    <select value={question.infrastructure} onChange={(e) => {
                        const updatedQuestions = [...formilairData.infra_Questions];
                        updatedQuestions[index].infrastructure = e.target.value;
                        setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
                      }}>
                         <option disabled value={'secteur'}>Secteur</option>
                          {infrastructures.map((option, index) => (
                          <option key={index} value={option} cl>{option}</option>
                        ))}
                      </select>
                      <br></br>
                    <select value={question.infrastructure} onChange={(e) => {
                      const updatedQuestions = [...formilairData.infra_Questions];
                      updatedQuestions[index].infrastructure = e.target.value;
                      setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
                    }}>
                      {educationOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    
                 

                    
                    <div>
                      <label>Nombre Total:</label>
                      <input type="number" value={question.total} onChange={(e) => {
                        const updatedQuestions = [...formilairData.infra_Questions];
                        updatedQuestions[index].total = parseInt(e.target.value);
                        setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
                      }} />
                    </div>
                    <div>
                      <label>Fonctionnelles:</label>
                      <input type="number" value={question.fonctionnelles} onChange={(e) => {
                        const updatedQuestions = [...formilairData.infra_Questions];
                        updatedQuestions[index].fonctionnelles = parseInt(e.target.value);
                        setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
                      }} />
                    </div>
                    <div>
                      <label>Non Fonctionnelles:</label>
                      <input type="number" value={question.nonFonctionnelles} onChange={(e) => {
                        const updatedQuestions = [...formilairData.infra_Questions];
                        updatedQuestions[index].nonFonctionnelles = parseInt(e.target.value);
                        setFormilairData({ ...formilairData, infra_Questions: updatedQuestions });
                      }} />
                    </div>
                  </div>
                ))}
                <button type="button" className="btn btn-primary m-2" onClick={handleAddEducationQuestion}>Nouvelle Question</button>
                <button type="button" className="btn btn-danger m-2" onClick={handleCancelQuestion}>Annuler</button>
              </div>
            </div>
      <button type="button" className='btn btn-primary m-2' onClick={handleAddQuestion}>Add Question</button>
      <button type="submit" className='btn btn-primary m-2'>Soumettre</button>
      </div></div>
    </form>
  );
}

export default FormilairForm;




<form>
    <div className="row mb-3">
      <label for="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="inputText"/>
      </div>
    </div>

    <div className="row mb-3">
      <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" id="inputPassword"/>
      </div>
    </div>
    <fieldset className="row mb-3">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
     
    </fieldset>
   
  </form>