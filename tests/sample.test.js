test("Simple test example", () => {
    expect(2 + 2).toBe(4);
  });
  

  test("check if string contains a word", ()=> {
    const message = "hello, ci/cd pipeline!";
    expect(message).toMatch(/CI\/CD/);
  });