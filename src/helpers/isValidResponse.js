export default function isValidResponse(res) {
  if (res.status != 200) {
    return false;
  }
  return true;
}
