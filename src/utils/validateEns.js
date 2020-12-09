export default function validateEns(input) {
  if (!input.match(/^[a-zA-Z0-9-.]+$/)) {
    return false;
  }
  const segs = input.split(".");
  if (segs.length < 2) {
    return false;
  }
  const last = segs[segs.length - 1];
  return last === "eth" || last === "xyz" || last === "luxe";
}
