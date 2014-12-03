<?php

$EmailFrom = "Applications@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Volunteer Application";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Phone = Trim(stripslashes($_POST['Phone']));
$AvailableOnCon = Trim(stripslashes($_POST['AvailableOnCon']));
$Year = Trim(stripslashes($_POST['Year']));
$Campus = Trim(stripslashes($_POST['Campus']));
$Positions = Trim(stripslashes($_POST['Positions']));
$HowHearTEDxUofT = Trim(stripslashes($_POST['HowHearTEDxUofT']));
$ExperiencePosi = Trim(stripslashes($_POST['ExperiencePosi']));
$PastExper = Trim(stripslashes($_POST['PastExper']));
$LikeSeeInEvent = Trim(stripslashes($_POST['LikeSeeInEvent']));
$Questions = Trim(stripslashes($_POST['Questions']));


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

$Body .= "Available On Conference Date: ";
$Body .= $AvailableOnCon;
$Body .= " \n";

$Body .= "Year: ";
$Body .= $Year;
$Body .= " \n";

$Body .= "Campus: ";
$Body .= $Campus;
$Body .= " \n";

$Body .= "Positions: ";
$Body .= $Positions;
$Body .= " \n";

$Body .= "How did you hear about TEDxUofT: ";
$Body .= $HowHearTEDxUofT;
$Body .= " \n";

$Body .= "How did you learn about this volunteer position?: ";
$Body .= $ExperiencePosi;
$Body .= " \n";

$Body .= "What’s your past experience with TED?: ";
$Body .= $PastExper;
$Body .= " \n";

$Body .= "Is there anything you would really like to see in the upcoming TEDxUofT event?: ";
$Body .= $LikeSeeInEvent;
$Body .= " \n";

$Body .= "Any questions for us?: ";
$Body .= $Questions;
$Body .= " \n";


$Body2 = "Hey, we have received your application:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! Please contact us if you wish want to make changes for your submission. \n http://tedxuoft.com/";



// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>