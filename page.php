
<?php
    //récupération des données du formulaire
    $nom = htmlspecialchars($_POST['name']);
    $pays = htmlspecialchars($_POST['pays']);
    $montant = htmlspecialchars($_POST['montant']);
    $adresse = htmlspecialchars($_POST['address']);
    $telephone = htmlspecialchars($_POST['phone']);
    $mail = htmlspecialchars($_POST['email']);
    $devise = htmlspecialchars($_POST['devise']);
    $notescmd = htmlspecialchars($_POST['notes']);    

    //connexion à la base de données
    try{
        $bdd = new PDO("mysql:host=localhost;dbname=projet", "root", "");
        echo 'MERCI POUR VOTRE COMMANDE !. ON VA VOUS CONTACTER BIENTÔT';
    }
    catch(Exception $e){
        die('Erreur: ' .$e->getMessage());
    }
    //requête sql
    $req = $bdd->prepare("INSERT INTO lmd (nom, pays, montant, adress, telephone, mail, devise, notescmd) VALUES (:nom, :pays, :montant, :adress, :telephone, :mail, :devise, :notescmd) ");
    $req->bindParam(':nom', $nom);
    $req->bindParam(':pays', $pays);
    $req->bindParam(':montant', $montant);
    $req->bindParam(':adress', $adresse);
    $req->bindParam(':telephone', $telephone);
    $req->bindParam(':mail', $mail);
    $req->bindParam(':devise', $devise);
    $req->bindParam(':notescmd', $notescmd);
    $req->execute();
?> 