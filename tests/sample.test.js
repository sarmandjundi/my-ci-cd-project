test("Simple test example", () => {
    expect(2 + 2).toBe(4);
  });
  

  test("Check if string matches pattern", () => {
    const message = "Hello, CI/CD Pipeline!";
    expect(message).toMatch(/CI\/CD/);
  });
  