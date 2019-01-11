module.exports = ({ name, email, message, connection }) => {
  const formattedMessage = message.replace(/(?:\r\n|\r|\n)/g, '<br />');

  return `
  <html>
    <body>
      <div>
        from: ${name}<br />
        email: ${email}<br />
        conn: ${connection}<br />
        <br />
        ${formattedMessage}
      </div>
    </body>
  </html>
  `;
};
