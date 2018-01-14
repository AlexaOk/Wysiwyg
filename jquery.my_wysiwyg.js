(function($)
{
  $.fn.my_wysiwyg=function(options)
  {
    var buttons = {
      buttons : ['gras', 'italique', 'barré', 'couleur', 'police', 'lien', 'taille', 'plus', 'minus', 'gauche', 'droite', 'centré', 'justifié', 'générer', 'enregistrer']
    };
    var parameters = $.extend(buttons, options);
    return this.each(function()
    {
      $(this).wrap("<div class = 'wysiwyg'></div>");
      var wrap = $(this).parent();

      wrap.append("<div class='editor' contenteditable='true'></div>");
      $(this).hide();

      wrap.prepend("<div class='buttons'></div>");

      if ($.inArray("gras", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='gras'><img src='misc/bold.png'/></button>");
        wrap.find(".gras").click(function() {
          document.execCommand('bold', false, null);
        });
      };

      if ($.inArray("italique", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='italique'><img src='misc/italic.png'/></span></button>");
        wrap.find(".italique").click(function() {
          document.execCommand('italic', false, null);
        });
      };

      if ($.inArray("barré", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='barré'><img src='misc/strikethrough.png'/></button>");
        wrap.find(".barré").click(function() {
          document.execCommand('strikeThrough', false, null);
        });
      };

      if ($.inArray("taille", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<select class='taille'></select>");
        wrap.find(".taille").append("<option value=''>Taille</option>");
        wrap.find(".taille").append("<option value='1'>6px</option>");
        wrap.find(".taille").append("<option value='2'>8px</option>");
        wrap.find(".taille").append("<option value='3'>12px</option>");
        wrap.find(".taille").append("<option value='4'>14px</option>");
        wrap.find(".taille").append("<option value='5'>20px</option>");
        wrap.find(".taille").append("<option value='6'>24px</option>");
        wrap.find(".taille").append("<option value='7'>32px</option>");
        wrap.find(".taille").change(function()
        {
          document.execCommand('fontSize', false, $(this).val());
        });
      };

      if ($.inArray("police", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<select class='police'></select>");
        wrap.find(".police").append("<option value=''>Police</option>");
        wrap.find(".police").append("<option value='Arial'>Arial</option>");
        wrap.find(".police").append("<option value='Calibri'>Calibri</option>");
        wrap.find(".police").append("<option value='Courier'>Courier</option>");
        wrap.find(".police").append("<option value='Times New Roman'>Times New Roman</option>");
        wrap.find(".police").change(function() {
          document.execCommand('fontName', false, $(this).val());
        });
      };

      if ($.inArray("couleur", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<select class='color'></select>");
        wrap.find(".color").append("<option value=''>Couleur</option>");
        wrap.find(".color").append("<option value='#0000FF'>Bleu</option>");
        wrap.find(".color").append("<option value='#FF00FF'>Fuschia</option>");
        wrap.find(".color").append("<option value='#FF0000'>Rouge</option>");
        wrap.find(".color").append("<option value='#228B22'>Vert</option>");
        wrap.find(".color").append("<option value='#FF7F50'>Orange</option>");
        wrap.find(".color").change(function() {
          document.execCommand('foreColor', false, $(this).val());
        });
      };

      if ($.inArray("lien", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='lien'><img src='misc/link.png'/></button>");
        wrap.find(".lien").click(function() {
          var linkURL = prompt('Enter a URL:', 'http://');
          document.execCommand('createLink', false, linkURL);
        });
      };

      var size = 3;

      if ($.inArray("plus", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='plus'><img src='misc/plus.png'/></button>");
        wrap.find(".plus").click(function() {
          size = size+1;
          document.execCommand('fontSize', false, size);
        });
      };

      if ($.inArray("minus", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='minus'><img src='misc/minus.png'/></button>");
        wrap.find(".minus").click(function() {
          size = size-1;
          document.execCommand('fontSize', false, size);
        });
      };

      if ($.inArray("gauche", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='gauche'><img src='misc/left.png'/></button>");
        wrap.find(".gauche").click(function() {
          document.execCommand('justifyLeft', false, null);
        });
      };

      if ($.inArray("droite", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='droite'><img src='misc/right.png'/></button>");
        wrap.find(".droite").click(function() {
          document.execCommand('justifyRight', false, null);
        });
      };

      if ($.inArray("centré", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='centré'><img src='misc/center.png'/></button>");
        wrap.find(".centré").click(function() {
          document.execCommand('justifyCenter', false, null);
        });
      };

      if ($.inArray("justifié", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='justifié'><img src='misc/justify.png'/></button>");
        wrap.find(".justifié").click(function() {
          document.execCommand('justifyFull', false, null);
        });
      };

      if ($.inArray("générer", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='générer'><img src='misc/html.png'/></button>");
        wrap.find(".générer").click(function() {
          var html = wrap.find(".editor").html();
          var str = html.split("<br>");
          var content = "";
          $.each(str, function( index, value ) {
            var str1 = "<p> " + value + "</p>";
            content += str1;
            var n = wrap.find("textarea").html(content);
          });
          wrap.find("textarea").toggle();
          wrap.find(".editor").toggle();
        });
      };

      if ($.inArray("enregistrer", parameters.buttons) != -1) {
        wrap.find(".buttons").append("<button class='enregistrer'><img src='misc/justify.png'/></button>");
        wrap.find(".enregistrer").click(function() {
          var text = $(".editor").html();

          localStorage.setItem('tex2', text);
        });
      };


    });
  };
})(jQuery);
