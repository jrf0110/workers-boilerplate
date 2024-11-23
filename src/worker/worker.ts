export default {
  async fetch() {
    return new Response(
      /* html */ `
<!DOCTYPE html>
<html> 
  <head>
    <script type="module" src="/client.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html> 
    `,
      { headers: { 'Content-Type': 'text/html' } },
    )
  },
} satisfies ExportedHandler
