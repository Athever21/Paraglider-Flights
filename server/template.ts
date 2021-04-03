export default (src: String) => (`
  <!DOCTYPE HTML>
  <html lang="eng">
    <head>
      <meta charset="utf-8">
      <title>Paraglider Flights</title>
    </head>
    <style>
      html {
        background: #101010;
      }
    </style>
    <body>
      <div id="root"></div>
      ${src}
    </body>
  </html>
`)