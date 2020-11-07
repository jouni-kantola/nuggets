if (true) {
  hereWeGo = "yolo";
}

{
  let hereWeGo = "again?";

  {
    let hereWeGo = "yet, again?";
    console.log(hereWeGo); // => yet, again?
  }

  console.log(hereWeGo); // => again?
}

console.log(hereWeGo); // => yolo
