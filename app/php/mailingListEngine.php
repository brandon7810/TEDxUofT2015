<?php

$EmailFrom = "MailingList@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Mailing List";

$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email']));
$Year = Trim(stripslashes($_POST['year']));

$Campus = Trim(stripslashes($_POST['campus']));
$Interest = Trim(stripslashes($_POST['interest']));
$Involvement = Trim(stripslashes($_POST['involvement']));

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

$Body .= "Year: ";
$Body .= $Year;
$Body .= " \n";

$Body .= "Campus: ";
$Body .= $Campus;
$Body .= " \n";

$Body .= "Interest: ";
$Body .= $Interest;
$Body .= " \n";

$Body .= "Involvement: ";
$Body .= $Involvement;
$Body .= " \n\n";

$Body2 = "Hey, we have received your application:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! Please contact us if you wish want to make changes for your submission. \n http://tedxuoft.com/";

// send email
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>
