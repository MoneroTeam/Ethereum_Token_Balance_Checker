export default function validateEns(input) {
  const arr = input.split(".");
  if (arr.length < 2) {
    return false;
  }
  const last = arr[arr.length - 1];
  return last === "eth" || last === "xyz" || last === "luxe";
}
