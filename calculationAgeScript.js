$(function() {
  
    // 「#form」要素のsubmitイベントを作成してください
    $('#birth-year-to-age-form').submit(function() {
        var textValue = parseInt( $('#birth-year').val() );
        textValue = 2020 - textValue;
        textValue = Number(textValue);
        textValue = "今年の誕生日を迎えた後" + textValue + "歳になります"
        $('#now-age-birth').text(textValue);
        return false;
    });

    $('#univent-year-to-age-form').submit(function() {
        var textValue = parseInt( $('#univent-year').val() );
        textValue = 2020 - textValue + 19;
        textValue = Number(textValue);
        textValue = "今年の誕生日を迎えた後" + textValue + "歳になります"
        $('#now-age-univent').text(textValue);
        return false;
    });

    $('#univgrad-year-to-age-form').submit(function() {
        var textValue = parseInt( $('#univgrad-year').val() );
        textValue = 2020 - textValue + 23;
        textValue = Number(textValue);
        textValue = "今年の誕生日を迎えた後" + textValue + "歳になります"
        $('#now-age-univgrad').text(textValue);
        return false;
    });
      
  });