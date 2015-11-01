<?php

// Zend library include path
set_include_path(get_include_path() . PATH_SEPARATOR . "$_SERVER[DOCUMENT_ROOT]/ZendGdata-1.8.1/library");

include_once("Google_Spreadsheet.php");
include_once("../../../config/post_spreadsheet_config.php");

$ss = new Google_Spreadsheet($u,$p);
$ss->useSpreadsheet("2015 Delegate Application");

$Name = Trim(stripslashes($_GET['Name']));
$Email = Trim(stripslashes($_GET['Email']));
$Year = Trim(stripslashes($_GET['Year']));
$Phone = Trim(stripslashes($_GET['Phone']));
$Status = Trim(stripslashes($_GET['Status']));
$Occupation = Trim(stripslashes($_GET['Occupation']));
$Program = Trim(stripslashes($_GET['Program']));
$Campus = Trim(stripslashes($_GET['Campus']));
$Dietary = Trim(stripslashes($_GET['Dietary']));
$FinalQ = Trim(stripslashes($_GET['FinalQ']));

// if not setting worksheet, "Sheet1" is assumed
// $ss->useWorksheet("worksheetName");

$row = array
(
    "Name" => $Name
    , "E-mail" => $Email
	, "Year" => $Year
	, "Phone" => $Phone
	, "I am a(an)" => $Status
	, "Occupation" => $Occupation
	, "Program" => $Program
	, "Campus" => $Campus
	, "Dietary" => $Dietary
	, "Final Question" => $FinalQ

);

if ($ss->addRow($row)) echo "Form data successfully stored using Google Spreadsheet";
else echo "Error, unable to store spreadsheet data";
?>
