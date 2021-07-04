import abiDecoder from "../../utils/abiDecoder";

console.log("##### ronin content script loaded!");

console.log(
  abiDecoder.decodeMethod(
    "0x8264f2c2000000000000000000000000000000000000000000000000000000000012c42f00000000000000000000000000000000000000000000000000000000000d02df"
  )
);
