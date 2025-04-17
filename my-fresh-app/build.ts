const command = new Deno.Command("tailwindcss", {
    args: ["-i", "./styles/main.css", "-o", "./static/styles.css"],
  });
  
  const { code } = await command.output();
  Deno.exit(code);