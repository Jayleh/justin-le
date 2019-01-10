module.exports = ({ name, email, message, connection }) => {
  return `
  <html>
    <body>
      <div>
        from: ${name}<br />
        email: ${email}<br />
        conn: ${connection}<br />
        <br />
        ${message}
      </div>
    </body>
  </html>
  `;
};
