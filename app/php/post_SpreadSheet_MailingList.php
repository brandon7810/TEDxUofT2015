<?php

// Zend library include path
set_include_path(get_include_path() . PATH_SEPARATOR . "$_SERVER[DOCUMENT_ROOT]/ZendGdata-1.8.1/library");

include_once("Google_Spreadsheet.php");
include_once("../../../config/post_spreadsheet_config.php");

$ss = new Google_Spreadsheet($u,$p);
$ss->useSpreadsheet("Mailing List 2015");

$name = Trim(stripslashes($_GET['name']));
$email = Trim(stripslashes($_GET['email']));
$year = Trim(stripslashes($_GET['year']));

$campus = Trim(stripslashes($_GET['campus']));
$interest = Trim(stripslashes($_GET['interest']));
$involvement = Trim(stripslashes($_GET['involvement']));


// if not setting worksheet, "Sheet1" is assumed
// $ss->useWorksheet("worksheetName");

$row = array
(
    "Name" => $name
    , "Email" => $email
    , "Year of Study" => $year

	, "College/Campus" => $campus
	, "Area of interest" => $interest
	, "Involvement in TEDxUofT" => $involvement

);

if ($ss->addRow($row)) echo "Form data successfully stored using Google Spreadsheet";
else echo "Error, unable to store spreadsheet data";
?>
