{% comment %}

When using this snippet, pass a string using the "with” parameter to identify
what SVG element you want to display.
EX: {% include 'svg-definitions' with 'shopify-logo' %}

The string will be used as the condition in the case control flow tag below and used
in writing the SVG class attribute.
EX: class="shopify-logo-svg"

{% endcomment %}

{% assign icon = svg-definitions %}
{% case icon %}
  {% when 'shopify-logo' %}
    <svg xmlns="http://www.w3.org/2000/svg" class="{{ icon }}-svg" viewBox="0 0 150 43" version="1.1" aria-hidden="true">
    <title>Shopify logo</title>
    <path fill="#999999" d="M33.3,8.9 C33.3,8.9 33.3,8.7 33.2,8.6 C33.1,8.5 33,8.5 33,8.5 L29.6,8.3 L27.5,6.2 C27.4,6.1 27.3,6.1 27.2,6.1 L25.4,42.2 L38,39.5 L33.3,8.9 Z M25.8,5.9 L24.9,6.2 C24.3,4.6 23.6,3.4 22.6,2.7 C21.9,2.2 21.1,2 20.3,2.1 C20.1,1.9 19.9,1.7 19.7,1.5 C18.8,0.8 17.6,0.6 16.1,1.2 C11.8,2.7 10,8.3 9.3,11 L5.5,12.1 C5.5,12.1 4.6,12.3 4.4,12.6 C4.2,12.9 4.1,13.6 4.1,13.6 L0.9,37.9 L24.5,42.3 L26.3,6 C26.1,5.8 25.9,5.9 25.8,5.9 Z M20.1,7.6 L16,8.9 C16.5,6.8 17.6,4.6 19.6,3.8 C20,4.8 20.1,6.3 20.1,7.6 Z M16.6,2.4 C17.5,2.1 18.2,2.1 18.7,2.4 C16,3.6 14.8,6.7 14.3,9.3 L11,10.3 C11.7,7.8 13.3,3.6 16.6,2.4 Z M18.9,20.3 C18.7,20.2 18.5,20.1 18.2,20 C17.9,19.9 17.7,19.8 17.4,19.7 C17.1,19.6 16.8,19.6 16.4,19.5 L15.3,19.5 C15,19.5 14.7,19.6 14.4,19.7 C14.1,19.8 13.9,19.9 13.7,20.1 C13.5,20.3 13.4,20.5 13.3,20.7 C13.2,20.9 13.1,21.2 13.1,21.4 C13.1,21.6 13.1,21.8 13.2,22 C13.3,22.2 13.4,22.4 13.5,22.6 C13.7,22.8 13.9,23 14.1,23.2 C14.3,23.4 14.6,23.6 14.9,23.8 C15.4,24.1 15.8,24.4 16.3,24.8 C16.8,25.2 17.2,25.6 17.5,26.1 C17.9,26.6 18.2,27.1 18.4,27.8 C18.6,28.4 18.7,29.1 18.7,29.9 C18.6,31.1 18.4,32.2 17.9,33.1 C17.5,34 16.8,34.7 16.1,35.2 C15.4,35.7 14.5,36 13.6,36.1 C12.7,36.2 11.7,36.2 10.8,35.9 C10.3,35.8 9.9,35.6 9.5,35.5 C9.1,35.3 8.7,35.1 8.3,34.9 C8,34.7 7.6,34.5 7.4,34.3 C7.1,34.1 6.9,33.9 6.7,33.6 L7.8,30 C8,30.2 8.2,30.3 8.5,30.5 C8.8,30.7 9.1,30.9 9.4,31 C9.7,31.2 10.1,31.3 10.4,31.5 C10.8,31.6 11.1,31.7 11.5,31.8 L12.3,31.8 C12.5,31.7 12.8,31.6 12.9,31.5 C13.1,31.4 13.2,31.2 13.3,31 C13.4,30.8 13.4,30.6 13.5,30.3 C13.5,30.1 13.5,29.8 13.4,29.6 C13.3,29.4 13.2,29.2 13.1,28.9 C13,28.7 12.8,28.5 12.5,28.2 C12.3,28 12,27.7 11.6,27.5 C11.2,27.2 10.8,26.9 10.4,26.5 C10.1,26.1 9.7,25.8 9.5,25.3 C9.3,24.9 9.1,24.4 8.9,23.9 C8.8,23.4 8.7,22.9 8.7,22.3 C8.7,21.3 8.9,20.5 9.3,19.7 C9.6,18.9 10.1,18.2 10.7,17.5 C11.3,16.9 12,16.3 12.9,15.9 C13.8,15.5 14.7,15.2 15.8,15 C16.3,14.9 16.8,14.9 17.2,14.9 C17.7,14.9 18.1,14.9 18.5,15 C18.9,15.1 19.3,15.1 19.6,15.2 C19.9,15.3 20.2,15.4 20.5,15.5 L18.9,20.3 Z M21.5,7.2 L21.5,6.7 C21.5,5.4 21.3,4.3 21,3.5 C21.3,3.5 21.6,3.6 21.9,3.8 C22.7,4.3 23.2,5.4 23.6,6.6 L21.5,7.2 Z"/>
    <path fill="#999999" d="M45.3,29.6 C46.2,30.1 47.8,30.7 49.4,30.7 C50.8,30.7 51.6,29.9 51.6,29 C51.6,28.1 51.1,27.5 49.5,26.6 C47.6,25.5 46.2,24 46.2,22 C46.2,18.5 49.2,16 53.6,16 C55.5,16 57,16.4 57.8,16.8 L56.6,20.3 C55.9,20 54.8,19.6 53.5,19.6 C52.1,19.6 51.2,20.2 51.2,21.3 C51.2,22.1 51.9,22.7 53.1,23.3 C55.1,24.4 56.7,25.9 56.7,28 C56.7,32 53.5,34.2 49,34.1 C46.9,34.1 45,33.5 44.1,32.9 L45.3,29.6 Z M57.7,34.1 L62.6,8.9 L67.6,8.9 L65.7,18.7 L65.8,18.7 C67.1,17.1 68.9,16 71.1,16 C73.7,16 75.2,17.7 75.2,20.5 C75.2,21.4 75.1,22.7 74.8,23.8 L72.8,34.1 L67.8,34.1 L69.7,24.2 C69.8,23.5 69.9,22.7 69.9,22 C69.9,20.9 69.5,20.2 68.3,20.2 C66.7,20.2 65,22.2 64.3,25.5 L62.6,34.2 L57.7,34.2 L57.7,34.1 Z M93.3,23 C93.3,29.1 89.3,34.4 83.4,34.4 C78.9,34.4 76.5,31.3 76.5,27.5 C76.5,21.5 80.5,16.1 86.5,16.1 C91.2,16.1 93.3,19.4 93.3,23 Z M81.6,27.3 C81.6,29.1 82.3,30.5 84,30.5 C86.7,30.5 88.1,25.8 88.1,22.8 C88.1,21.3 87.5,19.8 85.7,19.8 C83.1,19.9 81.6,24.5 81.6,27.3 Z M92.1,41.1 L95.6,23 C96,21 96.4,18.3 96.6,16.4 L101,16.4 L100.7,19.2 L100.8,19.2 C102.1,17.3 104.1,16.2 106.1,16.2 C109.8,16.2 111.3,19.1 111.3,22.5 C111.3,28.5 107.4,34.6 101.6,34.6 C100.4,34.6 99.2,34.1 98.7,34.1 L98.6,34.1 L97.2,41.1 L92.1,41.1 Z M99.3,29.9 C99.8,30.3 100.5,30.6 101.4,30.6 C104.2,30.6 106.1,26 106.1,22.8 C106.1,21.5 105.6,20.1 104.1,20.1 C102.4,20.1 100.7,22.1 100.1,25.2 L99.3,29.9 Z M111.5,34.1 L114.9,16.4 L120,16.4 L116.6,34.1 L111.5,34.1 Z M118,14.5 C116.6,14.5 115.6,13.4 115.6,11.9 C115.6,10.3 116.9,9 118.5,9 C120,9 121,10.1 121,11.6 C121,13.4 119.6,14.5 118,14.5 Z M120.9,34.1 L123.6,20.1 L121.3,20.1 L122,16.4 L124.3,16.4 L124.4,15.6 C124.8,13.5 125.6,11.4 127.3,10 C128.6,8.9 130.4,8.4 132.2,8.4 C133.4,8.4 134.3,8.6 134.9,8.8 L133.9,12.7 C133.5,12.6 133,12.4 132.3,12.4 C130.6,12.4 129.6,13.9 129.3,15.6 L129.1,16.4 L132.6,16.4 L131.9,20.1 L128.4,20.1 L125.7,34.1 L120.9,34.1 L120.9,34.1 Z M138.9,16.4 L139.7,24.3 C139.9,26.1 140.1,27.6 140.1,28.5 L140.2,28.5 C140.6,27.6 141,26.2 141.7,24.3 L144.8,16.4 L150,16.4 L143.9,29.5 C141.7,34 139.6,37.2 137.3,39.4 C135.5,41.1 133.4,41.9 132.4,42.1 L131,37.9 C131.8,37.6 132.9,37.2 133.8,36.5 C135,35.7 135.9,34.6 136.5,33.5 C136.6,33.2 136.7,33 136.6,31.6 L133.6,16.4 L138.9,16.4 Z"/>
  </svg>

  {% when 'lock-icon' %}
    <svg xmlns="http://www.w3.org/2000/svg" class="{{ icon }}-svg" viewBox="0 0 17 20" version="1.1" aria-hidden="true">
      <title>Lock icon</title>
      <path fill="#FFFFFF" d="M15.725,8.3333333 L15.3,8.3333333 L15.3,6.875 C15.3,3.02 12.3131,0 8.5,0 C4.6869,0 1.7,3.02 1.7,6.875 L1.7,8.3333333 L1.275,8.3333333 C0.5712,8.3333333 0,8.8933333 0,9.5833333 L0,18.75 C0,19.44 0.5712,20 1.275,20 L15.725,20 C16.4288,20 17,19.44 17,18.75 L17,9.5833333 C17,8.8933333 16.4288,8.3333333 15.725,8.3333333 L15.725,8.3333333 L15.725,8.3333333 Z M4.25,6.875 C4.25,4.3808333 6.07665,2.5 8.5,2.5 C10.92335,2.5 12.75,4.3808333 12.75,6.875 L12.75,8.3333333 L4.25,8.3333333 L4.25,6.875 L4.25,6.875 Z M10.2,15.0166667 C10.2,15.9275 9.44605,16.6666667 8.517,16.6666667 L8.483,16.6666667 C7.55395,16.6666667 6.8,15.9275 6.8,15.0166667 L6.8,13.3166667 C6.8,12.4058333 7.55395,11.6666667 8.483,11.6666667 L8.517,11.6666667 C9.44605,11.6666667 10.2,12.4058333 10.2,13.3166667 L10.2,15.0166667 L10.2,15.0166667 Z"/>
    </svg>

{% endcase %}
