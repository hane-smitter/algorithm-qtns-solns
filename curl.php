<?php 

  $ch = curl_init('https://coderbyte.com/api/challenges/json/json-cleaning');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $data = curl_exec($ch);
  curl_close($ch);

  // print_r(json_decode($data, true));
  $dataArray = json_decode($data, true);
  // print_r($dataArray);
  

  function sift2($item) {
    $pattern = "/^(N\/A|-)?$/i";
    if(!is_array($item)) {
      if(preg_match($pattern, $item)) {
        return false;
      }
    }

    return true;
  }

  function sift($item){
    $pattern = "/^(N\/A|-)?$/i";
    if(is_array($item)) {
      // echo "BEFORE sifting";
      // print_r($item);
      foreach($item as $key => $value) {
        // preg_match($pattern, $value, $matches, PREG_OFFSET_CAPTURE);
        if(preg_match($pattern, $value)) {
          unset($item[$key]);
        }

        // print_r($matches);
      }
      // echo "after sifting";
      // print_r($item);
    } else {
      if(preg_match($pattern, $item)) {
        // unset($item);
        return false;
      }
    }

    return $item;
  }
  // echo var_dump(json_decode($data, true));
  $filtered = array_map("sift", $dataArray);
  $filtered2 = array_filter($filtered, "sift2");
  print_r($filtered2);

?>