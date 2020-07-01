$(function() {
  let header = $("body > header")

  header.prependTo("body");
  $("main > h1").prependTo(header);

  let first = $("section > figure").first()
  let second = $("section > figure").last();
  // console.log(first);
  // console.log(second);
});