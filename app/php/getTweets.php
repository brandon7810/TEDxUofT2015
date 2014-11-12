<?php
require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "2873234685-wNTbka6WWOKfitGq3sRJPx7bm85kszenoAtgfev",
    'oauth_access_token_secret' => "SdMZx7onivDuueuGRIKjCT3VpBRzNUu8aGuCmLmNNNGdt",
    'consumer_key' => "EWXdLjSsZ8IpLRxVThrohAb82",
    'consumer_secret' => "QaxiAorilNBAH5SKK4X6D3xg4Fw6cTaPNC7znJ7DceqZftYd79"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=TEDxUofT&count=3';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
?>