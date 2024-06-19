import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FormulaireVillage() {
    const [moughataas, setMoughataas] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [formData, setFormData] = useState({
        numero_village: '',
        moughataa: '',
        commune: '',
        village_administratif: ''
    });

    useEffect(() => {
        // Effectuer une requête HTTP pour récupérer les données des moughataas depuis Django
        axios.get("http://127.0.0.1:8000/list_Maghataa/")
            .then(response => {
                // Mettre à jour l'état avec les données reçues
                setMoughataas(response.data);
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des moughataas :', error);
            });

        // Effectuer une requête HTTP pour récupérer les données des communes depuis Django
        // axios.get('http://votre-api-django.com/communes')
        //     .then(response => {
        //         // Mettre à jour l'état avec les données reçues
        //         setCommunes(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Une erreur s\'est produite lors de la récupération des communes :', error);
        //     });
    }, []); // L'effet ne dépend d'aucune valeur, il est exécuté une seule fois après le rendu initial

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

        // Envoi des données du formulaire au backend Django
        axios.post('http://127.0.0.1:8000/', formData)
            .then(response => {
                console.log('Les données ont été envoyées avec succès au backend Django:', response.data);
                // Réinitialiser les données du formulaire après l'envoi réussi
                setFormData({
                    numero_village: '',
                    moughataa: '',
                    commune: '',
                    village_administratif: ''
                });
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de l\'envoi des données au backend Django :', error);
            });
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            <div className="container">
                <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '36px', marginTop: '20px', marginBottom: '30px' }}>Formulaire Village</h1>
                <form action="#" className="container">
                    <div className="form-group row">
                        <label htmlFor="numero_village" className="col-sm-3 col-form-label">Numéro du village :</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control" id="numero_village" name="numero_village" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="moughataa" className="col-sm-3 col-form-label">Moughataa :</label>
                        <div className="col-sm-9"> 
                            <select className="form-control" id="moughataa" name="moughataa" style={{ width: '350px' }}>
                                <option value="" selet disabled>Sélectionnez une moughataa</option>
                                {moughataas.map(moughataa => (
                                    <option key={moughataa.ID_maghataa} value={moughataa.ID_maghataa}>{moughataa.Nom_maghataa}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="commune" className="col-sm-3 col-form-label">Commune :</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="commune" name="commune" style={{ width: '350px' }}>
                                <option value="">Sélectionnez une commune</option>
                                {communes.map(commune => (
                                    <option key={commune.id} value={commune.id}>{commune.name}</option>
                                ))}
                            </select>
                        </div> 
                    </div>
                   
          
        <div className="form-group row">
            <label htmlFor="village_administratif" className="col-sm-3 col-form-label">Village (Nom Administratif):</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="village_administratif" name="village_administratif" style={{ width: '350px' }}  />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="nom_local" className="col-sm-3 col-form-label">Nom local (s'il y en a):</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="nom_local" name="nom_local" style={{ width: '350px' }} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="distance_commune" className="col-sm-3 col-form-label">Distance par rapport au chef Lieu de la commune (en km) :</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="distance_commune" name="distance_commune" style={{ width: '350px' }}/>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="distance_routes" className="col-sm-3 col-form-label">Distance par rapport aux axes principaux (Routes bitumées) (en km) :</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="distance_routes" name="distance_routes" style={{ width: '350px' }} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="date_creation" className="col-sm-3 col-form-label">Date de création (aperçu historique):</label>
            <div className="col-sm-9">
                <textarea className="form-control" id="date_creation" name="date_creation" style={{ width: '350px' }}></textarea>
            </div>
        </div>

                <div className="form-group row">
                    <label htmlFor="composition_ethnique" className="col-sm-3 col-form-label">Composition Ethnique: </label>
                    <div className="col-sm-9">
                    <textarea className="form-control" id="composition_ethnique" name="composition_ethnique" style={{ width: '350px' }}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="population_fixe" className="col-sm-3 col-form-label">Population fixe:</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="population_fixe" name="population_fixe" style={{ width: '350px' }} />
                    </div>
                </div>
                <div className="form-group row">
    <label htmlFor="nombre_menages" className="col-sm-3 col-form-label">Nombre de ménages:</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_menages" name="nombre_menages" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="activites_economiques" className="col-sm-3 col-form-label">Activités Economiques :</label>
    <div className="col-sm-9">
        <textarea className="form-control" id="activites_economiques" name="activites_economiques" style={{ width: '350px' }}></textarea>
    </div>
</div>
<div className="form-group row">
    <label htmlFor="longitude" className="col-sm-3 col-form-label">Longitude :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="longitude" name="longitude" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="latitude" className="col-sm-3 col-form-label">Latitude :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="latitude" name="latitude" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="type_localite" className="col-sm-3 col-form-label">Type de localité :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="type_localite" name="type_localite" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="structure_habitat" className="col-sm-3 col-form-label">Structure de l’habitat :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="structure_habitat" name="structure_habitat" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="observations_acces" className="col-sm-3 col-form-label">Observations sur l'accès à la localité :</label>
    <div className="col-sm-9">
        <textarea className="form-control" id="observations_acces" name="observations_acces" style={{ width: '350px' }} ></textarea>
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_familles_estime" className="col-sm-3 col-form-label">Nombre de familles estimé :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_familles_estime" name="nombre_familles_estime" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="population_estimee" className="col-sm-3 col-form-label">Population estimée :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="population_estimee" name="population_estimee" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="annee_estimation" className="col-sm-3 col-form-label">Année de l’estimation :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="annee_estimation" name="annee_estimation" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_boeufs" className="col-sm-3 col-form-label">Nombre de Boeufs :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_boeufs" name="nombre_boeufs" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_moutons_chevres" className="col-sm-3 col-form-label">Nombre de Moutons + Chèvres :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_moutons_chevres" name="nombre_moutons_chevres"  style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_chevaux" className="col-sm-3 col-form-label">Nombre de Chevaux :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_chevaux" name="nombre_chevaux" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_chameaux" className="col-sm-3 col-form-label">Nombre de Chameaux :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_chameaux" name="nombre_chameaux" style={{ width: '350px' }} />
    </div>
</div>
<div className="form-group row">
    <label htmlFor="nombre_ane" className="col-sm-3 col-form-label">Nombre d'Ânes :</label>
    <div className="col-sm-9">
        <input type="text" className="form-control" id="nombre_ane" name="nombre_ane" style={{ width: '350px' }} />
    </div>
</div>

            <table className="table">
    <thead>
        <tr>
            <th colSpan="4">Education:</th>
        </tr>
        <tr>
            <th>Service</th>
            <th>Total</th>
            <th>Fonctionnelles</th>
            <th>Non Fonctionnelles</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ecole primaire</td>
            <td><input type="number" id="ecole_primaire_total" className="form-control" name="ecole_primaire_total" style={{ width: '100px' }} /></td>
            <td><input type="number" id="ecole_primaire_fonctionnelles" className="form-control" name="ecole_primaire_fonctionnelles" style={{ width: '100px' }} /></td>
            <td><input type="number" id="ecole_primaire_non_fonctionnelles" className="form-control" name="ecole_primaire_non_fonctionnelles" style={{ width: '100px' }} /></td>
        </tr>
        <tr>
            <td>Collège</td>
            <td><input type="number" id="college_total" name="college_total" className="form-control" style={{ width: '100px' }} /></td>
            <td><input type="number" id="college_fonctionnelles" className="form-control" name="college_fonctionnelles" style={{ width: '100px' }} /></td>
            <td><input type="number" id="college_non_fonctionnelles" className="form-control" name="college_non_fonctionnelles" style={{ width: '100px' }} /></td>
        </tr>
        <tr>
            <td>Lycée</td>
            <td><input type="number" id="lycee_total" name="lycee_total" className="form-control" style={{ width: '100px' }} /></td>
            <td><input type="number" id="lycee_fonctionnelles" className="form-control" name="lycee_fonctionnelles" style={{ width: '100px' }} /></td>
            <td><input type="number" id="lycee_non_fonctionnelles" className="form-control" name="lycee_non_fonctionnelles" style={{ width: '100px' }} /></td>
        </tr>
        <tr>
            <td>Mahadra</td>
            <td><input type="number" id="mahadra_total" className="form-control" name="mahadra_total" style={{ width: '100px' }} /></td>
            <td><input type="number" id="mahadra_fonctionnelles" className="form-control" name="mahadra_fonctionnelles" style={{ width: '100px' }} /></td>
            <td><input type="number" id="mahadra_non_fonctionnelles" className="form-control" name="mahadra_non_fonctionnelles" style={{ width: '100px' }} /></td>
        </tr>
        <tr>
            <td>Salle d'alphabétisation</td>
            <td><input type="number" id="salle_alphabetisation_total" className="form-control" name="salle_alphabetisation_total" style={{ width: '100px' }} /></td>
            <td><input type="number" id="salle_alphabetisation_fonctionnelles" className="form-control" name="salle_alphabetisation_fonctionnelles" style={{ width: '100px' }} /></td>
            <td><input type="number" id="salle_alphabetisation_non_fonctionnelles" className="form-control" name="salle_alphabetisation_non_fonctionnelles" style={{ width: '100px' }} /></td>
        </tr>
    </tbody>
</table>
<div>
    <h2>Santé et nutrition:</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Total</th>
                <th>Fonctionnelles</th>
                <th>Non Fonctionnelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Unité de santé de base</td>
                <td><input type="number" id="sante_base_total" className="form-control" name="sante_base_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="sante_base_fonctionnelles" className="form-control" name="sante_base_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="sante_base_non_fonctionnelles" className="form-control" name="sante_base_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Poste de santé</td>
                <td><input type="number" id="poste_sante_total" className="form-control" name="poste_sante_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="poste_sante_fonctionnelles" className="form-control" name="poste_sante_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="poste_sante_non_fonctionnelles" className="form-control" name="poste_sante_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Centre de santé</td>
                <td><input type="number" id="centre_sante_total" className="form-control" name="centre_sante_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="centre_sante_fonctionnelles" className="form-control" name="centre_sante_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="centre_sante_non_fonctionnelles" className="form-control" name="centre_sante_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
        </tbody>
    </table>
</div>

<div>
<div>
    <h2>Hydraulique:</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Total</th>
                <th>Fonctionnelles</th>
                <th>Non Fonctionnelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Contre-puits</td>
                <td><input type="number" id="contre_puits_total" className="form-control" name="contre_puits_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="contre_puits_fonctionnelles" className="form-control" name="contre_puits_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="contre_puits_non_fonctionnelles" className="form-control" name="contre_puits_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Forage</td>
                <td><input type="number" id="forage_total" className="form-control" name="forage_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="forage_fonctionnelles" className="form-control" name="forage_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="forage_non_fonctionnelles" className="form-control" name="forage_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Pompe équipée d’éolienne</td>
                <td><input type="number" id="pompe_eolienne_total" className="form-control" name="pompe_eolienne_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_eolienne_fonctionnelles" className="form-control" name="pompe_eolienne_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_eolienne_non_fonctionnelles" className="form-control" name="pompe_eolienne_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Pompe équipée de solaire</td>
                <td><input type="number" id="pompe_solaire_total" className="form-control" name="pompe_solaire_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_solaire_fonctionnelles" className="form-control" name="pompe_solaire_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_solaire_non_fonctionnelles" className="form-control" name="pompe_solaire_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Pompe thermique</td>
                <td><input type="number" id="pompe_thermique_total" className="form-control" name="pompe_thermique_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_thermique_fonctionnelles" className="form-control" name="pompe_thermique_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="pompe_thermique_non_fonctionnelles" className="form-control" name="pompe_thermique_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Puits ou Forage à motricité humaine</td>
                <td><input type="number" id="puits_forage_motricite_humaine_total" className="form-control" name="puits_forage_motricite_humaine_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="puits_forage_motricite_humaine_fonctionnelles" className="form-control" name="puits_forage_motricite_humaine_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="puits_forage_motricite_humaine_non_fonctionnelles" className="form-control" name="puits_forage_motricite_humaine_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Piézomètre</td>
                <td><input type="number" id="piezometre_total" className="form-control" name="piezometre_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="piezometre_fonctionnelles" className="form-control" name="piezometre_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="piezometre_non_fonctionnelles" className="form-control" name="piezometre_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Sondage</td>
                <td><input type="number" id="sondage_total" className="form-control" name="sondage_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="sondage_fonctionnelles" className="form-control" name="sondage_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="sondage_non_fonctionnelles" className="form-control" name="sondage_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Source</td>
                <td><input type="number" id="source_total" className="form-control" name="source_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="source_fonctionnelles" className="form-control" name="source_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="source_non_fonctionnelles" className="form-control" name="source_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Tamourt ou Mare</td>
                <td><input type="number" id="tamourt_mare_total" className="form-control" name="tamourt_mare_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="tamourt_mare_fonctionnelles" className="form-control" name="tamourt_mare_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="tamourt_mare_non_fonctionnelles" className="form-control" name="tamourt_mare_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Réseau de distribution d’eau</td>
                <td><input type="number" id="reseau_distribution_eau_total" className="form-control" name="reseau_distribution_eau_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="reseau_distribution_eau_fonctionnelles" className="form-control" name="reseau_distribution_eau_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="reseau_distribution_eau_non_fonctionnelles" className="form-control" name="reseau_distribution_eau_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Barrage</td>
                <td><input type="number" id="barrage_total" className="form-control" name="barrage_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="barrage_fonctionnelles" className="form-control" name="barrage_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="barrage_non_fonctionnelles" className="form-control" name="barrage_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Digue ou diguette</td>
                <td><input type="number" id="digue_total" className="form-control" name="digue_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="digue_fonctionnelles" className="form-control" name="digue_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="digue_non_fonctionnelles" className="form-control" name="digue_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Cours d'eau permanent</td>
                <td><input type="number" id="cours_eau_permanent_total" className="form-control" name="cours_eau_permanent_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="cours_eau_permanent_fonctionnelles" className="form-control" name="cours_eau_permanent_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="cours_eau_permanent_non_fonctionnelles" className="form-control" name="cours_eau_permanent_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Cours d'eau temporaire</td>
                <td><input type="number" id="cours_eau_temporaire_total" className="form-control" name="cours_eau_temporaire_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="cours_eau_temporaire_fonctionnelles" className="form-control" name="cours_eau_temporaire_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="cours_eau_temporaire_non_fonctionnelles" className="form-control" name="cours_eau_temporaire_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <h2>Equipements marchands:</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Total</th>
                <th>Fonctionnelles</th>
                <th>Non Fonctionnelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marché</td>
                <td><input type="number" id="marche_total" className="form-control" name="marche_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_fonctionnelles" className="form-control" name="marche_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_non_fonctionnelles" className="form-control" name="marche_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Marché de bétail</td>
                <td><input type="number" id="marche_betail_total" className="form-control" name="marche_betail_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_betail_fonctionnelles" className="form-control" name="marche_betail_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_betail_non_fonctionnelles" className="form-control" name="marche_betail_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Marché hebdomadaire</td>
                <td><input type="number" id="marche_hebdomadaire_total" className="form-control" name="marche_hebdomadaire_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_hebdomadaire_fonctionnelles" className="form-control" name="marche_hebdomadaire_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="marche_hebdomadaire_non_fonctionnelles" className="form-control" name="marche_hebdomadaire_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Boucherie - vente de viande</td>
                <td><input type="number" id="boucherie_total" className="form-control" name="boucherie_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="boucherie_fonctionnelles" className="form-control" name="boucherie_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="boucherie_non_fonctionnelles" className="form-control" name="boucherie_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
        </tbody>
    </table>
</div>

<div>
    <h2>Environnement, agriculture et élevage:</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Total</th>
                <th>Fonctionnelles</th>
                <th>Non Fonctionnelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Banque de céréales (silos)</td>
                <td><input type="number" id="banque_cereales_total" className="form-control" name="banque_cereales_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="banque_cereales_fonctionnelles" className="form-control" name="banque_cereales_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="banque_cereales_non_fonctionnelles" className="form-control" name="banque_cereales_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Forêt</td>
                <td><input type="number" id="foret_total" className="form-control" name="foret_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="foret_fonctionnelles" className="form-control" name="foret_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="foret_non_fonctionnelles" className="form-control" name="foret_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Oasis</td>
                <td><input type="number" id="oasis_total" className="form-control" name="oasis_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="oasis_fonctionnelles" className="form-control" name="oasis_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="oasis_non_fonctionnelles" className="form-control" name="oasis_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Poste vétérinaire</td>
                <td><input type="number" id="poste_veterinaire_total" className="form-control" name="poste_veterinaire_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="poste_veterinaire_fonctionnelles" className="form-control" name="poste_veterinaire_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="poste_veterinaire_non_fonctionnelles" className="form-control" name="poste_veterinaire_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Routes, bâtiments administratifs ou communautaires</td>
                <td><input type="number" id="routes_batiments_total" className="form-control" name="routes_batiments_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="routes_batiments_fonctionnelles" className="form-control" name="routes_batiments_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="routes_batiments_non_fonctionnelles" className="form-control" name="routes_batiments_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Routes bitumées</td>
                <td><input type="number" id="routes_bitumees_total" className="form-control" name="routes_bitumees_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="routes_bitumees_fonctionnelles" className="form-control" name="routes_bitumees_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="routes_bitumees_non_fonctionnelles" className="form-control" name="routes_bitumees_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Route en terre améliorée</td>
                <td><input type="number" id="route_terre_amelioree_total" className="form-control" name="route_terre_amelioree_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="route_terre_amelioree_fonctionnelles" className="form-control" name="route_terre_amelioree_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="route_terre_amelioree_non_fonctionnelles" className="form-control" name="route_terre_amelioree_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Bâtiment administratif</td>
                <td><input type="number" id="batiment_administratif_total" className="form-control" name="batiment_administratif_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="batiment_administratif_fonctionnelles" className="form-control" name="batiment_administratif_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="batiment_administratif_non_fonctionnelles" className="form-control" name="batiment_administratif_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
            <tr>
                <td>Bâtiment communal</td>
                <td><input type="number" id="batiment_communal_total" className="form-control" name="batiment_communal_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="batiment_communal_fonctionnelles" className="form-control" name="batiment_communal_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="batiment_communal_non_fonctionnelles" className="form-control" name="batiment_communal_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
        </tbody>
    </table>
</div>

<div>
    <h2>Energie, télécommunications et tourisme:</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Total</th>
                <th>Fonctionnelles</th>
                <th>Non Fonctionnelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Réseau téléphonique (portable)</td>
                <td><input type="number" id="reseau_telephonique_total" className="form-control" name="reseau_telephonique_total" style={{ width: '100px' }} /></td>
                <td><input type="number" id="reseau_telephonique_fonctionnelles" className="form-control" name="reseau_telephonique_fonctionnelles" style={{ width: '100px' }} /></td>
                <td><input type="number" id="reseau_telephonique_non_fonctionnelles" className="form-control" name="reseau_telephonique_non_fonctionnelles" style={{ width: '100px' }} /></td>
            </tr>
        </tbody>
    </table>
</div>


</div>
        <br></br>



                <button type="submit" className="btn btn-primary btn-hover">Soumettre</button>
                <br></br>
                <br></br>
            </form>
            </div>
     
        </>
    );
}
