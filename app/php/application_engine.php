<?php

$EmailFrom = "Applications@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Delegate Application";

$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Phone = Trim(stripslashes($_POST['Phone']));
$Status = Trim(stripslashes($_POST['Status']));
$Year = Trim(stripslashes($_POST['Year']));
$Campus = Trim(stripslashes($_POST['Campus']));
$Occupation = Trim(stripslashes($_POST['Occupation']));
$Program = Trim(stripslashes($_POST['Program']));
$Dietary = Trim(stripslashes($_POST['Dietary']));
$FinalQ = Trim(stripslashes($_POST['FinalQ']));

$EmailTo2 = $Email;
$Subject2 = "Confirmation";
$EmailFrom2 = "Confirmation@TEDxUofT.com";

// validation
$validationOK=true;

if (!$validationOK) {

  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= " \n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= " \n";

$Body .= "Phone: ";
$Body .= $Phone;
$Body .= " \n";

$Body .= "I am a: ";
$Body .= $Status;
$Body .= " \n";

$Body .= "Year: ";
$Body .= $Year;
$Body .= " \n";

$Body .= "Campus: ";
$Body .= $Campus;
$Body .= " \n";

$Body .= "Occupation: ";
$Body .= $Occupation;
$Body .= " \n\n";

$Body .= "Program: ";
$Body .= $Program;
$Body .= " \n\n";

$Body .= "Dietary Restrictions: ";
$Body .= $Dietary;
$Body .= " \n\n";

$Body .= "FinalQ: ";
$Body .= $FinalQ;
$Body .= " \n\n";

$Body2 = "Hey, we have received your application:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! Please contact us if you wish want to make changes for your submission. \n http://tedxuoft.com/";

// send email
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>
