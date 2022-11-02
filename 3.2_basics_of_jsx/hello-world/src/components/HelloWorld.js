function HelloWorld() {
  const data = ["Hello", " World"];
  const number1 = 5;
  const number2 = 6;
  const string = "I Love React!";

  return (
    <div>
      <h3>{data}</h3>
      <h3>
        {number1} + {number2} {"="} {number1 + number2}
      </h3>
      <h3>The string's lenght is: {string.length}</h3>
    </div>
  );
}

export default HelloWorld;
