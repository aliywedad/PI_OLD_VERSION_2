const header = "http://127.0.0.1:8000/";
// const header = "https://aliy22086.pythonanywhere.com/";

export const APIs = {
    // crud wilaya
    "lesWilayas": header+"list_wilaya/",
    "AjouterWilaya": header+"AddWilaye/",
    "ModifierWilaya": header+"modifierWilaye/",
    "SuprimerWilaya": header+"suprimerWilaya/",
    // crud moghataa
    "lesMoghataas": header+"list_Maghataa/",
    "AjouterMoghataa": header+"AddMoughataa/",
    "ModifierMoghataa": header+"modifierMoughataa/",
    "SuprimerMoghataa": header+"suprimermoghataa/",
    "list_Maghataa_parwilaya": header+"list_Maghataa_parwilay",
    // crud Commun
    "lesCommuns": header+"list_commune/",
    "AjouterCommun": header+"AddCommin/",
    "ModifierCommun": header+"modifierCommin/",
    "SuprimerCommun": header+"suprimercommin/",
    "list_commun_parMough": header+"list_commun_parMough",
    // crud Village
    "lesVillages": header+"list_Village/",
    "AjouterVillage": header+"AddVillage/",
    "ModifierVillage": header+"modifierVillage/",
    "SuprimerVillage": header+"suprimervillage/",
    // crud Formilaire
    "lesFormilaires": header+"forms/",
    "AjouterFormilaire": header+"create_formilair/",
    "ModifierFormilaire": header+"modifierWilaye/",
    "SuprimerFormilaire": header+"delet_forms/",
    "ReamplireFormilaire": header+"Repondre/",
    "lesInfosDuFormilaire": header+"Getforms/",
    "lesResultatDuFormilaire":header+"formInfo/",
    // crud User
    "lesUser": header+"list_users/",
    "AjouterUser": header+"AddUser/",
    "changerEtat": header+"modifierEtat/",
    "ModifierUser": header+"modifierUser/",
    "SuprimerUser": header+"suprimerUtilisateur/",
    "list_ActionUser": header+"list_ActionUser/",
    "suprimerActionUser": header+"suprimerActionUser/",
    // des outres 
    "lesInfrastruture": header+"list_Infrastructur/",
    "lesTypesInfra": header+"list_TypeInfrastructur/",
    "AddtypeInfra": header+"AddtypeInfra/",
    "suprimerTypeInfra": header+"suprimerTypeInfra/",
    "modifierTypeInfra": header+"modifierTypeInfra/",
    "AddInfra": header+"AddInfra/",
    "suprimerInfra": header+"suprimerInfra/",
    "modifierInfra": header+"modifierInfra/",
    "Authantification": header+"auth/",
    "recommandation": header+"update_recommandais/",
    "verification": header+"verification_Email/",
    "bar": header+"infraChart/",
    "VoirLesDonnerDuInfrastructeur":header+"InfraInfo/",
    "register":header+"create_user/",
 
};

 
