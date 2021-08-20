const changeColor = () => {
  // valid characters in a hexadecimal code
  const hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexcode = ""; // empty string to store generated hex code

  // run loop 6 times to get hexcode with 6 characters
  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);

    hexcode += hex_numbers[random_index];
  }

  // insert generated hexcode in the paragraph text inside HTML
  document.getElementById("hex-code").innerHTML = hexcode;

  // change background color to match the hexcode value
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
};
