$(function() {
  $("#birthday").datepicker({
      changeMonth: true,   
      changeYear: true,    
      yearRange: "1900:2025",  
      dateFormat: "yy-mm-dd"   
  });

  var cities = [
      "Adana", "Adıyaman", "Afyonkarahisar", "Aksaray", "Amasya", "Ankara", "Antalya", 
      "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", 
      "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", 
      "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", 
      "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", 
      "Karaman", "Kastamonu", "Kayseri", "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", 
      "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", 
      "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak", "Tekirdağ", 
      "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ];
  
  var languages = [
      "Java", "Python", "JavaScript", "C", "C++", "Ruby", "Swift", "Go", "Rust", 
      "Kotlin", "PHP", "TypeScript", "HTML", "CSS", "SQL", "R", "Perl", "MATLAB", "Lua", 
      "Haskell", "Scala", "Objective-C", "Dart", "Shell", "C#", "Visual Basic", "F#", "Racket"
  ];
  
  $("#city").autocomplete({
      source: cities
  });

  $("#language").autocomplete({
      source: languages
  });
});
