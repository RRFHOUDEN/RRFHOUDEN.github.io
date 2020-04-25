$(function() {
  
    // 「#form」要素のsubmitイベントを作成してください
    $('#birthYearToAgeForm').submit(function() {
        var textValue = parseInt( $('#year').val() );
        textValue = 2020 - textValue;
        textValue = Number(textValue);
        textValue = "今年の誕生日を迎えた後" + textValue + "歳になります"
        $('#nowAge').text(textValue);
        return false;
    });
      
  });