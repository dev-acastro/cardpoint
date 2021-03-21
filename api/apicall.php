<?php
include ("CardConnectRestClient.php");


authTransaction();


function authTransaction() {


global $url, $user, $password;


echo "\nAuthorization Request\n";



$client = new CardConnectRestClient("https://fts-uat.cardconnect.com/cardconnect/rest/", "testing", "testing123");

$request = array(
'merchid'   => "496160873888",
'accttyppe' => "VISA",
'account'   => "4788250000121443",
'expiry'    => "0922",
'cvv2'      => "123",
'amount'    => "100",
'currency'  => "USD",
'orderid'   => "12345",
'name'      => "Test User",
'street'    => "123 Test St",
'city'      => "Testville",
'region'    => "Test State",
'country'   => "US",
'postal'    => "11111",
'tokenize'  => "Y",
'capture' => "Y",
    'receipt'=> "Y",
);

$response = json_encode($client->authorizeTransaction($request), JSON_PRETTY_PRINT);


echo $response;
}

?>